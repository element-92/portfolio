import { Volume2, VolumeX } from "lucide-react";
import { useRef, useState } from "react";

const AUDIO_SRC = `${import.meta.env.BASE_URL}ambient.mp3`;

export function AudioToggle() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState(false);

  function toggle() {
    const audio = audioRef.current;
    if (!audio) return;

    if (playing) {
      audio.pause();
      setPlaying(false);
    } else {
      audio.volume = 0.35;
      audio.play().then(
        () => setPlaying(true),
        () => setPlaying(false),
      );
    }
  }

  return (
    <>
      <audio ref={audioRef} src={AUDIO_SRC} loop preload="none" />
      <button
        type="button"
        onClick={toggle}
        aria-label={
          playing ? "Pause background music" : "Play background music"
        }
        aria-pressed={playing}
        className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted transition-colors duration-200 hover:border-primary/50 hover:text-text"
      >
        {playing ? <Volume2 size={16} /> : <VolumeX size={16} />}
      </button>
    </>
  );
}
