import { Price } from "@/types";

export const getURL = () => {
    let url =
    process.env.NEXT_PUBLIC_SITE_URL ??
    process.env.KEY_PUBLIC_SITE_URL
}
