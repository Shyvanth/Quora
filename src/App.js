import React from "react";
import "./App.css";
import Quora from "./component/Quora";
import Sidebaropt from "./component/SidebarOpt";
function App(){
    return <div className="App">
        <Quora/>
        <div className="side">
        <Sidebaropt/>
        </div>
        
    </div>
}
export default App;