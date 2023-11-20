import { Route } from "react-router-dom"
import { Routes } from "react-router-dom"
import { About } from "./about";
import { ChooseTypeService } from "./chooseTypeService";
import { NewEvent } from "./newEvent";
//import { ShowEventOrders } from "./showEventOrders";
import { EzorIshi } from "./EzorIshi";
import { EndUpdateTheInvited } from "./endUpdateTheInvited";
import { Register } from "./register"
import { Ishoor } from "./ishoor";
import { ShowEventOfOwner } from "./showEventOfOwner";
import { ToEnterInvitedAmount } from "./toEnterHowMuchInvited";
import { MoreDetails } from "./moreDetails";
import { ShowAllInvitedTrue } from "./showAllInvitedTrue"
import { ShowAllInvited } from "./showAllInvited";
import { AddInvited } from "./addInvited";
import { Navbar } from "./navbar";
import { Sidebar1 } from "./sideBar";


export const Routing = () => {
    return <Routes>
        <Route path="/" element={<Navbar></Navbar>}>

            <Route path="about" element={<About></About>}></Route>
            <Route path="register" element={<Register></Register>}></Route>
            <Route path="chooseTypeService" element={<ChooseTypeService></ChooseTypeService>}></Route>
            <Route path="newEvent" element={<NewEvent></NewEvent>}></Route>
            <Route path="connect" element={<EzorIshi></EzorIshi>}></Route>
            <Route path="ShowEventOfOwner" element={<ShowEventOfOwner></ShowEventOfOwner>}></Route>
            <Route path="showeventorders" element={<Ishoor></Ishoor>}></Route>
            <Route path="toEnterinvited" element={<ToEnterInvitedAmount></ToEnterInvitedAmount>}></Route>
            <Route path="/sideBar" element={<Sidebar1></Sidebar1>}>
                <Route path="addInvited" element={<AddInvited></AddInvited>}></Route>
                <Route path="showAllInvited" element={<ShowAllInvited></ShowAllInvited>}></Route>
                <Route path="showAllInvitedTrue" element={<ShowAllInvitedTrue></ShowAllInvitedTrue>}></Route>
            </Route>
            <Route path="moreDetails" element={<MoreDetails></MoreDetails>}></Route>



            <Route path="/endUpdate" element={<EndUpdateTheInvited></EndUpdateTheInvited>}></Route>

        </Route>


        {/* <Route path="/addEvent" element={<AddEvent></AddEvent>}></Route> */}

    </Routes>

}