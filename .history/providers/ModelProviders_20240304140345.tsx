"use client";
import { useState } from "react";

const ModelProvider = () => {
    const [isMounted, setIsMounted] = useState(false);
 useEffect(() => {
    setIsMounted(true);
 }, []);
 if(!isMounted)

    return (
        <>
        Modals!</>
    );

}

export default ModelProvider;
