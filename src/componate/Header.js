import React from "react";
import "./App.css";

function Header(props) {
    // return (
    //     <div className="container">
    //         <div className="row">
    //             <nav className="navbar navbar-expand-lg bg-light">
    //                 <div className="container-fluid">
    //                     <a className="navbar-brand" href="#">
    //                         <img src={props.logo} alt="Bootstrap" width="100" />
    //                     </a>
    //                     <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    //                         <span className="navbar-toggler-icon"></span>
    //                     </button>
    //                     <div className="collapse navbar-collapse" id="navbarSupportedContent">
    //                         <ul className="navbar-nav me-auto mb-2 mb-lg-0">
    //                             {/* <li className="nav-item">
    //                                 <a className="nav-link active" aria-current="page" href="#">Home</a>
    //                             </li>
    //                             <li className="nav-item">
    //                                 <a className="nav-link" href="#">Link</a>
    //                             </li>
    //                             <li className="nav-item dropdown">
    //                                 <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
    //                                     {
    //                                         props.dropdown
    //                                     }
    //                                 </a>
    //                                 <ul className="dropdown-menu">
    //                                     <li><a className="dropdown-item" href="#">Action</a></li>
    //                                     <li><a className="dropdown-item" href="#">Another action</a></li>
    //                                     <li><hr className="dropdown-divider" /></li>
    //                                     <li><a className="dropdown-item" href="#">Something else here</a></li>
    //                                 </ul>
    //                             </li>
    //                             <li className="nav-item">
    //                                 <a className="nav-link disabled">Disabled</a>
    //                             </li> */}
    //                             {
    //                                 props.list.map((v) =>{
    //                                     return(
    //                                         <li className="nav-item">
    //                                         <a className="nav-link active" aria-current="page" href="#">{v}</a>
    //                                         </li>
    //                                     )
    //                                 })
    //                             }
    //                         </ul>
    //                         <form className="d-flex" role="search">
    //                             <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
    //                             <button className="btn btn-outline-success" type="submit">Search</button>
    //                         </form>
    //                     </div>
    //                 </div>
    //             </nav>
    //         </div>
    //     </div>
    // )

    return (
        <div className="container">
            <div className="row">
                <div className="header-top">
                    <ul>
                        <li>
                            <a href="#">
                                <img src={props.logo} alt="Bootstrap" width="100" />
                            </a>
                        </li>
                        {
                            props.list.map((v) => {
                                return (
                                    <li>
                                    <a href="#"> {v} </a>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Header;