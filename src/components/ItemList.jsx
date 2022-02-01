import React, {useEffect, useState} from 'react'
import Item from './Item'

function ItemList({props}) {
    return (
        <div className='itemList'>
        {props.map(item => {
                return <Item  key={item.id} item={item}/>
            })
        }
        </div>
    )
}

export default ItemList