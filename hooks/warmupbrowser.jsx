import React from "reat";
import * as WebBrouser from "expo-web-browser";

export const userWarmbrowser =()=>{
    React.useEffect(() => {
      void WebBrouser.warmUpAsync();
    
    
      return () => {
        void WebBrouser.coolDownAsync();
      };
    }, [])
    
};