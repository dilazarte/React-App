import React from 'react';

function ImgThumb({item, image, setImage}) {
    console.log(item)
    return(
        
            <img onClick={()=> setImage(item) } className={(image == item) ? 'img-thumb active' : 'img-thumb'} src={item} alt="image thumbnail">
            </img>
        
    );
}

export default ImgThumb;
// style={{ width: '50px' }}