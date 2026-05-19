const next = require("next");
const express = require("express");

// --- COLOR CODES ---
const color = {
  reset: "\x1b[0m",
  red: "\x1b[31m",
  green: "\x1b[32m",
  yellow: "\x1b[33m",
  blue: "\x1b[34m",
  magenta: "\x1b[35m",
  cyan: "\x1b[36m",
  white: "\x1b[37m",
  bold: "\x1b[1m",
};

// Pick color based on HTTP method
const methodColor = (method) => {
  switch (method) {
    case "GET": return color.green;
    case "POST": return color.cyan;
    case "PUT": return color.yellow;
    case "DELETE": return color.red;
    default: return color.white;
  }
};

const dev = false;
const app = next({ dev });
const handle = app.getRequestHandler();

async function startServer() {
  console.log(`${color.cyan}${color.bold}
███████╗███████╗██████╗ ██╗   ██╗███████╗██████╗ 
██╔════╝██╔════╝██╔══██╗██║   ██║██╔════╝██╔══██╗
███████╗█████╗  ██████╔╝██║   ██║█████╗  ██████╔╝
╚════██║██╔══╝  ██╔══██╗██║   ██║██╔══╝  ██╔══██╗
███████║███████╗██║  ██║╚██████╔╝███████╗██║  ██║
╚══════╝╚══════╝╚═╝  ╚═╝ ╚═════╝ ╚══════╝╚═╝  ╚═╝  
${color.reset}`);
console.log(`${color.magenta}${color.bold}⚡ Devloped by: JAVED Hussain | ShapeMySites ⚡${color.reset}`);
  console.log(`${color.blue}${color.bold}💻 Built with passion, code & cyber creativity 🚀${color.reset}`);
  console.log(""); // spacing
  console.log(`${color.green}🚀 Preparing Next.js app...${color.reset}`);
  await app.prepare();

  const server = express();

  // Pro Logging Middleware
  server.use((req, res, nextFn) => {
    const start = Date.now();
    const mColor = methodColor(req.method);

    res.on("finish", () => {
      const duration = Date.now() - start;
      const statusColor =
        res.statusCode >= 500 ? color.red :
        res.statusCode >= 400 ? color.yellow :
        color.green;

      console.log(
        `${color.white}[${new Date().toLocaleTimeString()}]${color.reset} ` +
        `${mColor}${req.method}${color.reset} ` +
        `${color.blue}${req.url}${color.reset} ` +
        `${statusColor}${res.statusCode}${color.reset} ` +
        `${color.magenta}${duration}ms${color.reset}`
      );
    });

    nextFn();
  });

  // Next.js request handler
  server.use((req, res) => handle(req, res));

  const PORT = process.env.PORT || 3000;
  server.listen(PORT, () => {
    console.log(
      `${color.green}✅ Server running on ${color.bold}http://localhost:${PORT}${color.reset}`
    );
    console.log(`${color.yellow}📡 Mode: Production${color.reset}`);
  });
}

startServer().catch((err) => {
  console.error(`${color.red}❌ Server Error:`, err, color.reset);
});
