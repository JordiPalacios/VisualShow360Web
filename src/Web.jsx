import { useState } from "react";
import { WebRouter } from "./WebRouter"
import { LoadContext } from "./context/LoadContext";
import { NavbarProvider } from "./context/NavbarProvider";

function Web() {
  const [show, setShow] = useState(false)
  
  return (
    <LoadContext.Provider value={{ show, setShow }}> 
      <NavbarProvider>
          <WebRouter />
      </NavbarProvider>
    </LoadContext.Provider>
  )
}

export default Web
