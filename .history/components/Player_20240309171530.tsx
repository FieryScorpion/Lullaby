"use client";

import usePlayer from "@/hooks/UsePlayer";

const Player = () => {
    const player = usePlayer();
    const { song } = useGetSongById(player.activeId);
    const songUr

    return (
        <div>
            Player!
        </div>
      );
}

export default Player;

