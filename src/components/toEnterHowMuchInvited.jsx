import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { useRef, useState } from "react";
import { FillFilterInvitedToEvent } from "../redux/action/InvitedToEventFilterAction";
import { useLocation, useNavigate } from "react-router";

export const ToEnterInvitedAmount = () => {
    const params = useLocation()
    let n = useNavigate()
    let myinvited= useSelector(l=>l.InvitedToEventReducer.objInvit)
    const [newInvited, setnewInvited] = useState(params.state)
    let mydispatch = useDispatch()
    let girls = useRef()
    let boys = useRef()
    let girlAdalt = useRef()
    let boyAdalt = useRef()
    let girlTeneeger = useRef()
    let boyTeneeger = useRef()
    debugger
    console.log(myinvited)

    
    

    const update = () => {
        debugger
        axios.put(`https://localhost:44325/api/InvitedToEvent/updateTheInvitedToEvent/${newInvited.idInvitedToEventDto}`, newInvited).then(x => {
            console.log(x.data)
            debugger
        })
        girls.current.value = ""
        boys.current.value = ""
        girlAdalt.current.value = ""
        boyAdalt.current.value = ""
        girlTeneeger.current.value = ""
        boyTeneeger.current.value = ""
        n("/endUpdate")

    }
    return <div>
        {/* <table className="table">

        <thead>
            <tr>
                <th>מס מבוגרות</th>
                <th>נערים</th>
            </tr>
        </thead>

        <tbody>
            {
                listFilter.map(m =>
                    <tr key={m.emailInvitedDto}>
                        <td>{m.numSonAdultsDto}</td>
                        <td>{m.numteenageBoysDto}</td>
                    </tr>)
            }
        </tbody>
    </table> */}

        <div style={{ width: '20%', border: 'solid 2px gray', backgroundColor: 'pink', display: 'inline-block', marginRight: '30px', marginTop: '30px', boxShadow: '10px 10px', margin: 'auto', textAlign: 'position' }} >
            <div>
                {/* <label>הכנס כמות המבוגרים</label> */}
                <div style={{ display: 'inline', marginRight: '5px' }}><input readOnly style={{ margin: 'auto', textAlign: 'center', position: 'center' }} id={'amount'} type={"number"} min={"1"} placeholder={'הכנס כמות המבוגרים'} ref={boyAdalt} onChange={(e) => setnewInvited({ ...newInvited, numSonAdultsDto: parseInt(e.target.value),isComeDto:true })}  ></input></div>
                <br></br>
                {/* <label>הכנס כמות המבוגרות</label> */}
                <div style={{ display: 'inline', marginRight: '5px' }}><input style={{ margin: 'auto', textAlign: 'center', position: 'center' }} id={'amount'} type={"number"} min={"1"} placeholder={'הכנס כמות המבוגרות'} ref={girlAdalt} onChange={(e) => setnewInvited({ ...newInvited, numDaughterAdultsDto: parseInt(e.target.value),isComeDto:true })}  ></input></div>
                <br></br>
                {/* <label>הכנס כמות הנערים</label> */}
                <div style={{ display: 'inline', marginRight: '5px' }}><input  style={{ margin: 'auto', textAlign: 'center', position: 'center' }} id={'amount'} type={"number"} min={"1"} placeholder={'הכנס כמות הנערים'} ref={boyTeneeger} onChange={(e) => setnewInvited({ ...newInvited, numteenageBoysDto: parseInt(e.target.value),isComeDto:true })}   ></input></div>
                <br></br>
                {/* <label>הכנס כמות הנערות</label> */}
                <div style={{ display: 'inline', marginRight: '5px' }}><input style={{ margin: 'auto', textAlign: 'center', position: 'center' }} id={'amount'} type={"number"} min={"1"} placeholder={'הכנס כמות הנערות'} ref={girlTeneeger} onChange={(e) => setnewInvited({ ...newInvited, numTeenageGirlsDto: parseInt(e.target.value),isComeDto:true })}   ></input></div>
                <br></br>
                {/* <label>הכנס כמות הילדים</label> */}
                <div style={{ display: 'inline', marginRight: '5px' }}><input style={{ margin: 'auto', textAlign: 'center', position: 'center' }} id={'amount'} type={"number"} min={"1"} placeholder={'הכנס כמות הילדים'} ref={boys} onChange={(e) => setnewInvited({ ...newInvited, numBoysDto: parseInt(e.target.value),isComeDto:true })}  ></input></div>
                <br></br>
                {/* <label>הכנס כמות הילדות</label> */}
                <div style={{ display: 'inline', marginRight: '5px' }}><input style={{ margin: 'auto', textAlign: 'center', position: 'center' }} id={'amount'} type={"number"} min={"1"} placeholder={'הכנס כמות הילדות'} ref={girls} onChange={(e) => setnewInvited({ ...newInvited, numGirlsDto: parseInt(e.target.value),isComeDto:true })}   ></input></div>
                <br></br>
                <button onClick={() => update()}>לאישור</button>
                {/* {isshow == p.prodIdDTO &&<td> <img src={`https://localhost:7195/${p.imgDTO}`} style={{width:'150px',height:'150px'}}></img></td>} */}
                {/* <div><button onClick={() => addShoppingCard(p)}>הוספה לסל</button></div> */}
                <br></br>
                <br></br>
                {/* <div><button onClick={() => addImg(p.prodIdDTO)}>לפרטים נוספים</button></div> */}
                <br></br>
                <br></br>
            </div>
        </div>

    </div>
}