"use client";

interface PageContentProps {
    songs: Song[];
}
const PageContent: React.FC<PageContentProps> = ({
    songs
}) => {
    return (
        <div>
            Page Content
        </div>
    );
}

export default PageContent;