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
        const imageUrl = useLoadImage{data};
        const handleClick = () => {
            if (onClick)
        }
    return (
        <div>
            Media Item
        </div>
     );
}


export default MediaItem;
