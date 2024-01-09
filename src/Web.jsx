import { useRef } from "react";
import { WebRouter } from "./WebRouter"
import { NavbarProvider } from "./context/NavbarProvider";

function Web() {

  return (
    <NavbarProvider>
      <WebRouter />
    </NavbarProvider>
  )
}

export default Web
