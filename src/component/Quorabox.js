import { Avatar } from "@material-ui/core";
import React from "react";
import "../Css/Quorabox.css"

function QuoraBox(){
    return(
        <div className="quorabox">
<div className="quorabox_info">
<Avatar/>
<h5>User Name</h5>
</div>
<div className="quorabox_quora">
<p>What is ur question or link??</p>
</div>
        </div>
    )
}
export default QuoraBox;