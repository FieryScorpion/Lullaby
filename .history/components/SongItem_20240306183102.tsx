"use client";

import { Song } from "@/types"

interface SongItemProps {
    data: Song;
    onClick: (id: string) => void;
};
const SongItem: React.FC<SongItemProps
const SongItem = () => {
    return(
        <div>
            Song Item
        </div>
    );
}

export default SongItem;
