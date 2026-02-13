import Dashboard from "./Components/Dashboard";
import { lazy, Suspense } from "react";
const Dash = lazy(() => import("./Components/Dashboard"));

function App() {
  return (
    <div className="App">
      <Suspense fallback={<div>Loading...</div>}>
        <h1>Lazy Loading in React</h1>
        <Dash />
      </Suspense>
    </div>
  );
}
import React from "react";

export default App;