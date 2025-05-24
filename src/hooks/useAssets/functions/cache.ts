import { APP_NAME } from "@/config/app.config";

export async function saveImageToCache(url: string) {
  const cache = await caches.open(`${APP_NAME}-images-cache`);
  await cache.add(url);
}

export async function loadImageFromCache(url: string) {
  const cache = await caches.open(`${APP_NAME}-images-cache`);
  const response = await cache.match(url);
  const data = await response?.blob();
  if (data) {
    const src = URL.createObjectURL(data);

    return src;
  }

  return undefined;
}

export const iconsDataFromCDN = {
  arrow: "https://cdn.jsdelivr.net/npm/remixicon@2.5.0/fonts/remixicon.css",
};

export const imagesDataFromLocal = {
  "https://cdn.jsdelivr.net/npm/remixicon@2.5.0/fonts/remixicon.css":
    "blob:https://cdn.jsdelivr.net/npm/remixicon@2.5.0/fonts/remixicon.css",
};
