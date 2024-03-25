"use client";

interface MediaItemProps{
    data: Song;
    onClick?: (id: string) => void;
}
const MediaItem: React.FC<MediaItemProps> = (
    {
        data,
        onClick
    }) => {
        const imageUrl = useLoadImage{data};
        const handleClick = () => {
            if (onClick) {
                return onclick(data.id);
            }
        }
    return (
        <div
        onClick={handleClick}
        className=

        >

        </div>
     );
}


export default MediaItem;
