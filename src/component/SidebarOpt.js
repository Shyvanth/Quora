import React from "react";
import "../Css/SidebarOpt.css"
import {AiOutlinePlusSquare} from "react-icons/ai";
function Sidebaropt(){
    return(
        <div className="sidebaropt">
            <div className="sidebarop">
                <img src="https://www.businessenglishpod.com/wordpress/wp-content/uploads/Business-English-Pod-Learn-Business-English-1200x780.jpg"
                alt="business"/>
                <p>Business</p>
            </div>
            <div className="sidebarop">
                <img src="https://higherlogicdownload.s3.amazonaws.com/SRAINTERNATIONAL/UploadedImages/167e255a-8759-4a2f-92f6-591d6d8f7afb/Catalyst-pictures/Text-body-images/april2021/Picture_2_Travel.jpeg"
                alt="business"/>
                <p>Travel</p>
            </div>
            <div className="sidebarop">
                <img src="https://www.businessenglishpod.com/wordpress/wp-content/uploads/Business-English-Pod-Learn-Business-English-1200x780.jpg"
                alt="business"/>
                <p>Science</p>
            </div>
            <div className="sidebarop">
                <img src="https://www.businessenglishpod.com/wordpress/wp-content/uploads/Business-English-Pod-Learn-Business-English-1200x780.jpg"
                alt="business"/>
                <p>History</p>
            </div>
            <div className="sidebarop">
                <img src="https://www.businessenglishpod.com/wordpress/wp-content/uploads/Business-English-Pod-Learn-Business-English-1200x780.jpg"
                alt="business"/>
                <p>General</p>
            </div>
            <div className="sidebarop">
            <AiOutlinePlusSquare/>
                <p>Search More</p>
            </div>
        </div>
    )
}
export default Sidebaropt;