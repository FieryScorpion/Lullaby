declare module 'use-sound' {
    export default function useSound(sound: string | HTMLAudioElement | undefined, options?: {
      volume?: number | undefined;
      playbackRate?: number | undefined;
      soundEnabled?: boolean | undefined;
      sprite?: Record<string, [number, number]> | undefined;
      id?: string | undefined;
      interrupt?: boolean | undefined;
      onend?: (() => void) | undefined;
      onload?: (() => void) | undefined;
      onloaderror?: ((error: Error) => void) | undefined;
      onplay?: (() => void) | undefined;
      onpause?: (() => void) | undefined;
      onresume?: (() => void) | undefined;
      onstop?: (() => void) | undefined;
    }): {
      play: () => void;
      stop: () => void;
      pause: () => void;
      resume: () => void;
      isPlaying: boolean;
      volume: number;
      duration: number;
      seek: (time: number) => void;
    };
  }

