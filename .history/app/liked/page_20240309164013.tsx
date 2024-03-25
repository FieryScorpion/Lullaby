import getLikedSongs from "@/actions/getLikedSongs";
import Header from "@/components/Header";
import Image from "next/image";

export const revalidate = 0

const Liked = async () => {
    const songs = await getLikedSongs();
    return (
        <div
        className="
        bg-neutral-900
        rounded-lg
        h-full
        w-full
        overflow-hidden
        overflow-y-auto
        "
        >
            <Header>
                <div className='mt-20'>
                    <div
                    className="
                    flex
                    flex-col
                    md:flex-row
                    items-center
                    gap-x-5
                    ">
                        <div className="
                        relativer
                        h-32
                        w-32
                        lg:h-44
                        lg:w-44
                        ">
                            <Image
                            fill
                            alt="Playlist"
                            className="object-cover"
                            src="/images/liked.png"
                            />
                        </div>
                        <div className="

                        ""
                    </div>
                </div>
            </Header>
        </div>
      );
}

export default Liked;


