"use client";

import useAuthModal from "@/hooks/useAuthModal";
import { useSessionContext } from "@supabase/auth-helpers-react";
import { useRouter } from "next/navigation";
import { useUser } from "@/hooks/useUser";
import { useState } from "react";
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
    useEffect(())
    return (
        <div>
            Like Button
        </div>
      );
}

export default LikeButton;
