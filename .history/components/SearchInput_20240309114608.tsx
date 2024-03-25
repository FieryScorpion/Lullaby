"use client"

import { useRouter } from "next/navigation";

const SearchInput = () => {
    const router = useRouter();
    const [value, setValue] = useState<string>("")


    return (
        <div>Search Input!</div>
         );
}

export default SearchInput;
