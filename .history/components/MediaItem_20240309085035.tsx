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
        const imageUrl = useLiadImage{data}
    return (
        <div>
            Media Item
        </div>
     );
}


export default MediaItem;
