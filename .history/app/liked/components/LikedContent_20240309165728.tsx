
import { useEffect } from 'react'; // Import useEffect
import { useUser } from "@/hooks/useUser";
import { Song } from "@/types";
import { useRouter } from "next/navigation";

interface LikedContentProps {
    songs: Song[];
}

const LikedContent: React.FC<LikedContentProps> = ({ songs }) => {
    const router = useRouter();
    const { isLoading, user } = useUser();

    useEffect(() => { // Corrected useEffect syntax
        if (!isLoading && !user) {
            router.replace('/');
        }
    }, [isLoading, user, router]);

    if (songs.length === 0) {
        return (
            <div className="flex flex-col gap-y-2 w-full px-6 text-neutral-400">
                No Liked songs.
            </div>
        );
    }

    return (
        <div>
            {songs.map((song) => (
                <div key={song.id}>
                    {/* Render your song content here */}
                    <p>{song.title}</p>
                    <p>{song.artist}</p>
                </div>
            ))}
        </div>
    );
}

export default LikedContent;

