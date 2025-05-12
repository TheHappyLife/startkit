export default function compactText(text?: string, before?: number, after?: number) {
  try {
    if (!text) return "";
    const beforeLength = before ?? 3;
    const afterLength = after ?? 3;
    if (text.length <= beforeLength + afterLength) {
      return text;
    }

    return text?.slice(0, beforeLength) + "..." + text?.slice(-afterLength);
  } catch (err) {
    console.error("🚀 ~ compactText ~ err:", err);

    return text;
  }
}
