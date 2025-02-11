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
        className="
        flex
        items-center
        gap-x-3
        cursor-pointer
        hover:bg-neutral-800/50
        "

        >

        </div>
     );
}


export default MediaItem;
