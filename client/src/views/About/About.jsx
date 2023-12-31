import React from 'react'
import {
  Card,
  Input,
  Textarea,
  Button,
  Typography,
} from "@material-tailwind/react";
import { useSelector } from 'react-redux';

export default function About() {
  let lang = useSelector(state => state.language)
  return (
    <div className="">

    { lang === 'es'? (
      <div className=' flex  flex-col items-center'>
      <Typography color='white' className='pt-0 sm:pt-[50px]' variant="h4">
      Acerca de Kirá
      </Typography>
      <Typography color='white' className='w-3/4 pb-2 '>
      Bienvenido a Kirá, tu destino de confianza para alquileres temporales en la hermosa ciudad de Córdoba. Nos enorgullece ser la opción predilecta para aquellos que buscan una experiencia única durante sus vacaciones, ofreciendo alojamientos temporales excepcionales que se adaptan a todas las necesidades y estilos de vida.
      </Typography>
      <Typography color='white' variant="h4"
      className='lg:pt-[20px]'>
      Nuestra Misión
      
      </Typography>
      <Typography className='w-3/4 pb-0 sm:pb-[50px]' color='white' >
      En Kirá, nos apasiona crear momentos inolvidables al proporcionar a nuestros clientes alojamientos excepcionales y experiencias personalizadas durante su estancia en Córdoba. Nuestra misión es ser el puente entre los viajeros y las propiedades que harán que su estancia sea inolvidable, facilitando al máximo el proceso de alquiler y brindando un servicio que va más allá de las expectativas.
      
      </Typography>
      
<Typography color='white' variant="h4"
>
¿Por qué Kirá?

</Typography>
<Typography  color='white' className=' w-3/4 pb-2' >
Variedad de Opciones
Ofrecemos una amplia gama de opciones de alojamiento, desde acogedores apartamentos en el corazón de la ciudad hasta lujosas casas en entornos más tranquilos. Sea cual sea tu preferencia, en Kirá encontrarás el lugar perfecto para disfrutar de tus vacaciones.

</Typography>


<div className="w-3/4 flex flex-col   items-center lg:flex-row sm:items-stretch pb-2 lg:pb-[50px]">
<Typography color='white' className='flex flex-col m-1'>
<Typography variant='h5'
className='p-2 self-start' >

Experiencia Local
</Typography>
Queremos que te sumerjas por completo en la cultura cordobesa. Nuestro equipo está compuesto por expertos locales que no solo conocen cada rincón de la ciudad, sino que también están comprometidos a proporcionarte recomendaciones auténticas para que tu estancia sea genuinamente inolvidable.

</Typography>

<Typography color='white' className=' pb-2 flex flex-col m-1'>
<Typography variant='h5' className='p-2  '>
Facilidad y Confianza
</Typography>

En Kirá, entendemos la importancia de la tranquilidad al planificar tus vacaciones. Nuestra plataforma intuitiva y segura facilita el proceso de búsqueda, reserva y pago. Además, trabajamos arduamente para garantizar que cada propiedad en nuestra plataforma cumpla con los estándares más altos de calidad y comodidad.

</Typography>
<Typography color='white' className=' align-center flex flex-col m-1'>
<Typography className='p-2  ' variant='h5'>
Nuestro Compromiso

</Typography>
En Kirá, no solo ofrecemos alojamientos temporales; ofrecemos una experiencia completa. Nos comprometemos a hacer todo lo posible para que tus vacaciones en Córdoba sean memorables, proporcionándote no solo un lugar donde alojarte, sino también el respaldo de un equipo que se preocupa por tu bienestar y satisfacción.

</Typography>
</div>

<Typography color='green'>
Descubre la auténtica belleza de Córdoba con Kirá. ¡Esperamos ser parte de tus recuerdos más preciados!

</Typography>

</div>
):(
<div className='flex flex-col items-center'>
      <Typography color='white' className='pt-0 sm:pt-[50px]' variant="h4">
      About Kirá
      </Typography>
      <Typography color='white' className='w-3/4 pb-2 '>
      Welcome to Kirá, your trusted destination for temporary rentals in the beautiful city of Córdoba. We take pride in being the preferred choice for those seeking a unique experience during their vacations, offering exceptional temporary accommodations that cater to all needs and lifestyles.
      </Typography>
      <Typography color='white' variant="h4" className='lg:pt-[20px]'>
      Our Mission
      </Typography>
      <Typography className='w-3/4 pb-0 sm:pb-[50px]' color='white'>
      At Kirá, we are passionate about creating unforgettable moments by providing our clients with exceptional accommodations and personalized experiences during their stay in Córdoba. Our mission is to be the bridge between travelers and properties that will make their stay unforgettable, making the rental process as smooth as possible and providing a service that exceeds expectations.
      </Typography>
      <Typography color='white' variant="h4">
      Why Kirá?
      </Typography>
      <Typography color='white' className='w-3/4 pb-2'>
      Variety of Options
      We offer a wide range of accommodation options, from cozy apartments in the heart of the city to luxurious houses in quieter environments. Whatever your preference, at Kirá, you will find the perfect place to enjoy your vacation.
      </Typography>
      <div className="w-3/4 flex flex-col items-center lg:flex-row sm:items-stretch pb-2 lg:pb-[50px]">
      <Typography color='white' className='flex flex-col m-1'>
      <Typography variant='h5' className='p-2 self-start'>
      Local Experience
      </Typography>
      We want you to fully immerse yourself in Cordoban culture. Our team consists of local experts who not only know every corner of the city but are also committed to providing authentic recommendations to make your stay genuinely unforgettable.
      </Typography>
      <Typography color='white' className='pb-2 flex flex-col m-1'>
      <Typography variant='h5' className='p-2'>
      Ease and Trust
      </Typography>
      At Kirá, we understand the importance of peace of mind when planning your vacation. Our intuitive and secure platform makes the search, reservation, and payment process easy. Additionally, we work hard to ensure that each property on our platform meets the highest standards of quality and comfort.
      </Typography>
      <Typography color='white' className='align-center flex flex-col m-1'>
      <Typography className='p-2' variant='h5'>
      Our Commitment
      </Typography>
      At Kirá, we don't just offer temporary accommodations; we offer a complete experience. We are committed to doing everything possible to make your vacation in Córdoba memorable, providing you not only with a place to stay but also the support of a team that cares about your well-being and satisfaction.
      </Typography>
      </div>
      <Typography color='green'>
      Discover the authentic beauty of Córdoba with Kirá. We hope to be part of your most precious memories!
      </Typography>
</div>

 )
}
  </div>
)
}
