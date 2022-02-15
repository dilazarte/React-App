import React, { useContext } from 'react'
import { Form, Formik } from 'formik'
import { cartContext } from './CartContext'
import { getFirestore } from '../config/getFirestore'
import firebase from 'firebase/app'
import Swal from 'sweetalert2'
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min'

const Checkout = () => {
    const {carrito, totalPrice, clearCart} = useContext(cartContext)
    const borderError = {border: '2px solid red', outline: 'none', backgroundColor: '#da4d4d1f'}
    return (
        <>
        {carrito.length === 0 ?
            <Redirect to='/' />
        :
            <Formik
        initialValues={{
            nombre: '',
            direccion: '',
            telefono: '',
            email: ''
        }}
        onSubmit={async (valores)=> {
            console.log(carrito)
            const db = getFirestore()
            const orders = db.collection('orders');

            const newOrder = {
                buyer: valores,
                items: carrito,
                date: new Date(),
                total: totalPrice
            }
            console.log(newOrder)

            const itemsToUpdate = db.collection('items')
            .where(firebase.firestore.FieldPath.documentId(), 'in', carrito.map(item => item.id));
            const q = await itemsToUpdate.get();
            const batch = db.batch()

            const outOfStock = [];
            q.docs.forEach((item, i) =>{
                if(item.data().stock >= carrito[i].quantity){
                    batch.update(item.ref, {stock: item.data().stock - carrito[i].quantity})
                } else {
                    outOfStock.push({...item.data(), id: item.id})
                }
            })
            if(outOfStock.length === 0){
                await batch.commit()
                orders.add(newOrder)
                .then((res) =>{
                    console.log('La orden de compra es: '+res.id)
                    Swal.fire({
                        icon: 'success',
                        title: '<strong>Gracias por su compra!</strong>',
                        html: `Su Nº de Orden es:
                        <b>${res.id}</b>
                        `
                    })
                    clearCart();
                }).catch(error =>{
                    console.log(error)
                })
            } else {
                outOfStock.map(item => console.log('No hay Stock del item: '+item.id+' '+item.title))
                Swal.fire({
                    icon: 'error',
                    title: '<strong>Ocurrio un error</strong>',
                    html: `No se pudo procesar su compra porque no hay suficiente
                    stock de los siguientes productos:<br><br>
                    <div>
                    ${
                        outOfStock.map((item) => {
                            return `<li>${item.title}</li>`
                        }).join('')
                    }
                    </div>
                    `
                })
            }
            
        }}
        //validaciones
        validate={(valores) => {
            let error = {}
            //validacion de nombre con filtros
            if(!valores.nombre) {
                error.nombre = 'Debe ingresar un nombre'
            } else if(!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.nombre)){
                error.nombre = 'El nombre solo debe contener letras y espacios'
            }
            //validacion correo con filtros
            if(!valores.email) {
                error.email = 'Debe ingresar un email'
            } else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(valores.email)){
                error.email = 'Formato de email incorrecto'
            }
            //validacion de direccion
            if(!valores.direccion) {
                error.direccion = 'Debe ingresar una direccion'
            } else if(!/^[\S]+[a-zA-Z0-9 \s a-zA-Z0-9]+$/.test(valores.direccion) ){
                error.direccion = 'la direccion no tiene un formato correcto'
            }
            //validacion telefono (solo debe ser numerico)
            if(!valores.telefono) {
                error.telefono = 'Debe ingrear un teléfono'
            } else if(!/^[0-9]+$/.test(valores.telefono)){
                error.telefono = 'Solo se permiten números'
            } else if(valores.telefono.length < 10){
                error.telefono = 'El telefono debe tener un mínimo de 10 numeros.'
            }

            return error
        }}>
            {( {handleSubmit, values, handleChange, handleBlur, errors, touched} )=>(
                <div>
                    <form className='formulario' onSubmit={handleSubmit}>
                        <h2>Completa los Datos</h2>
                        {console.log(errors)}
                        <div>
                            <label htmlFor="nombre">Nombre</label>
                            <input className='inputsBox' style={touched.nombre && errors.nombre && borderError}
                            onChange={handleChange}
                            type="text"
                            id="nombre" name="nombre"
                            placeholder='Ej: John Doe'
                            value={values.nombre}
                            onBlur={handleBlur}/>
                            {touched.nombre && errors.nombre && <span style={{color:'red'}}>*{errors.nombre}</span>}
                        </div>
                        <div>
                            <label htmlFor="direccion">Direccion</label>
                            <input className='inputsBox' style={touched.direccion && errors.direccion && borderError}
                            onChange={handleChange}
                            type="text"
                            id="direccion" name="direccion"
                            placeholder='Ej: 9 de julio 1738'
                            value={values.direccion}
                            onBlur={handleBlur}/>
                            {touched.direccion && errors.direccion && <span style={{color:'red'}}>*{errors.direccion}</span>}
                        </div>
                        <div>
                            <label htmlFor="telefono">Teléfono</label>
                            <input className='inputsBox' style={touched.telefono && errors.telefono && borderError}
                            onChange={handleChange}
                            type="text"
                            id="telefono" name="telefono"
                            placeholder='Ej: 1145789645'
                            value={values.telefono}
                            onBlur={handleBlur}/>
                            {touched.telefono && errors.telefono && <span style={{color:'red'}}>*{errors.telefono}</span>}
                        </div>
                        <div>
                            <label htmlFor="email">Email</label>
                            <input className='inputsBox' style={touched.email && errors.email && borderError}
                            onChange={handleChange}
                            type="text"
                            id="email" name="email"
                            placeholder='Ej: johndue@mail.com'
                            value={values.email}
                            onBlur={handleBlur}/>
                            {touched.email && errors.email && <span style={{color:'red'}}>*{errors.email}</span>}
                        </div>
                        <button type='submit'>Enviar</button>
                    </form>
                </div>    
            )}
        </Formik>
        }
        </>
    )
}

export default Checkout

/*

<Formik
        initialValues={{
            nombre: '',
            direccion: '',
            telefono: '',
            email: ''
        }}
        onSubmit={async (valores)=> {
            console.log(carrito)
            const db = getFirestore()
            const orders = db.collection('orders');

            const newOrder = {
                buyer: valores,
                items: carrito,
                date: new Date(),
                total: totalPrice
            }
            console.log(newOrder)

            const itemsToUpdate = db.collection('items')
            .where(firebase.firestore.FieldPath.documentId(), 'in', carrito.map(item => item.id));
            const q = await itemsToUpdate.get();
            const batch = db.batch()

            const outOfStock = [];
            q.docs.forEach((item, i) =>{
                if(item.data().stock >= carrito[i].quantity){
                    batch.update(item.ref, {stock: item.data().stock - carrito[i].quantity})
                } else {
                    outOfStock.push({...item.data(), id: item.id})
                }
            })
            if(outOfStock.length === 0){
                await batch.commit()
                orders.add(newOrder)
                .then((res) =>{
                    console.log('La orden de compra es: '+res.id)
                    Swal.fire({
                        icon: 'success',
                        title: '<strong>Gracias por su compra!</strong>',
                        html: `Su Nº de Orden es:
                        <b>${res.id}</b>
                        `
                    })
                    clearCart();
                }).catch(error =>{
                    console.log(error)
                })
            } else {
                outOfStock.map(item => console.log('No hay Stock del item: '+item.id+' '+item.title))
                Swal.fire({
                    icon: 'error',
                    title: '<strong>Ocurrio un error</strong>',
                    html: `No se pudo procesar su compra porque no hay suficiente
                    stock de los siguientes productos:<br><br>
                    <div>
                    ${
                        outOfStock.map((item) => {
                            return `<li>${item.title}</li>`
                        }).join('')
                    }
                    </div>
                    `
                })
            }
            
        }}
        //validaciones
        validate={(valores) => {
            let error = {}
            //validacion de nombre con filtros
            if(!valores.nombre) {
                error.nombre = 'Debe ingresar un nombre'
            } else if(!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.nombre)){
                error.nombre = 'El nombre solo debe contener letras y espacios'
            }
            //validacion correo con filtros
            if(!valores.email) {
                error.email = 'Debe ingresar un email'
            } else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(valores.email)){
                error.email = 'Formato de email incorrecto'
            }
            //validacion de direccion
            if(!valores.direccion) {
                error.direccion = 'Debe ingresar una direccion'
            } else if(!/^[\S]+[a-zA-Z0-9 \s a-zA-Z0-9]+$/.test(valores.direccion) ){
                error.direccion = 'la direccion no tiene un formato correcto'
            }
            //validacion telefono (solo debe ser numerico)
            if(!valores.telefono) {
                error.telefono = 'Debe ingrear un teléfono'
            } else if(!/^[0-9]+$/.test(valores.telefono)){
                error.telefono = 'Solo se permiten números'
            } else if(valores.telefono.length < 10){
                error.telefono = 'El telefono debe tener un mínimo de 10 numeros.'
            }

            return error
        }}>
            {( {handleSubmit, values, handleChange, handleBlur, errors, touched} )=>(
                <div>
                    <form className='formulario' onSubmit={handleSubmit}>
                        <h2>Completa los Datos</h2>
                        {console.log(errors)}
                        <div>
                            <label htmlFor="nombre">Nombre</label>
                            <input className='inputsBox' style={touched.nombre && errors.nombre && borderError}
                            onChange={handleChange}
                            type="text"
                            id="nombre" name="nombre"
                            placeholder='Ej: John Doe'
                            value={values.nombre}
                            onBlur={handleBlur}/>
                            {touched.nombre && errors.nombre && <span style={{color:'red'}}>*{errors.nombre}</span>}
                        </div>
                        <div>
                            <label htmlFor="direccion">Direccion</label>
                            <input className='inputsBox' style={touched.direccion && errors.direccion && borderError}
                            onChange={handleChange}
                            type="text"
                            id="direccion" name="direccion"
                            placeholder='Ej: 9 de julio 1738'
                            value={values.direccion}
                            onBlur={handleBlur}/>
                            {touched.direccion && errors.direccion && <span style={{color:'red'}}>*{errors.direccion}</span>}
                        </div>
                        <div>
                            <label htmlFor="telefono">Teléfono</label>
                            <input className='inputsBox' style={touched.telefono && errors.telefono && borderError}
                            onChange={handleChange}
                            type="text"
                            id="telefono" name="telefono"
                            placeholder='Ej: 1145789645'
                            value={values.telefono}
                            onBlur={handleBlur}/>
                            {touched.telefono && errors.telefono && <span style={{color:'red'}}>*{errors.telefono}</span>}
                        </div>
                        <div>
                            <label htmlFor="email">Email</label>
                            <input className='inputsBox' style={touched.email && errors.email && borderError}
                            onChange={handleChange}
                            type="text"
                            id="email" name="email"
                            placeholder='Ej: johndue@mail.com'
                            value={values.email}
                            onBlur={handleBlur}/>
                            {touched.email && errors.email && <span style={{color:'red'}}>*{errors.email}</span>}
                        </div>
                        <button type='submit'>Enviar</button>
                    </form>
                </div>    
            )}
        </Formik>

*/