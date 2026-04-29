export async function fileToBase64(file: File): Promise<string> {
  return await new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => {
      const result = reader.result as string;
      // Ensure data URL format
      if (!result.startsWith("data:")) {
        const mime = file.type || "application/octet-stream";
        resolve(`data:${mime};base64,${btoa(result)}`);
      } else {
        resolve(result);
      }
    };
    reader.onerror = (err) => reject(err);
    reader.readAsDataURL(file);
  });
}

export async function uploadFileToServer(file: File, folder = ""): Promise<{ success: boolean; url?: string; error?: string }>{
  const dataUrl = await fileToBase64(file);
  const res = await fetch('/api/upload', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ filename: file.name, content: dataUrl, folder }),
  });
  return res.json();
}
