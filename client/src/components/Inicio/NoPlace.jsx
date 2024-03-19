import React from 'react'
import '../../../dist/output.css'; // Ajusta la ruta según la ubicación de tu archivo CSS
import Capilla from './CapillaDelMonte/Capilla';
import Styles from './NoPlace.module.css'
import Carlos from './CarlosPaz/SanMarcos';


export default function NoPlace() {
  return (
    <div className={`${Styles.wrapper} flex wrap  md:flex-row gap-6 xl:gap-4 max-w-screen-lg justify-around flex-wrap lg:-mt-40  items-stretch content-center` }>
      
      <Capilla/>
      <Capilla/>
      <Carlos/>
      <Carlos/>
    </div>
  )
}
