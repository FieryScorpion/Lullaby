"use client"

interface LikedContentProps{
    songs: Song[];
}
const  LikedContent: React.FC<LikedContentProps> = ({
    songs
}) => {
    const router = useRouter()
    return (
        <div>
            LikedContent
        </div>
     );
}



export default LikedContent;
