import { MouseEventHandler, RefObject } from "react";

const onClickAudio =
  (
    audioRef: RefObject<HTMLAudioElement>
  ): MouseEventHandler<SVGSVGElement | HTMLDivElement> | undefined =>
  () => {
    if (audioRef.current) audioRef.current.play();
  };

export { onClickAudio };
