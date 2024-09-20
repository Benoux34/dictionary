"use client";

import { Play } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";
import { onClickAudio } from "./utils";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Phonetics } from "@/api/dictionary/entities";

const Audio = ({ data }: { data: Phonetics }) => {
  const audioRef = useRef<HTMLAudioElement>(null);

  const [audio, setAudio] = useState<Phonetics>([]);

  useEffect(() => {
    const audiosWithAudio = data.filter((d) => d.audio !== "");
    setAudio(audiosWithAudio);
  }, []);

  const handleAudio = onClickAudio(audioRef);

  if (audio.length === 0) return;

  return (
    <div>
      {audio.length === 1 ? (
        <div
          onClick={handleAudio}
          className="hover:bg-blue-500 text-blue-500 hover:text-white border border-blue-500 rounded-full p-2 cursor-pointer"
        >
          <Play className="h-5 w-5" />

          <audio
            key={audio[0].text}
            ref={audioRef}
            src={audio[0].audio}
          ></audio>
        </div>
      ) : (
        <Popover>
          <PopoverTrigger>
            <div className="hover:bg-blue-500 text-blue-500 hover:text-white border border-blue-500 rounded-full p-2 cursor-pointer">
              <Play className="h-5 w-5" />
            </div>
          </PopoverTrigger>
          <PopoverContent className="w-full m-2">
            {audio.map((d) => (
              <div
                key={d.text}
                className="flex items-center gap-x-2 text-blue-500"
              >
                <p>{d.text}</p>
                <Play
                  className="h-5 w-5 cursor-pointer"
                  onClick={handleAudio}
                />

                <audio key={d.text} ref={audioRef} src={d.audio}></audio>
              </div>
            ))}
          </PopoverContent>
        </Popover>
      )}
    </div>
  );
};

export { Audio };
