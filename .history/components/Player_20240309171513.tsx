"use client";

import usePlayer from "@/hooks/UsePlayer";

const Player = () => {
    const player = usePlayer();
    const { song } = useGetSongById(player.a)

    return (
        <div>
            Player!
        </div>
      );
}

export default Player;

