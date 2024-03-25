"use client";

import { Song } from "@/types";

interface PageContentProps {
    songs: Song[];
}
const PageContent: React.FC<PageContentProps> = ({
    songs
}) => {
    if (songs.length ==0)
    return (
        <div>
            Page Content
        </div>
    );
}

export default PageContent;
