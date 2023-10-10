import { useSelector } from "react-redux";
import { useEffect } from "react";
import "./showAllInvited.css"
export const ShowAllInvited = () => {
    let list= JSON.parse(sessionStorage.getItem('ListOfInvitedPerOwner'))
    console.log(list);

    useEffect(() => {
        debugger
        list = JSON.parse(sessionStorage.getItem('ListOfInvitedPerOwner'))
    }, [])

    return <>
        <div className="row">
            <div className="col-lg-10 mx-auto mb-4">
                <div className="section-title text-center ">
                    {/* <h3 className="top-c-sep">Grow your career with us</h3> */}

                </div>
            </div>
        </div>
        {list.map(x => (
            <div className="container" key={x}>


                <div className="row">
                    <div className="col-lg-10 mx-auto">
                        <div className="career-search mb-60">
                            <div className="filter-result">
                                <div className="job-box d-md-flex align-items-center justify-content-between mb-30">
                                    <div className="job-left my-4 d-md-flex align-items-center flex-wrap">
                                        <div className="img-holder mr-md-4 mb-md-0 mb-4 mx-auto mx-md-0 d-md-none d-lg-flex">
                                            {x.fName[0]}{x.lName[0]}
                                        </div>
                                        <div className="job-content">
                                            <h5 className="text-center text-md-left">{x.fName} {x.lName}</h5>
                                            <ul className="d-md-flex flex-wrap text-capitalize ff-open-sans">
                                                <li className="mr-md-4">
                                                    <i className="zmdi zmdi-pin mr-2"></i> {x.emailInvitedDto}
                                                </li>
                                                <li className="mr-md-4">
                                                    <i className="zmdi zmdi-money mr-2"></i>{x.idInvitedToEventDto} :מספר מוזמן
                                                </li>
                                                <li className="mr-md-4">
                                                    <i className="zmdi zmdi-time mr-2"></i> {x.isComeDto}
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>





                    </div>
                </div>

            </div>
        ))
        }

    </>
}