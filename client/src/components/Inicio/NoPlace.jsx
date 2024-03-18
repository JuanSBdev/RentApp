import React from 'react'
import '../../../dist/output.css'; // Ajusta la ruta según la ubicación de tu archivo CSS
import Capilla from './CapillaDelMonte/Capilla';
import Styles from './NoPlace.module.css'
import Carlos from './CarlosPaz/SanMarcos';


export default function NoPlace() {
  return (
    <div className={`${Styles.wrapper} flex flex-col md:flex-row gap-2 xl:gap-0 justify-around flex-nowrap lg:-mt-40  items-center  content-center` }>
      <Capilla/>
      <Carlos/>
    </div>
  )
}
