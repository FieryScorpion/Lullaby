"use client";
import { Song } from "@/types"
interface SearchContentProps{
    song: Song[];
}
const SearchContent: React.FC<SearchContentProps> = ({
    songs
}) => {
    if (songs.length === 0) {
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
         {songs.map((song) => (
            <div
            key={song.id}
            ></div>
         )
        </div>
      );
}

export default SearchContent;
