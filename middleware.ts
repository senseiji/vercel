import { NextRequest, NextResponse } from "next/server";

const BLOCKED_UA_SUBSTRINGS = [
  "python-requests",
  "curl/",
  "wget/",
  "httpclient",
  "libwww-perl",
  "go-http-client",
  "scrapy",
  "sqlmap",
  "nmap",
  "masscan",
  "zgrab",
  "nikto",
  "ahrefsbot",
  "semrushbot",
  "mj12bot",
  "dotbot",
  "bytespider",
  "petalbot",
  "amazonbot",
  "dataforseobot",
  "serpstatbot",
  "seokicks",
  "sogou",
  "censysinspect",
];

const SUSPICIOUS_PATH_PATTERNS = [
  /^\/wp-admin/i,
  /^\/wp-login\.php/i,
  /^\/xmlrpc\.php/i,
  /^\/phpmyadmin/i,
  /^\/\.env/i,
  /^\/admin\b/i,
  /^\/boaform/i,
  /^\/cgi-bin/i,
  /\.php$/i,
  /\.asp$/i,
  /\.aspx$/i,
  /\.env(\.|$)/i,
];

function isSuspiciousPath(pathname: string) {
  return SUSPICIOUS_PATH_PATTERNS.some((pattern) => pattern.test(pathname));
}

function hasBlockedUA(userAgent: string) {
  const ua = userAgent.toLowerCase();
  return BLOCKED_UA_SUBSTRINGS.some((needle) => ua.includes(needle));
}

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;
  const userAgent = request.headers.get("user-agent") ?? "";

  if (isSuspiciousPath(pathname)) {
    return new NextResponse("Not Found", {
      status: 404,
      headers: {
        "cache-control": "public, max-age=3600",
      },
    });
  }

  if (hasBlockedUA(userAgent)) {
    return new NextResponse("Forbidden", {
      status: 403,
      headers: {
        "cache-control": "public, max-age=300",
        "retry-after": "3600",
      },
    });
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml|images/|.*\\.(?:png|jpg|jpeg|gif|webp|svg|ico|css|js|map|txt|xml|pdf)$).*)",
  ],
};
