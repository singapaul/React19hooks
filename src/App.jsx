import "./App.css";
import Users from "./examples/Users";
import { Suspense } from "react";
import Theme from './examples/Theme';
import Action from './examples/Action';
import Optimistic from "./examples/Optimistic";
import FormStatus from "./examples/FormStatus";
import FormState from "./examples/FormState";
import Counter from "./examples/Counter";
import { TraditionalFetch } from "./examples/TraditionalFetch";
import { Optimisticname } from "./examples/OptimisticName";

function App() {
  return (
    <>
      <div>
        <Suspense
          fallback={
            <h1 className="text-2xl text-center font-bold mt-5">Loading...</h1>
          }
        >
          {/* Compiler example */}
          {/* <Counter /> */}

          {/* Fetch example */}
          {/* <TraditionalFetch />
          <Users /> */}
           {/* <Theme /> */}

          {/* Forward Ref example */}

          {/* <Action /> */}


         {/* <FormStatus /> */}
          {/* <FormState /> */}
           {/* <Optimistic /> */}
        <Optimisticname />
          
         
        </Suspense>
      </div>
    </>
  );
}

export default App;
