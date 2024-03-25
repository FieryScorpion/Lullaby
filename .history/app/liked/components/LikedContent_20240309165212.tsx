"use client"

import { useUser } from "@/hooks/useUser";
import { Song } from "@/types";
import { useRouter } from "next/navigation";

interface LikedContentProps{
    songs: Song[];
}
const  LikedContent: React.FC<LikedContentProps> = ({
    songs
}) => {
    const router = useRouter();
    const { isLoading, user } = useUser();

    useEffect(()) => {
        if (!isLoading, user)
    return (
        <div>
            LikedContent
        </div>
     );
}



export default LikedContent;
