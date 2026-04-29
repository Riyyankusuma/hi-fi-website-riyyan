import { NextResponse } from "next/server";
import fs from "fs/promises";
import path from "path";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { filename, content, folder } = body as { filename: string; content: string; folder?: string };
    if (!filename || !content) {
      return NextResponse.json({ success: false, error: "Missing filename or content" }, { status: 400 });
    }

    // extract base64 part
    const match = content.match(/^data:(.+);base64,(.+)$/);
    const base64 = match ? match[2] : content;

    const uploadsDir = path.join(process.cwd(), "public", "uploads", folder || "");
    await fs.mkdir(uploadsDir, { recursive: true });
    const filePath = path.join(uploadsDir, filename);
    await fs.writeFile(filePath, Buffer.from(base64, "base64"));

    const url = `/uploads/${folder ? `${folder}/` : ""}${filename}`;
    return NextResponse.json({ success: true, url });
  } catch (err) {
    return NextResponse.json({ success: false, error: String(err) }, { status: 500 });
  }
}
