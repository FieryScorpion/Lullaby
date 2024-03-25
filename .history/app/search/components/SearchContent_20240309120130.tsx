"use client";
import { Song } from "@/types"
interface SearchContentProps{
    song: Song[];
}
const SearchContent: React.FC<SearchContentProps> = ({
    songs
}) => {
    if (songs.length === 0) re
    return (
        <div>
            Search Content
        </div>
      );
}

export default SearchContent;
