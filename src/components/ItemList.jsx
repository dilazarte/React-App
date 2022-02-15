import React, {useEffect, useState} from 'react'
import Item from './Item'

function ItemList({array}) {
    return (
        <div className='itemList'>
        {array.map(item => {
                return <Item  key={item.id} item={item} />
            })
        }
        </div>
    )
}

export default ItemList