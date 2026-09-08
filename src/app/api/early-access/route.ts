import { NextRequest, NextResponse } from "next/server";

interface EarlyAccessPayload {
  name: string;
  email: string;
  phone: string;
  role: "student" | "coaching" | "teacher" | "parent";
  pincode: string;
  address?: string;
  targetExam?: string;
  coachingName?: string;
  subjectOrSpecialty?: string;
  studentCount?: string;
  preferredFeatures?: string[];
  notes?: string;
  turnstileToken?: string;
}

const DEFAULT_TEST_SECRET_KEY = "1x0000000000000000000000000000000AA";

export async function POST(request: NextRequest) {
  try {
    const body: EarlyAccessPayload = await request.json();

    // 1. Basic Field Validations
    if (!body.name || body.name.trim().length < 2) {
      return NextResponse.json(
        { error: "Please enter your full name (minimum 2 characters)." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!body.email || !emailRegex.test(body.email.trim())) {
      return NextResponse.json(
        { error: "Please enter a valid email address." },
        { status: 400 }
      );
    }

    const cleanPhone = body.phone ? body.phone.replace(/[\s\-\+]/g, "").slice(-10) : "";
    if (!/^[6-9]\d{9}$/.test(cleanPhone)) {
      return NextResponse.json(
        { error: "Please enter a valid 10-digit Indian mobile number." },
        { status: 400 }
      );
    }

    const cleanPincode = body.pincode ? body.pincode.trim() : "";
    if (!/^\d{6}$/.test(cleanPincode)) {
      return NextResponse.json(
        { error: "Please enter a valid 6-digit Indian postal pincode." },
        { status: 400 }
      );
    }

    // 2. Cloudflare Turnstile Verification
    const secretKey =
      process.env.CLOUDFLARE_TURNSTILE_SECRET_KEY || DEFAULT_TEST_SECRET_KEY;
    const token = body.turnstileToken;

    if (token) {
      try {
        const clientIp =
          request.headers.get("cf-connecting-ip") ||
          request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
          "127.0.0.1";

        const formData = new URLSearchParams();
        formData.append("secret", secretKey);
        formData.append("response", token);
        formData.append("remoteip", clientIp);

        const turnstileRes = await fetch(
          "https://challenges.cloudflare.com/turnstile/v0/siteverify",
          {
            method: "POST",
            body: formData,
            headers: {
              "Content-Type": "application/x-www-form-urlencoded",
            },
          }
        );

        const turnstileData = await turnstileRes.json();
        if (!turnstileData.success) {
          console.warn("[EarlyAccess] Turnstile verification failed:", turnstileData);
          // If in production with custom key, reject bot
          if (process.env.CLOUDFLARE_TURNSTILE_SECRET_KEY) {
            return NextResponse.json(
              { error: "Bot verification failed. Please refresh and try again." },
              { status: 403 }
            );
          }
        }
      } catch (verifError) {
        console.error("[EarlyAccess] Error calling Cloudflare verify endpoint:", verifError);
      }
    }

    // 3. Determine Launch Priority by Pincode
    const isTeghraBegusarai =
      cleanPincode.startsWith("851") || cleanPincode === "851133";
    const priorityGroup = isTeghraBegusarai
      ? "Wave 1 - Immediate Launch Area (Teghra / Begusarai)"
      : "Wave 2 - Priority State Rollout";

    // 4. Generate Unique Registration ID
    const randomSuffix = Math.floor(1000 + Math.random() * 9000);
    const registrationId = `CNM-EA-${cleanPincode}-${randomSuffix}`;

    console.log(`[EarlyAccess:NewApplication] ID: ${registrationId}`, {
      name: body.name,
      email: body.email,
      phone: cleanPhone,
      role: body.role,
      pincode: cleanPincode,
      priorityGroup,
      time: new Date().toISOString(),
    });

    return NextResponse.json({
      success: true,
      registrationId,
      priorityGroup,
      isImmediateZone: isTeghraBegusarai,
      name: body.name,
      role: body.role,
      pincode: cleanPincode,
      message:
        "Congratulations! Your early access registration has been confirmed.",
    });
  } catch (error) {
    console.error("[EarlyAccess] Unexpected error handling submission:", error);
    return NextResponse.json(
      { error: "An unexpected error occurred while processing your registration. Please try again." },
      { status: 500 }
    );
  }
}
