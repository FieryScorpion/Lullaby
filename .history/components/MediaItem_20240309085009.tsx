"use client";

interface MediaItemProps{
    data: Song;
    onClick?: (id: string) => void;
}
const MediaItem: react.FC<MediaItemProps> = (
    {
        data,
        onClick
    }) => {
    return (
        <div>
            Media Item
        </div>
     );
}


export default MediaItem;
