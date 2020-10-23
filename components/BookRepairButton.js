import { useRouter } from 'next/router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMobile } from '@fortawesome/free-solid-svg-icons'

import scrollToSection from '../helpers/scrollToSection';

export default function BookRepairButton({ text, make }) {

  const router = useRouter();

  return (
    <div>
      <a 
        className="button is-info is-large" 
        onClick={()=>{
          router.pathname == '/' 
          ? scrollToSection("repair")
          : make
            ? router.push(`/?make=${make}#repair`)
            : router.push('/#repair');
        }}
        >
        {
          text
          ? text
          : "Repair My Device"
        }
        <FontAwesomeIcon 
          icon={faMobile} 
          style={{ height: '60%', marginLeft: '0.3em' }} 
        />
      </a>
    </div>
  )
}