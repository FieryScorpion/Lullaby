"use client"

import { Song } from "@/types";

interface LikedContentProps{
    songs: Song[];
}
const  LikedContent: React.FC<LikedContentProps> = ({
    songs
}) => {
    const router = useRouter();
    const {}
    return (
        <div>
            LikedContent
        </div>
     );
}



export default LikedContent;
