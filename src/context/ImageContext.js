import React, { createContext,useEffect,useState } from 'react'
export const ImageContext = createContext();

const Reducer = (action,state) => {
    switch (action.type) {
        case "DELETE_CLIENT":
            console.log('sdsdsds',state);
        default:
            return 'images';
    }
};

const ImageContextProvider = props => {
    const [images, setimages] = useState([])

    async function getImages() {
        let response = await fetch(`${process.env.REACT_APP_API_URL}/photos?per_page=20&client_id=${process.env.REACT_APP_API_KEY}`);
        let data = await response.json();
        return data
    }
    useEffect(async () => {
        const  imagesArray = await getImages();
        await setimages(imagesArray)
    }, [])
    return (    
        <ImageContext.Provider value={{
            images,
            Reducer

            }}>
            {props.children}
        </ImageContext.Provider>
    )
}

export default ImageContextProvider
