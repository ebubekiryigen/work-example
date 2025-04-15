import React, { useEffect, useState } from "react";

const useWindowsSize = () => {

    const [size,setSize] = useState ({
        width :0,
        height: 0,
    })

    const changeWindowSize = () =>{
      setSize({
          width:window.innerWidth,
          height:window.innerHeight,
      })
    }
    useEffect(() => {
    window.addEventListener('resize',changeWindowSize)
    return () => {
        window.addEventListener('resize',changeWindowSize)
    }
    },[])
    
    return size
}

export default useWindowsSize