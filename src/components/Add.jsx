import React from 'react'
import { Button, Form } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { FileUpload } from '../helpers/FileUpload';
import { addProductAsync } from '../redux/actions/actionProduct';
import { useForm } from '../redux/hooks/useForm';

const Add = () => {
    const dispatch = useDispatch();

    const [formValue, handleInputChange, rest]= useForm({
        nombre: '',
        foto: '',
        precio: '',
        descripcion:'',
        item1: '',
        item2: '',
        item3: ''

    })

    const {nombre, precio, descripcion, item1, item2, item3}=formValue
     const handleSubmit =(e)=>{
        e.preventDefault()
        console.log(formValue)
        dispatch(addProductAsync(formValue))
        rest()
    }

    const handleFileChange =(e)=>{
        const file= e.target.files[0]       
        FileUpload(file)
        .then(resp =>{
            formValue.foto =resp
            console.log(resp)
        })
        .catch(error =>{
            console.warn(error)
        })
    
    }
    return (
        <div >
             <Form className='m-5 px-3 ' onSubmit={handleSubmit} margin={50}>
                 <h1 className='p-3 text-warning'>Agregar Producto</h1>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label className=' mx-1' >Nombre del Producto</Form.Label>
                    <Form.Control className='  mb-2 mx-1 ' type="text" name="nombre" placeholder="Agrega el nombre" value={nombre} onChange={handleInputChange} />

                    <Form.Label className=' m-1'>Preco</Form.Label>
                    <Form.Control className='  mb-2 mx-1 ' type="text" name="precio" placeholder="Agrega el año de estreno" value={precio} onChange={handleInputChange} />
                    
                    <Form.Label className=' mx-1'>Descripcion</Form.Label>
                    <Form.Control className='  mb-2 mx-1 ' type="text" name="descripcion" placeholder="Agrega la descripcion" value={descripcion} onChange={handleInputChange} />
                  
                    <Form.Label className=' m-1'>Item1</Form.Label>
                    <Form.Control className='  mb-2 mx-1 ' type="text" name="item1" placeholder="Agrega detalles" value={item1} onChange={handleInputChange} />

                    <Form.Label className=' m-1'>Item2</Form.Label>
                    <Form.Control className='  mb-2 mx-1 ' type="text" name="item2" placeholder="Agregar detalles" value={item2} onChange={handleInputChange} />

                    <Form.Label className=' m-1'>Item3</Form.Label>
                    <Form.Control className='  mb-2 mx-1 ' type="text" name="item" placeholder="Agregar detalles" value={item3} onChange={handleInputChange} />

                     <Form.Label className=' m-1'>Imagen</Form.Label>
                    <Form.Control className=' mb-2 mx-1 ' type="file" name="foto" placeholder="Ingrese Imagen.jpg" onChange={handleFileChange} />
                
                </Form.Group>

                <Button className='m-3 btn btn-primary' type="submit">
                  Agregar
                </Button>
             
            </Form>
        </div>
    )
}

export default Add