"use client";
import AuthModal from "@/components/AuthModal";
import SubscribeModal from "@/components/SubscribeModal";
import UploadModal from "@/components/UploadModal";
import { ProductWithPrice } from "@/types";


import { useEffect, useState } from "react";

interface ModalProviderProps {
   products: ProductWithPrice[];
}

const ModelProvider: React.FC<ModalProviderProps> = ({
   products
}) => {
   const [isMounted, setIsMounted] = useState(false);
   useEffect(() => {
   setIsMounted(true);
}, []);
if(!isMounted) {
   return null;
}

return (
<>
   <AuthModal />
   <UploadModal />
   <SubscribeModal products ={products} />
   </>
      );
}

export default ModelProvider;
