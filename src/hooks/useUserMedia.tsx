import { useEffect, useState } from "react";

interface useUserMediaInterface {
  requestedMedia: MediaStreamConstraints | undefined;
}

function useUserMedia(props: useUserMediaInterface) {
  const [mediaStream, setMediaStream] = useState<MediaStream | undefined>(undefined);

  useEffect(() => {
    async function enableStream() {
      const stream = await navigator.mediaDevices.getUserMedia(props.requestedMedia);
      setMediaStream(stream);
    }

    if (!mediaStream) {
      enableStream();
    } else {
      return function cleanup() {
        mediaStream.getTracks().forEach((track) => {
          track.stop();
        });
      };
    }
  }, [mediaStream, props.requestedMedia]);

  return mediaStream;
}

export default useUserMedia;
