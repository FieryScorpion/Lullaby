"use client";

import usePlayer from "@/hooks/UsePlayer";
import useGetSongById from "@/hooks/useGetSongById";
import useLoadSongUrl from "@/hooks/useLoadSongUrl";

const Player = () => {
    const player = usePlayer();
    const { song } = useGetSongById(player.activeId);
    const songUrl = useLoadSongUrl(song!);
if (!song || !songurl || !player.activeId) {
    return null;
}
    return (
        <div
        className=>
            Player!
        </div>
      );
}

export default Player;

