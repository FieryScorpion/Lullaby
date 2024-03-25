"use client";

import { Song } from "@/types";

interface PageContentProps {
    songs: Song[];
}
const PageContent: React.FC<PageContentProps> = ({
    songs
}) => {
    if (songs.length === 0){
        return (
            <div className="mt-4 text-neutral-400">
                No songs available
            </div>
        )
    }
    return (
        <div
        className="
        grid
        grid-cols-2
        sm:
        ">

        </div>
    );
}

export default PageContent;