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
            if (onClick) {
                return onclick(data.id);
            }
        }
    return (
        <div
        onClick=>

        </div>
     );
}


export default MediaItem;
