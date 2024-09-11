"use client";

import { Button } from "@nextui-org/react";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

function Result() {
    const searchParams = useSearchParams();
    const image = searchParams.get("imageurl");
    return (
      <>
        <div className="cs-resultcontainer">
          <h1>Result</h1>

          <img src={image} alt="" />
          <a href={image} download="result.jpg">
            <Button color="success">Download Image</Button>
          </a>
        </div>
      </>
    );
}

function App() {
  
  return (
    <Suspense fallback={<h1>Error</h1>}>
      <Result/>
    </Suspense>
  );
}

export default App;
