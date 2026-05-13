import { readFileSync } from "fs";
import { join } from "path";
import { NextResponse } from "next/server";

export function GET() {
  const filePath = join(process.cwd(), "public", "aniketcontact.vcf");
  const fileContent = readFileSync(filePath, "utf-8");

  return new NextResponse(fileContent, {
    headers: {
      "Content-Type": "text/vcard; charset=utf-8",
    },
  });
}
