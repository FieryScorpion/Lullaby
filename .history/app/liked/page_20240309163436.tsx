import getLikedSongs from "@/actions/getLikedSongs";

export const revalidate = 0

const Liked = async () => {
    const songs = await getLikedSongs();
    return (
        <div
        className
        >
            Liked Songs!
        </div>
      );
}

export default Liked;


