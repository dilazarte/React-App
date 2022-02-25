import React, {createContext, useEffect, useState} from 'react';

//creo el contexto
export const cartContext = createContext();

function CartContext({children}) {
    const [carrito, setCarrito] = useState([])
    let totalProds = carrito.reduce( (acc, item) => {
        return acc =  acc + item.quantity
    },0)
    let totalPrice = carrito.reduce( (acc, item) => {
        return acc =  acc + item.price*item.quantity
    }, 0)
    
    const addItem = (item, quantity) =>{
        if (isInCart(item.id) > -1) {
            carrito[isInCart(item.id)].quantity = carrito[isInCart(item.id)].quantity + quantity
            setCarrito([...carrito])
        } 
        else {
            setCarrito([ ...carrito, {...item, quantity: quantity}])
        }
    }
    const removeItem = (id) =>{
        setCarrito( carrito.filter(item => item.id !== id) )
    }
    const isInCart = (id) =>{
        let index = carrito.findIndex(index => index.id === id)
        return index
    }
    const clearCart = () =>{
        setCarrito([])
    }
    const sumar = (id) =>{
        carrito[isInCart(id)].quantity = carrito[isInCart(id)].quantity + 1
        setCarrito([...carrito])
    }
    const restar = (id) =>{
        if(carrito[isInCart(id)].quantity > 1) {
        carrito[isInCart(id)].quantity = carrito[isInCart(id)].quantity - 1 }
        setCarrito([...carrito])
    }
    //funciones de favoritos:
    const [favoritos, setFavoritos] = useState([])
    const [activo, setActivo] = useState(false)
    const agregarFav = (item) => {
        let index = favoritos.findIndex(el => el.id === item.id)
        if (index > -1) {
            setFavoritos(favoritos.filter(el => el.id !== item.id))
        } else {
            setFavoritos([...favoritos, item])
        }
    }
    return(
        <>
            <cartContext.Provider
                value={{carrito,
                    setCarrito,
                    removeItem,
                    addItem,
                    clearCart,
                    sumar,
                    restar,
                    totalProds,
                    totalPrice,
                    favoritos,
                    setFavoritos,
                    activo,
                    setActivo,
                    agregarFav,
                    isInCart
                }}>
                {children}
            </cartContext.Provider>
        </>
    )
}

export default CartContext;
