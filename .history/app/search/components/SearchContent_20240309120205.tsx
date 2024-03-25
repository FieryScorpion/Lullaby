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
            ">
                
            </div>
        )
    }
    return (
        <div>
            Search Content
        </div>
      );
}

export default SearchContent;
