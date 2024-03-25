"use client";

import useAuthModal from "@/hooks/useAuthModal";
import { useSessionContext } from "@supabase/auth-helpers-react";
import { useRouter } from "next/navigation";
import { useUser } from "@/"
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

    return (
        <div>
            Like Button
        </div>
      );
}

export default LikeButton;
