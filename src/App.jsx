import { Suspense } from "react";
import { BrowserRouter } from "react-router-dom";
import RouterConfig from "./RouterConfig";


function App() {
  return (
    <>
      <BrowserRouter>
        <Suspense>
         <RouterConfig/>
        </Suspense>
      </BrowserRouter>
      
    </>
  );
}

export default App;
