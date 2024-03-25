"use client";

interface mediaItemProps{
    data: Song;
    onClick?: (id: string) => void;
}
const MediaItem: react.FC<media = () => {
    return (
        <div>
            Media Item
        </div>
     );
}


export default MediaItem;
