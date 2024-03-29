import { useEffect, useState } from "react";
import { Container, Row,Button } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import MyTopNav from "./MyTopNav";

const ArtistPage = () => {
    const seeArtist = useSelector((state) => state.artist);
    const [name, setName] = useState([]);
  
    const artistName = seeArtist?.map((el) => {
        return el.artist.name;
    });
    
    useEffect(() => {
        getArtist();
    }, []);
    
    const getArtist = async () => {
        try {
            const res = await fetch(
                "https://striveschool-api.herokuapp.com/api/deezer/search?q=" + artistName);
            if (res.ok) {
                const data = await res.json();
                let music = data.data;
                setName(music);
                console.log(music);
            }   
        } catch (error) {
            console.log(error);
        }
    };


    return (
        <>
            <MyTopNav />
            <Container className="col-12 col-md-9 offset-md-3 mainPage">
                <Row>
                    <div className="col-12 col-md-10 col-lg-10 mt-5">
                {seeArtist?.map((el) => {
                return (
                    <div key={el.id}>
                    <h2 className="titleMain">{el.artist.name}</h2>
                    <p className="fs-5" id="followers">
                        {el.rank} Followers
                    </p>
                    </div>
                );
                })}

                <div className="d-flex justify-content-center" id="button-container">
                <Button variant="success" className="btn btn-success me-3 mainButton" id="playButton">
                    PLAY
                </Button>
                <Button className="btn btn-outline-light ms-3 mainButton" id="followButton">
                    FOLLOW
                </Button>
                </div>
                    </div>
                </Row>
                <Row className="row mb-3">
                    <div className="col-10 offset-1 col-md-10 col-lg-10 p-0">
                        <div className="mt-4 d-flex justify-content-start">
                        <h2 className="text-white font-weight-bold">Tracks</h2>
                        </div>
                        <Container className="pt-5 mb-5">
                        <Row className="row" id="apiLoaded">
                            {name.map((el, i) => {
                            return (
                                <div className="col-sm-auto col-md-auto text-center mb-5" key={i}>
                                <img src={el?.album?.cover_medium} alt="" />
                                <p className="text-white">
                                    Track:{" "}
                                    {
                                    el.title.length < 16 ? `${el.title}` : `${el.title.substring(0, 16)}...`
                                    }
                                </p>
                                <Link className="text-decoration-none text-white">
                                    Album:{" "}
                                    {
                                    el.album.title.length < 16 ? `${el.album.title}` : `${el.album.title.substring(0, 16)}...` 
                                    }
                                </Link>
                                </div>
                            );
                            })}
                        </Row>
                        </Container>
                    </div>
                </Row>
            </Container>
        </>
    )
}

export default ArtistPage;