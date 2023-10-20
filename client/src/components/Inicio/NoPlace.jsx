import React from 'react'
import '../../../dist/output.css'; // Ajusta la ruta según la ubicación de tu archivo CSS
import Capilla from './CapillaDelMonte/Capilla';
import Styles from './NoPlace.module.css'
import Carlos from './CarlosPaz+/Carlos';


export default function NoPlace() {
  return (
    <div className={`${Styles.wrapper} flex flex-row justify-around -mt-40 ` }>
      <Capilla/>
      <Carlos/>
    </div>
  )
}
