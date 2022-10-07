import { Gif } from "../components/Types/GifType";

export const getGifs = async (category: string) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=xUxK6FaLx9WQGT4bmGGWPbHNnnth5QUX&q=${category}&limit=5`;

    const resp = await fetch(url);
    const { data }: { data: Array<any> } = await resp.json();

    const gifs: Array<Gif> = data.map(img => ({
        id: img.id,
        title: (img.title.trim() === "") ? 'no title': img.title.trim(),
        url: img.images.downsized_medium.url
    }));

    return gifs;
}