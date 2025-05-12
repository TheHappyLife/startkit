type GetAsset = (name: string, fileType?: string) => string;

interface UseAssetsType {
  getIcon: GetAsset;
  getImage: GetAsset;
  getVideo: GetAsset;
  getAudio: GetAsset;
}

function useAssets(): UseAssetsType {
  const getIcon: GetAsset = (name, fileType) => {
    return `/svg/${name}.${fileType || "svg"}`;
  };

  const getImage: GetAsset = (name, fileType) => {
    return `/images/${name}.${fileType || "png"}`;
  };

  const getVideo: GetAsset = (name, fileType) => {
    return `/videos/${name}.${fileType || "mp4"}`;
  };

  const getAudio: GetAsset = (name, fileType) => {
    return `/audios/${name}.${fileType || "mp3"}`;
  };

  return { getIcon, getImage, getVideo, getAudio };
}

export default useAssets;
