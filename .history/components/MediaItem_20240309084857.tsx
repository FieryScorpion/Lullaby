"use client";

interface mediaItemProps{
    data: Song;
    onClick?: (id: string) => void;
}
const MediaItem: react.FC<MediaItemProps></MediaItemProps> = () => {
    return (
        <div>
            Media Item
        </div>
     );
}


export default MediaItem;
