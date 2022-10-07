import { useEffect, useState } from "react";
import { Gif } from "../components/Types/GifType";
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = (category: string) => {

    const [images, setImages] = useState(Array<Gif>);
    const [isLoading, setIsLoading] = useState(true);

    const getImages = async () => {
        const newImages = await getGifs(category);
        setImages(newImages);
        setIsLoading(false);
    }

    useEffect(() => {
        getImages();
    }, []);

    return {
        images: images,
        isLoading: isLoading
    }
}