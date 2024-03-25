"use client";

import usePlayer from "@/hooks/UsePlayer";
import useGetSongById from "@/hooks/useGetSongById";

const Player = () => {
    const player = usePlayer();
    const { song } = useGetSongById(player.activeId);
    const songUrl = useLoadSongIUrl(song);

    return (
        <div>
            Player!
        </div>
      );
}

export default Player;

