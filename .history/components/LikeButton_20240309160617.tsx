"use client";

import useAuthModal from "@/hooks/useAuthModal";
import { useSessionContext } from "@supabase/auth-helpers-react";
import { useRouter } from "next/navigation";
import { useUser } from "@/hooks/useUser";
import { useEffect, useState } from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
interface LikeButtonProps {
    songId: string;
};
const LikeButton: React.FC<LikeButtonProps> = ({
    songId
}) => {
    const router = useRouter();
    const { supabaseClient } = useSessionContext();
    const authModal = useAuthModal();
    const { user } = useUser();
    const [isLiked, setIsLiked] = useState(false);
    useEffect(() => {
        if (!user?.id) {
            return;
        }
        const fetchData = async () => {
            const { data, error } = await supabaseClient
            .from('liked_songs')
            .select('*')
            .eq('user_id', user.id)
            .eq('song_id', songId)
            .single();
            if (!error && data) {
                setIsLiked(true);
            }
        };
        fetchData();
    }, [songId, supabaseClient, user?.id]);
    const Icon = isLiked ? AiFillHeart : AiOutlineHeart;
    const handleLike = () => {
        if (!user) {
            return authModal.onOpen();
        }
        if (isLiked) {
            const { error } = await supabaseClient
            .from('liked_songs')
            .delete()
            .eq('user_id', user.id)
            .eq('song_id', song.id)
    }
    return (
        <button
        onClick={handleLike}
        className="
        hover:opacity-75
        transition
        "
        >
            <Icon color={isLiked ? '#22c55e' : 'white'} size={25}
        </button>
      );
}

export default LikeButton;
