import { useRef } from "react";
import { useEffect } from "react";

export default function useObserver(ref, callback, dependecies) {
    const observer = useRef();

    useEffect(() => {
       function observerCallback(entries) {
           if(entries[0].isIntersecting) {
              callback()
           }
       }
   
      observer.current = new IntersectionObserver(observerCallback);
      observer.current.observe(ref.current);
   
      return () => {
        observer.current.disconnect();
      }
     }, [dependecies])
}
