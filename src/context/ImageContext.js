import React, { createContext,useEffect,useState } from 'react'
export const ImageContext = createContext();

const ImageContextProvider = props => {
    const [images, setimages] = useState([])
    async function getImages() {
        let response = await fetch(`${process.env.REACT_APP_API_URL}/photos?per_page=20&client_id=${process.env.REACT_APP_API_KEY}`);
        let data = await response.json();
        return data
    }
    useEffect(async () => {
        const  imagesArray = await getImages();
        setimages(imagesArray)
        
    }, [])
    return (    
        <ImageContext.Provider value={{images}}>
            {props.children}
        </ImageContext.Provider>
    )
}

export default ImageContextProvider
