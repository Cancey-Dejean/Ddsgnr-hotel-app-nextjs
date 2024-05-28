"use client"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import YouTube, { YouTubeProps } from "react-youtube"

export default function ModalVideo({
  youtubeVideoId,
}: {
  youtubeVideoId?: string
}) {
  const onPlayerReady: YouTubeProps["onReady"] = (event) => {
    // access to player in all event handlers via event.target
    // event.target.pauseVideo();
    event.target.playVideo()
  }

  const opts: YouTubeProps["opts"] = {
    playerVars: {
      autoplay: 1,
    },
  }

  return (
    <div>
      <Dialog>
        <DialogTrigger className="after:absolute after:inset-0">
          <span className="sr-only">Open Video</span>
        </DialogTrigger>
        <DialogContent className="modal-vidal max-w-[768px] border-0 bg-transparent p-0">
          <div>
            <YouTube
              videoId={youtubeVideoId || "ScMzIvxBSi4"}
              opts={opts}
              onReady={onPlayerReady}
              iframeClassName="aspect-video w-full h-full"
            />
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}
