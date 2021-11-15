import React, { useEffect, useRef } from "react";

function ImageTime(callback, delay) {

    const savedCallback = useRef()
  
    useEffect(() => {
      savedCallback.current = callback;
    });
  
    useEffect(() => {
      function tick() {
        savedCallback.current();
      }
  
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }, [delay]);

}

export default ImageTime;