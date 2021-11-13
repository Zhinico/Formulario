import React, {useState} from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';

const Formulario = () => {
const [enviado, setEnviado]= useState(false);

    return(
<>
<Formik
initialValues={{
    nombre: '',
    correo: ''
}}

validate={(valores)=>{

    let errores = {};

    if(!valores.nombre){
        errores.nombre= 'por favor ingresar nombre completo'
    } else if(!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.nombre)){
         errores.nombre = 'El nombre solo puede contener letas y espacios'
    }
    if(!valores.correo){
        errores.correo= 'por favor ingresar correo '
    } else if(!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(valores.correo)){
         errores.correo = 'El correo solo puede contener letras, guiones y numero'
    }
    
    return errores;
}}

onSubmit={(valores, {resetForm})=>{
   resetForm();
    console.log('Formulario enviado');
    setEnviado(true);
    setTimeout(()=> setEnviado(false), 2000)
}}>

{({errors}) =>(
    
    <div className="container">

    <Form className="formulario"  >
        
          <div>
         <label htmlFor="nombre">Nombre</label>
         <Field 
         type="text" 
         id="nombre" 
         name="nombre" 
         placeholder="josu ruiz" 
        />
         <ErrorMessage name="nombre" component={() => (
        <div className="error">{errors.nombre}</div>)}/>
        </div>

         <div>
       <label htmlFor="correo">Correo</label>
       <Field
       type="email" 
       id="correo" 
       name="correo" 
       placeholder="pandorutshit@gmailcom" 
       />
       <ErrorMessage name="correo" component={() => (
        <div className="error">{errors.correo}</div>)}/>
       </div>

       <div>
           <Field name="pais" as="select">
            <option value="mexico">Mexico</option>
            <option value="venezuela">Venezuela</option>
            <option value="eeuu">Estados Unidos</option>
            <option value="orlanda">Orlanda</option>
           </Field>
       </div>

       <div>
           <label >
               <Field type="radio" name="sexo" value="hombre"/> Hombre
           </label>
           <label >
               <Field type="radio" name="sexo" value="mujer"/> Mujer
           </label>
           <label >
               <Field type="radio" name="sexo" value="no-binario"/> No binario
           </label>
       </div>

       <div>
           <Field as="textarea" name="mensaje" placeholder="Comentario"/>
       </div>

       <button type="submit">Enviar</button>
      {enviado && <p className="exito">Formulario enviado con exito</p>}
      </Form>
</div>
)}
</Formik>
    </>
)
};
export default Formulario;