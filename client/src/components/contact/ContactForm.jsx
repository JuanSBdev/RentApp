import React from 'react'
import {
    Card,
    Input,
    Textarea,
    Button,
    Typography,
  } from "@material-tailwind/react";
import { useSelector } from "react-redux";
import { useAuth0 } from "@auth0/auth0-react";
import { useState } from "react";
export default function ContactForm() {
    
    const { loginWithRedirect, logout, user, isLoading} = useAuth0();
    let lang = useSelector(state => state.language)
    
    let consulta =  lang === 'es' ? 'Consulta' : 'Write here'
let [form, setForm ] = useState({
    name: '',
    mail:'',
    text:'',
})

let handleChange  = (e)=>{
    let {name, value} = e.target

    setForm((prevValues)=>({
        ...prevValues,
        [name]: value
    })
        )
}
let submitForm = ()=>{
    console.log(form)
}

  return (
<div className=" flex  justify-center py-[100px]  sm:p-4 ">

<Card className="p-4 flex items-center   " color="white" shadow={false}>
 <Typography variant="h4" className=" ml-12 self-start" color="blue-gray">
   Contact Us
 </Typography>
 
 <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
   <div className="mb-1 flex flex-col gap-4">
     <Typography variant="h6" color="blue-gray" className="-mb-3">
       Your Name
     </Typography>
     <Input
       onChange={handleChange}
       name="name"
       size="md"
       placeholder="Stuart"
       className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
       labelProps={{
           className: "before:content-none after:content-none",
         }}
         />
     <Typography variant="h6" color="blue-gray" className="-mb-3">
       Your Email
     </Typography>
     <Input
       onChange={handleChange}
       name="mail"
       size="md"
       placeholder="name@mail.com"
       className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
       labelProps={{
           className: "before:content-none after:content-none",
         }}
         />
     <Typography variant="h6" color="blue-gray" className="-mb-3">
      Your Questions Are Important to Us
     </Typography>
     <Textarea 
     onChange={handleChange}
     name="text"
       size="md"
       placeholder={consulta}
       className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
       labelProps={{
         className: "before:content-none aftera:content-none",
     }}
     />
   </div>
   
   {lang === 'es' ? (
       
       <Button  onClick={()=>submitForm()} className="mt-6" fullWidth>
                 Enviar
         </Button>

   ):(
   <Button className="mt-6" color="green" fullWidth>
     Send
   </Button>
   )}
   {user && !isLoading ? (
     <p> {user.given_name} We'll contact you back soon!</p>
   ):(
       <Typography color="gray" className="mt-4 text-center font-normal">
       Users enjoy priority assistance! {" "}
         <button onClick={()=> loginWithRedirect()} className="font-medium " >
             <Typography color="green">
           Sign Up
             </Typography>
         </button>
       </Typography>
   )}
 </form>
</Card>
     </div>
     );
    }
