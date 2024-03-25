import { FaPlay } from "react-icons/fa";

const PlayButton = () => {
    return (
        <button
        className="
        transition
        opacity-0
        rounded-full
        flex
        items-center
        bg-green-500
        p-4
        drop-shadow-md
        
        "
        >
            <FaPlay className="text-black"/>
        </button>
        );
}

export default PlayButton;
