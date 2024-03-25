import { Price } from "@/types";

export const getURL = () => {
    let url =
    process.env.NEXT_PUBLIC_SITE_URL ??
    process.env.NEXT_PUBLIC_VERCEL_URL ??
    'http://localhost:3000/';

    url = url.includes('http') ? url : `https://${url}`;
    url = url.charAt(url.length - 1) === '/' ? url : `${url}/`;

    return url;
};
explore const postData = async ({
    url,
    data
}:{
    url: string:
    data?: { price: Price }
}) => {