import React, {createContext, useEffect, useState} from 'react';

//creo el contexto
export const cartContext = createContext();

function CartContext({children}) {
    const [carrito, setCarrito] = useState([])
    useEffect(()=>{
        console.log("se está renderizando........")
        console.log(carrito)
    })
    let totalProds = carrito.reduce( (acc, item) => {
        return acc =  acc + item.quantity
    },0)
    let totalPrice = carrito.reduce( (acc, item) => {
        return acc =  acc + item.total()
    }, 0)
    console.log(totalProds)
    //funcion para agregar un item
    const addItem = (item, quantity) =>{
        if (isInCart(item.id) > -1) {
            carrito[isInCart(item.id)].quantity = carrito[isInCart(item.id)].quantity + quantity
            setCarrito([...carrito])
            
        } else {
            setCarrito([ ...carrito, {...item, 'quantity': quantity, 'total': function(){return this.price*this.quantity}}])
        }
    }
    //funcion para remover un item en particular
    const removeItem = (id) =>{
        // let index = carrito.indexOf(item => item.id == id)
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
    const sumar = (id) =>{
        carrito[isInCart(id)].quantity = carrito[isInCart(id)].quantity + 1
        setCarrito([...carrito])
    }
    const restar = (id) =>{
        if(carrito[isInCart(id)].quantity > 1) {
        carrito[isInCart(id)].quantity = carrito[isInCart(id)].quantity - 1 }
        setCarrito([...carrito])
    }
    return(
        <>
            <cartContext.Provider value={{carrito, setCarrito, removeItem, addItem, clearCart, sumar, restar, totalProds, totalPrice}}>
                {children}
            </cartContext.Provider>
        </>
    )
}

export default CartContext;
