import React,{useContext, useEffect} from 'react'
import { ImageContext } from '../../context/ImageContext'
import {Box,Paper,Grid,IconButton} from '@mui/material/';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import DataObjectIcon from '@mui/icons-material/DataObject';
const Imageslist = () => {
    const {images,Reducer} = useContext(ImageContext);
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
                    className="image-wrapper"
                    >
                        <Paper elevation={4}>
                            <div>
                                <img src={image.urls.thumb} style={{width:'100%',maxHeight:'200px',objectFit:'cover'}}/>
                            </div> 
                            <div className="action text-left" align={'left'}>
                                <IconButton aria-label="Download" variant="contained" color="success">
                                    <FileDownloadIcon/>        
                                </IconButton>
                                <IconButton aria-label="Favorite" color="success">
                                    <FavoriteBorderIcon/>        
                                </IconButton>
                                {/* onClick={() => dispatch({type: 'changeTheme'})} */}
                                <IconButton aria-label="Details" onClick={() => Reducer({type:'DELETE_CLIENT'})}>
                                    <DataObjectIcon/>        
                                </IconButton>
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
