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
        if (!isLoading && !user) {
            router.replace('/');
        }
    }, [isLoading, user, router]);

    if (songs.length === 0) {
        return (
            <div className="
            flex
            flex-col
            ">

            </div>
        ))
    return (
        <div>
            LikedContent
        </div>
     );
}



export default LikedContent;
