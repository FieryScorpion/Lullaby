"use client";

interface MediaItemProps{
    data: Song;
    onClick?: (id: string) => void;
}
const MediaItem: react.FC<MediaItemProps> = () => {
    return (
        <div>
            Media Item
        </div>
     );
}


export default MediaItem;
