"use client";

import { Song } from "@/types"

interface SongItemProps {
    data: Song;
    onClick: (id)
}
const SongItem = () => {
    return(
        <div>
            Song Item
        </div>
    );
}

export default SongItem;
