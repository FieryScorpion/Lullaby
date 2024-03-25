"use client";
import { useState } from "react";

const ModelProvider = () => {
    const [isMounted, setIsMounted] = useState(false);
 useEffect(() => {
    setIsMounted(true);
 }, []

    return (
        <>
        Modals!</>
    );

}

export default ModelProvider;
