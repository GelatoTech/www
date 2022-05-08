import { useRouter } from 'next/router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMobile } from '@fortawesome/free-solid-svg-icons'
import Image from 'next/image';

import scrollToSection from '../helpers/scrollToSection';

export function BookRepairButton({ text, make }) {

  const router = useRouter();

  return (
    <div>
      <a 
        className="button is-info is-large is-hidden-tablet" 
        onClick={()=>{
          router.pathname == '/' 
          ? scrollToSection("repair")
          : make
            ? router.push(`/?m=${make}#repair`)
            : router.push('/#repair');
        }}
        >
          <div style={{ display: 'none'  }}>
            <Image width={1} height={1} alt="" src={`https://px.ads.linkedin.com/collect/?pid=2925348&conversionId=${process.env.NEXT_PUBLIC_LINKEDIN_CONVERSION_ID}&fmt=gif`} />
          </div>
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