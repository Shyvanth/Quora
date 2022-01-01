import React from "react";
import "../Css/Navbar.css";
import HomeIcon from "@material-ui/icons/Home";
//import import { FeaturedPlayList } from "@material-ui/icons" from "@material-ui/icons"
import FeaturedPlayListOutlinedIcon from "@material-ui/icons/FeaturedPlayListOutlined"
import AssignmentTurnedInOutlinedIcon from "@material-ui/icons/AssignmentTurnedInOutlined"
import { FeaturedPlayList, Language, NotificationImportantOutlined, PeopleAltOutlined, SearchOutlined } from "@material-ui/icons";
import { Avatar, Button } from "@material-ui/core";
function Navbar(){
    return <div className="navbar">
        <div className="qHeader">

        
        <div className="qHeader_logo">
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHcAAABPCAMAAADmzqp4AAAAnFBMVEWoIwD///+iAACfAADr2Nnv4+CkEQDp0dClAACnHQDEhX/9//2kCwCtWlb8///TnJiaAAD6+fj69POoLB++eHW4XlnkzsquPzXTpKD68+6oIRLz6eikIROnNCm0SUOsNzHfvrnar6zp2tTet7LOko7kx8WxTUu5bmepLCa2VlK6bWy5ZGC/bWnJgnvJg4OoHxqvVUjGl5TJkYa2UkUMmB99AAAExklEQVRoge2Xe3OiOhTAIZFIJCsCIghCRcBKte129/t/txs4J0BYe6ezc+sfdzgzPsjrl/NMMIxZZplllllmmWWWWf6nwrnBH40U5JDl+VPACHscm5PcXfhmK2ldZeRBZJrv1i1z3X2bzvGJPIDKRWFOxaXfrjIPLGB5p7LY+Qiu2bdjUyCVGZHyXinwN5uaWGbn1S0EEydnD01tfyeWom9XvXriGTW+fMXF/O/igOfAOG2GNrJDw5N2WcYEoUxB2od+h5zQJLswavO+16YQkIJ2wxiRv/JjT3dHamCEow4eYpxxnjw1L7/icvksu+XD+WUVF/WRITUsfekjLy1z6SN+aV7eZO9JLmVn8TI92iTYFrvU9/1TedVLAo8cKBZC28wewNubSquVRFEHH6xusMgXQ9rVAYuGsTRuf31amkNRWOTjBBHVYNJBbDRCIbnOwFULd1yy1fJ9n2Vr/BtTnN7+riUWOvxopLGNrnzVslW46PTEPQ76src47bnsCn9v+RWyf//+WoABihI3ELmDulJ2I90YlolGsz57gdY0EZu450qHBj330NlhQRlnZAmmpoJ2W/CUDbZX06t/Nc0N9c97CA/AjF6ke72Bgf5Fqb4CezAHuWjKbrsyJdatP84cd9CNiW8/sqhKqJBRDv423T6IOAaDH2hBzs/Q7D3x+1yeO631LKgs9NSNKUnPtUK7PU25Sj+w09GecvfGPe5amuE+F1tLOg6Hfc+ttUOlLQGtO9c7+lVu9gnXhgiKwXAcC9wBuYshgDghl/C23XY+Xw7coHekxv2p4uq+f+0kHbeqmpcj96qSg9O8SDuko3ONxL8XVyqeF9Rgd7mZM2413mH4T+T+wMVYNsTZhGtDSGhlcsjfmHyibwb9b8hN7nJZ45jmesCOuQRzHNaVAdAdL/ZQtO/qS5BboX9R32jChUQ+vjV57k+4HCtwd8jz28fH7SDXojAjpcZU3+7BEujfmGj+FRqXFO1/P7OlLsmUa3B0cKKC23MF1kBzJXpuhRGEXArxXMNCGM9LonHttN8aP0zjyiAxmkzmdAJqLjfdqutWXcWFSw8ekJbAWSnsxo5xb2Muj7rV4nYRspr6V7aBws6FGWwFp0Dae1da9hc8nIXMf7pErrIsZAyUZT8xNC4M8c62zfDQ07jKqKk8uxmN1HVSVlNQEbu9bRY0eHjJ+kxgh1ZbmPBElEGmcQNcyrLUQaFxDeJCsDvFb0HIVWELquyBqeD1W9pTWXxhsV1CCRSjHRFkA0fidUOk18joWgCy2Gg3Rapurqa399WdwlV7Y6vRzCW4YF+HAo8sE+qReaK/4xod5J2OcdAXH1AavstM0/iaTnbmhUOJpW7fXG7UQFeIszWaUFJWaSvIs1YmEprKecbondQnxipLm2WGo/sHCTu3eXVISb3oxJL5zIWa5CwbYrDtYixRO/EVAu6Y08qCeefJvZLJ98Ha8j3P33XB4+f2cNOT94xzmCftjZDZ7TsFgWspI5fnqnoLD90jJ2OBAeLShBGXD2qe8YdwefXdSKEEbHn6GF8x+f3reXu0/uvbMv9k4r2h+J7if/eL2VRYBH6LvrrT/0o4DeNjsU0ejG3JMgwebeZZZplllllmmWWWWf5S/gGqMU05PFDxEwAAAABJRU5ErkJggg==" 
            alt="logo"/>
        </div>
        <div className="qHeader_icons">
        <div className="qHeader_icon">
                <HomeIcon/>

            </div>
            <div className="qHeader_icon">
                <FeaturedPlayListOutlinedIcon/>
            </div>
            <div className="qHeader_icon">
                <AssignmentTurnedInOutlinedIcon/>
            </div>
            <div className="qHeader_icon">
                <PeopleAltOutlined/>
            </div>
            <div className="qHeader_icon">
                <NotificationImportantOutlined/>
            </div>
            
        </div>
        <div className="qHeader_input">
            <SearchOutlined/>
            
            <input type="text" placeholder="Search in Quora"/>
        </div>
        <div className="qHeader_extra">
            <div className="qHeader_ava">
                <Avatar/>
            </div>
            <Language/>
            <Button>Ask Question</Button>
            

        </div>
    </div>
    </div>
}
export default Navbar;