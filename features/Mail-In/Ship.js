import { useEffect, useState } from 'react';

export default function Ship() {

  const [windowHeight, setWindowHeight] = useState(600);

  useEffect(() => {
    // get window height when window is accessible
    setTimeout(() => {
      setWindowHeight(window.innerHeight);
    }, 10);
  });

  return (
    <div style={{ 
      height: windowHeight,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }}>
      SHIPPING INFO
    </div>
  )
}