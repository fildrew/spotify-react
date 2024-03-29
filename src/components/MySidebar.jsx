import {useState} from "react";
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Link,useNavigate} from 'react-router-dom';
import logo from "../assets/Spotify_Logo.png";
import { BsList } from "react-icons/bs";
import { BsHouse,BsFillCollectionPlayFill} from "react-icons/bs";
import { BsSearch } from "react-icons/bs";


const MySidebar = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const navigate = useNavigate();

    const [query,setQuery] = useState("");
    const handleChange = (e) => setQuery(e.target.value);
    
    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            navigate(`/search-page/${query}`);
        }
    };

    return (
        <>
            <Button className="mt-2 ms-2 button-off" variant="dark" onClick={handleShow} >
                <BsList />
            </Button>
    
            <Offcanvas className="off-menu" show={show} onHide={handleClose}>
                <Offcanvas.Body  className="d-flex flex-column justify-content-between">
                    <div className="nav-container mt-4">
                        <Link to={"/"} className="navbar-brand" href="index.html">
                            <img src={logo} alt="Spotify_Logo" width="131" height="40" />
                        </Link>
                        <div>
                            <div className="navbar-nav mt-4">
                                <ul>
                                    <li>
                                        <Link className="off-nav-link" to={"/"}>
                                            <BsHouse className="me-1"/> Home
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className="off-nav-link" to={"/YourLibrary"}>
                                            <BsFillCollectionPlayFill  className="me-2"/>
                                            Your Library
                                        </Link>
                                    </li>
                                    <li>
                                        <div className="input-group mt-3">
                                            <input
                                                type="text"
                                                className="form-control mb-2"
                                                id="searchField"
                                                placeholder="Search"
                                                aria-label="Search"
                                                aria-describedby="basic-addon2"
                                                onChange={handleChange}
                                                onKeyDown={handleKeyPress}
                                            />
                                            <div className="input-group-append" style={{ marginBottom: "4%" }}>
                                                <Link
                                                to={"/search-page/" + query}
                                                className="btn btn-outline-secondary btn-sm py-2"
                                                type="button"
                                                id="button-addon1"
                                                >
                                                <BsSearch />
                                                </Link>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="nav-btn linkBottomNav">
                        <button className="btn signup-btn" type="button">
                            Sign Up
                        </button>
                        <button className="btn login-btn" type="button">
                            Login
                        </button>
                        <a href="alt">Cookie Policy</a> | <a href="alt"> Privacy</a>
                    </div>
                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
};

export default MySidebar;