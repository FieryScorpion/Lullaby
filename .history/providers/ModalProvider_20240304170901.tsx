"use client";
import Modal from "@/components/Modal";

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
        <Modal
         title="Test Modal"
         description="Test Description"
         isOpen
         onChange={()} = />
        </>
    );

}

export default ModelProvider;
