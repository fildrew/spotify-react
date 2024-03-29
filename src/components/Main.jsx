import MyTopNav from './MyTopNav';
import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import AlbumCard from "./AlbumCard";

const Main = () => {
    const [rock, setRock] = useState([]);
    const [pop, setPop] = useState([]);
    const [hiphop, setHiphop] = useState([]);

    const headers = new Headers ({
        'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com',
        'X-RapidAPI-Key': '9d408f0366mshab3b0fd8e5ecdf7p1b09f2jsne682a1797fa0',
    });

    const fetchArtist = async (artist,genre) => {
        try {
            const response = await fetch(`https://striveschool-api.herokuapp.com/api/deezer/search?q=` + artist, {
                method: 'GET',
                headers,
            });
            if (response.ok) {
                const data = await response.json();
                const mainsong = data.data;
                switch(genre) {
                    case 'rock':
                    setRock((prevState) => {
                            return [...prevState, mainsong[0]];
                        });
                        break;
                    case 'pop':
                        setPop((prevState) => {
                            return [...prevState, mainsong[0]];
                        });
                    break;
                    case 'hiphop':
                        setHiphop((prevState) => {
                            return [...prevState, mainsong[0]];
                        });
                        break;
                    default:
                        console.log("error");
                }
            } else {
                console.log("Error");
                
            }
        } catch (error) {
            console.log(error);
        }
    };

    const albumCard = async () => {
        const rockArtists = ["metallica","powerwolf","thepolice","ledzeppelin","hammerfall","oasis","thewho","bonjovi",];
        const hipHopArtists = ["drake", "kanyewest","lilbaby","lildurk","future","travisscott","jackharlow","jcole","megantheestallion"];
        const popArtists =  ["maroon5", "muse", "onerepublic", "adele", "katyperry", "arianagrande", "edsheeran", "justinbieber","immaginedragons"];   
        
        let popRandomArtists = [];
        let hipHopRandomArtists = [];
        let rockRandomArtists = [];
        
        while (rockRandomArtists.length < 4) {
            let artist = rockArtists[Math.floor(Math.random() * rockArtists.length)];
            if (!rockRandomArtists.includes(artist)) {
                rockRandomArtists.push(artist);
            }
        }


        while (popRandomArtists.length < 4) {
            let artist = popArtists[Math.floor(Math.random() * popArtists.length)];
            if (!popRandomArtists.includes(artist)) {
                popRandomArtists.push(artist);
            }
        }

        while (hipHopRandomArtists.length < 4) {
            let artist = hipHopArtists[Math.floor(Math.random() * hipHopArtists.length)];
            if (!hipHopRandomArtists.includes(artist)) {
                hipHopRandomArtists.push(artist);
            }
        }

        for (var i = 0; i < rockRandomArtists.length; i++) {
            fetchArtist(rockArtists[i],"rock");  
        }
        for (var i = 0; i < hipHopRandomArtists.length; i++) {
            fetchArtist(hipHopRandomArtists[i],"hiphop");
        }
        for (var i = 0; i < popRandomArtists.length; i++) {
            fetchArtist(popRandomArtists[i],"pop");
        }
    };

    useEffect(() => {
        albumCard();
    }, []);

    return (
        <>
            <MyTopNav/>
            <Container className="mainPage">
                <Row className="d-flex justify-content-center">
                    <Row>
                        <Col>
                            <div id='rock'>
                                    <h2 className="text-white">Rock Classics</h2>
                                    <div className='row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3' id="rockSelection">
                                        {rock?.map((el,i) => {
                                            return (
                                                <AlbumCard
                                                    key={i}
                                                    obj={el}
                                                    cover={el.album.cover_medium}
                                                    artist={el.artist.name}
                                                    album={el.album.title}
                                                    idAlbum={el.album.id}
                                                />
                                            );
                                        })}
                                    </div>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <div id='pop'>
                                <h2 className="text-white">Pop Culture</h2>
                                <div className='row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3' id="popSection">
                                    {pop?.map((el,i) => {
                                        return (
                                            <AlbumCard
                                                key={i}
                                                obj={el}
                                                cover={el.album.cover_medium}
                                                artist={el.artist.name}
                                                album={el.album.title}
                                                idAlbum={el.album.id}
                                            />
                                        );
                                    })}
                                </div>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <div id='hiphop'>
                                <h2 className="text-white">HipHop</h2>
                                <div className='row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3' id="hiphopSection">
                                    {hiphop?.map((el,i) => {
                                        return (
                                            <AlbumCard
                                                key={i}
                                                obj={el}
                                                cover={el.album.cover_medium}
                                                artist={el.artist.name}
                                                album={el.album.title}
                                                idAlbum={el.album.id}
                                            />
                                        );
                                    })}
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Row>
            </Container>
        </>
    );
};

export default Main;