"use client"

import { useRouter } from "next/navigation";

const SearchInput = () => {
    const router = useRouter();
    const [value, setValue] = useState<string>("");
    const debouncedValue = useDebounce<string>(value


    return (
        <div>Search Input!</div>
         );
}

export default SearchInput;
