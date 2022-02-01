import React, {createContext, useEffect, useState} from 'react';

//creo el contexto
export const cartContext = createContext();

function CartContext({children}) {
    const [carrito, setCarrito] = useState([])

    //funcion para agregar un item
    const addItem = (item, quantity) =>{
        if (isInCart(item.id) > -1) {
            carrito[isInCart(item.id)].quantity = carrito[isInCart(item.id)].quantity + quantity
            setCarrito([...carrito])
            
        } else {
            setCarrito([ ...carrito, {...item, 'quantity': quantity}])
        }
    }
    //funcion para remover un item en particular
    const removeItem = (id) =>{
        let index = carrito.indexOf(item => item.id == id)
        setCarrito( carrito.filter(item => item.id != id) )
        console.log(carrito)
    }
    //funcion para no permitir duplicados
    const isInCart = (id) =>{
        let index = carrito.findIndex(index => index.id === id)
        return index
    }
    //funcion para vaciar todo el carrito!
    const clearCart = () =>{
        setCarrito([])
    }
    return(
        <>
            <cartContext.Provider value={{carrito, setCarrito, removeItem, addItem, clearCart}}>
                {children}
            </cartContext.Provider>
        </>
    )
}

export default CartContext;
