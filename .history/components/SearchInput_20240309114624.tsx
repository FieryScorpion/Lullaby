"use client"

import { useRouter } from "next/navigation";

const SearchInput = () => {
    const router = useRouter();
    const [value, setValue] = useState<string>("");
    const debouncedValue = useState<boolean>("


    return (
        <div>Search Input!</div>
         );
}

export default SearchInput;
