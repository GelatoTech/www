import { useRouter } from 'next/router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMobile } from '@fortawesome/free-solid-svg-icons'

import scrollToSection from '../helpers/scrollToSection';

export default function BookRepairButton() {

  const router = useRouter();

  return (
    <div>
      <a 
        className="button is-info is-large" 
        onClick={()=>{
          router.pathname == '/' ? scrollToSection("repair") : router.push('/#repair');
        }}
        >Repair My Device
        <FontAwesomeIcon 
          icon={faMobile} 
          style={{ height: '60%', marginLeft: '0.3em' }} 
        />
      </a>
    </div>
  )
}