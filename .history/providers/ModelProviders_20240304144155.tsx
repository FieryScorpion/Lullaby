"use client";
import { useEffect, useState } from "react";

const ModelProvider = () => {
    const [isMounted, setIsMounted] = useState(false);
 useEffect(() => {
    setIsMounted(true);
 }, []);
 if(!isMounted) {
    return null;
 }

    return (
        <>
        
        </>
    );

}

export default ModelProvider;
