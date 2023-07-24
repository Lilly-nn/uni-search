import { useRef } from "react";
import { useEffect } from "react";

export default function useObserver(ref, callback, dependecies) {
    const observer = useRef();

    useEffect(() => {
       if(!ref.current) return;
       function observerCallback(entries) {
           if(entries[0].isIntersecting && ref.current) {
              callback()
           }
       }
   
      observer.current = new IntersectionObserver(observerCallback);
      observer.current.observe(ref.current);
   
      return () => {
        observer.current.disconnect();
      }
     }, dependecies)
}
