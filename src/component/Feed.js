import React from "react";
import "../Css/Feed.css"
import Quora from "./Quora";
import Post from "./Post";
import QuoraBox from "./Quorabox";
function Feed(){
    return(
        <div className="feed">
       <QuoraBox/>
       <Post/>
       <Post/>
       <QuoraBox/>
       <Post/>
       <Post/>
        </div>
    )
}
export default Feed;