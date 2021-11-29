import React,{useContext, useEffect} from 'react'
import { ImageContext } from '../../context/ImageContext'
import {Box,Paper,Grid} from '@mui/material/';
const Imageslist = () => {
    const {images} = useContext(ImageContext);
    console.log(images)
    return images.length ? (
        images.map((image,index) =>{
            return (
                 <Grid item xs={3} key={index}>
                    <Box
                        sx={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        '& > :not(style)': {
                            m: 1,
                            width: 500,
                            height: 200,
                        },
                    }}
                    style={{width: "100%"}}
                    >
                        <Paper elevation={4}>
                            <img src={image.urls.thumb} style={{width:'100%',height:'100%',objectFit:'cover'}}/>
                            <div class="action">
                                
                            </div>
                        </Paper>
                    </Box>
                </Grid>
            )
        })
    ):(
        <div>Images Not Found</div>
    )
}

export default Imageslist
