"use client";

import usePlayer from "@/hooks/UsePlayer";

const Player = () => {
    const player = usePlayer();

    return (
        <div>
            Player!
        </div>
      );
}

export default Player;

