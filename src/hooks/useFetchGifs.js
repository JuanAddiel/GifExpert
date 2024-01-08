import { useState, useEffect } from "react";
import { getGifts } from "../helpers";
//Custom Hoocks
export const useFetchGifs=(category)=>{
  const [images, setImages] = useState([ ]);
  const [isLoading, setIsLoading] = useState([true]);

  const getImages = async()=>{
    const newImages = await getGifts(category);
    setImages(newImages);
    setIsLoading(false);
  }

  useEffect(()=>{
    getImages();
  },[]);

//   useEffect(()=>{
//     getGifts(category)
//     .then(res =>setImages(res))
//     .catch(err=>console.error(err))
//   },[ ]);
  return {
    images,
    isLoading
  };
}
