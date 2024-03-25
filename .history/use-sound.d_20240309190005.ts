declare module 'use-sound';
just create a global.d.ts in your root folder and paste the following : declare module 'use-sound' {
    export default function useSound(sound: any, options?: any): any;
  }
