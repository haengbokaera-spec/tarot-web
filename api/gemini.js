export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({
      error: "Only POST requests are allowed."
    });
  }

  try {
    const apiKey = process.env.GEMINI_API_KEY;

    if (!apiKey) {
      return res.status(500).json({
        error: "Missing GEMINI_API_KEY in Vercel Environment Variables."
      });
    }

    const body =
      typeof req.body === "string"
        ? JSON.parse(req.body)
        : req.body;

    const prompt = body?.prompt;

    if (!prompt || typeof prompt !== "string") {
      return res.status(400).json({
        error: "Missing prompt."
      });
    }

    const models = [
      "gemini-2.5-flash-lite",
      "gemini-2.5-flash"
    ];

    let lastError = null;

    for (const model of models) {
      try {
        const response = await fetch(
          `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${apiKey}`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify({
              contents: [
                {
                  parts: [
                    {
                      text: prompt
                    }
                  ]
                }
              ],
              generationConfig: {
                temperature: 0.75,
                maxOutputTokens: 900
              }
            })
          }
        );

        const data = await response.json();

        if (!response.ok) {
          lastError = data.error?.message || `Gemini API error with ${model}.`;

          const isTemporary =
            response.status === 429 ||
            response.status === 500 ||
            response.status === 502 ||
            response.status === 503 ||
            response.status === 504 ||
            String(lastError).toLowerCase().includes("high demand") ||
            String(lastError).toLowerCase().includes("overloaded") ||
            String(lastError).toLowerCase().includes("try again later");

          if (isTemporary) {
            continue;
          }

          return res.status(response.status).json({
            error: lastError,
            model,
            details: data
          });
        }

        const text =
          data.candidates?.[0]?.content?.parts
            ?.map((part) => part.text || "")
            .join("")
            .trim() || "Gemini không trả về nội dung.";

        return res.status(200).json({
          text,
          model
        });
      } catch (error) {
        lastError = error.message || `Server error with ${model}.`;
        continue;
      }
    }

    return res.status(503).json({
      error:
        "Gemini đang quá tải tạm thời. Hãy thử lại sau vài phút, hoặc bấm lại nút Lấy góc nhìn FreshSpirit.",
      details: lastError
    });
  } catch (error) {
    return res.status(500).json({
      error: error.message || "Server error."
    });
  }
}