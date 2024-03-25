"use client";

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
        onClick={()}
        >
            Song Item
        </div>
    );
}

export default SongItem;
