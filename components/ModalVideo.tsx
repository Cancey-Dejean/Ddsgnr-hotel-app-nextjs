"use client";
import {
  Dialog,
  DialogContent,

  DialogTrigger,
} from "@/components/ui/dialog";
import YouTube, { YouTubeProps } from "react-youtube";

import React from "react";

export default function ModalVideo({
  children,
  youtubeVideoId,
}: {
  children: React.ReactNode;
  youtubeVideoId: string;
}) {
  const onPlayerReady: YouTubeProps["onReady"] = (event) => {
    // access to player in all event handlers via event.target
    // event.target.pauseVideo();
    event.target.playVideo();
  };

  const opts: YouTubeProps["opts"] = {
    playerVars: {
      autoplay: 1,
    },
  };

  return (
    <div>
      <Dialog>
        <DialogTrigger className="after:absolute after:inset-0">
          <span className="sr-only">Open Video</span>
        </DialogTrigger>
        <DialogContent className="modal-vidal max-w-[768px] border-0 bg-transparent p-0">
          <div>
            <YouTube
              videoId={youtubeVideoId ||"7PIji8OubXU"}
              opts={opts}
              onReady={onPlayerReady}
              iframeClassName="aspect-video w-full h-full"
            />
          </div>

          {children}
        </DialogContent>
      </Dialog>
    </div>
  );
}
