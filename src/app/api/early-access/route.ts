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
}

const FORMSPREE_ENDPOINT = "https://formspree.io/f/mjgzywdj";

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

    // 2. Determine Launch Priority by Pincode
    const isTeghraBegusarai =
      cleanPincode.startsWith("851") || cleanPincode === "851133";
    const priorityGroup = isTeghraBegusarai
      ? "Wave 1 - Immediate Launch Area (Teghra / Begusarai)"
      : "Wave 2 - Priority State Rollout";

    // 3. Generate Unique Registration ID
    const randomSuffix = Math.floor(1000 + Math.random() * 9000);
    const registrationId = `CNM-EA-${cleanPincode}-${randomSuffix}`;

    // 4. Save to Formspree
    try {
      await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          registrationId,
          priorityGroup,
          role: body.role,
          name: body.name.trim(),
          email: body.email.trim(),
          phone: cleanPhone,
          pincode: cleanPincode,
          address: body.address?.trim() || "Not provided",
          targetExam: body.targetExam || "Not applicable",
          coachingName: body.coachingName?.trim() || "Not provided",
          subjectOrSpecialty: body.subjectOrSpecialty?.trim() || "Not provided",
          studentCount: body.studentCount || "Not applicable",
          preferredFeatures: body.preferredFeatures?.join(", ") || "None",
          notes: body.notes?.trim() || "None",
          submittedAt: new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" }),
        }),
      });
    } catch (fsErr) {
      console.warn("[EarlyAccess] Warning saving to Formspree:", fsErr);
    }

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
      message: "Congratulations! Your early access registration has been confirmed.",
    });
  } catch (error) {
    console.error("[EarlyAccess] Unexpected error handling submission:", error);
    return NextResponse.json(
      { error: "An unexpected error occurred while processing your registration. Please try again." },
      { status: 500 }
    );
  }
}
