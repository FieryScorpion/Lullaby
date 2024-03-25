"use client"

import qs from "query-string";

import useDebounce from "@/hooks/useDebounce";
import { useRouter } from "next/navigation";
import { useState } from "react";

const SearchInput = () => {
    const router = useRouter();
    const [value, setValue] = useState<string>("");
    const debouncedValue = useDebounce<string>(value, 500);

    useEffect(() => {
        const query = {
            title:debouncedValue,
        };
        const url = qs.stringifyUrl({
            url: '/search',
            query: query
        })
    },
    return (
        <div>Search Input!</div>
         );
}

export default SearchInput;
