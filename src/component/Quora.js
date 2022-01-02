//nav bar,all sections
import React from "react";
import "../Css/Quora.css";
import Navbar from "./Navbar";
import Sidebaropt from "./SidebarOpt";
import Feed from "./Feed";
import Wid from "./Widgets";
function Quora(){
    return <div className="quora">
        
        <Navbar/>
        <div className="quora_con">
        <div className="side">
        <Sidebaropt/>
        </div>
        <div className="comment">
            <Feed/>
        </div>
        <Wid/>
        </div>
    </div>
}
export default Quora;