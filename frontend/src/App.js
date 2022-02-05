import React from "react";
import AppRoute from "./routes/AppRoute";
import {HashRouter} from "react-router-dom";


function App() {
  return (
    <div>
        <HashRouter>
            <AppRoute/>
        </HashRouter>

    </div>
  );
}

export default App;
