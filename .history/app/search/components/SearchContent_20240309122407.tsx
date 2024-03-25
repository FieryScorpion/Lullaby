"use client";
import MediaItem from "@/components/MediaItem";
import { Song } from "@/types"
interface SearchContentProps{
    song: Song[];
}
const SearchContent: React.FC<SearchContentProps> = ({
    song
}) => {
    if (song.length === 0) {
        return (
            <div
            className="
            flex
            flex-col
            gap-y-2
            w-full
            px-6
            text-neutral-400
            ">
                No songs found
            </div>
        )
    }
    return (
        <div className="flex flex-col gap-y-2 w-full px-6">
         {song.map((song) => (
            <div
            key={song.id}
            className="flex items-center gap-x-4 w-full"
            >
                <div className="flex-1">
            <MediaItem
            onClick={() => {}}
            data={song}
            />
                </div>
            
            </div>
         ))}
        </div>
      );
}

export default SearchContent;
