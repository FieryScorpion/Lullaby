"use client";

import { Toaster } from "react-hot-toast";

const ToasterProvider = () => {

    return (
        <Toaster
        toastOptions={{
            style: {
                bbackground: "#333"

            }
        }}
    )
}