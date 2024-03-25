"use client"

import qs from "query-string";

import useDebounce from "@/hooks/useDebounce";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

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
    }, [debouncedValue, router]);
    return (
        <input
        placeholder=""
        />
         );
}

export default SearchInput;
