"use client";

import useLoadImage from "@/hooks/useLoadImage";
import { Song } from "@/types"

interface SongItemProps {
    data: Song;
    onClick: (id: string) => void;
};
const SongItem: React.FC<SongItemProps> = ({
    data,
    onClick
}) => {
    const ImagePath = useLoadImage(data);
    return(
        <div
        onClick={() => onClick(data.id)}
        className="
        relative
        group
        flex
        flex-col
        items-center
        justify-center
        rounded-md
        overflow-hidden
        gap-x-4
        bg-neutral-400/5
        cursor-pointer
        hover:bg-neutral-400/10
        transition
        p-3
        "
        >
            Song Item
        </div>
    );
}

export default SongItem;
