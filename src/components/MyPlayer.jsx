import { Container, Row, Col } from "react-bootstrap";
import previous from "../assets/Previous.png";
import shuffle from "../assets/Shuffle.png";
import next from "../assets/Next.png";
import repeat from "../assets/Repeat.png";
import { Link } from "react-router-dom";
import { GoHeartFill,GoHeart } from "react-icons/go";
import { FaPause,FaPlay } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import { addFavourite, remFavourite } from "../redux/action";
import { useEffect, useRef, useState } from "react";

const MyPlayer = () => {
    const favSongs = useSelector((state) => state.favouriteSongs.favSongs);
    const song = useSelector((state) => state.songPlayer.songObj);
    const dispatch = useDispatch();

    const audioRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);

    const togglePlay = () => {
        setIsPlaying(!isPlaying);
    };

    useEffect(() => {
        if (audioRef.current) {
        isPlaying ? audioRef.current.play() : audioRef.current.pause();
        }
    }, [isPlaying]);

    return (
        <Container fluid className="fixed-bottom bg-container pt-1">
            {Object.keys(song).length > 0 ? (
                <Row className="row d-flex justify-content-md-center justify-content-sm-evenly">
                    <Col xs={3}>
                        <Row className="text-white">
                            <Col xs={3}>
                                <img src={song.album.cover_small} alt="albumImg" />
                            </Col>
                            <Col className="ps-1 ms-1">
                                <h5>"{song.title}"</h5>
                                <h6 className="d-flex align-items-top">
                                    {song.artist.name}{" "}
                                    {favSongs.some((e) => e.title === song.title) ? (
                                        < GoHeartFill className="fs-5 text-success ms-2"
                                            onClick={() => dispatch(remFavourite(song))}
                                        />
                                    ) : (
                                        < GoHeart className=" fs-5 text-success ms-2"
                                            onClick={() => dispatch(addFavourite(song))}
                                        />
                                    )}
                                </h6>
                            </Col>
                        </Row>
                    </Col>
                    <Col xs={6} className=" playerControls mt-1">
                        <Row>
                            <audio ref={audioRef} src={song.preview} type="audio/mp3"></audio>
                            <div className="d-flex justify-content-between">
                                <Link className="player-buttons"> <img src={shuffle} alt="shuffle"/></Link>
                                <Link className="player-buttons"><img src={previous} alt="previous"/></Link>
                                <Link className="player-buttons">
                                    {isPlaying ? (
                                        <FaPause className="text-secondary fs-3 p-0 m-0" onClick={togglePlay}/>
                                    ) : (
                                        <FaPlay className="text-secondary fs-3 p-0 m-0" onClick={togglePlay}/>
                                    )}
                                </Link>
                                <Link className="player-buttons">
                                    <img src={next} alt="next"/>
                                </Link>
                                <Link className="player-buttons">
                                <img src={repeat} alt="repeat"/>
                                </Link>
                            </div>
                        </Row>
                        <Row className="d-flex align-items-baseline justify-content-between  playBar py-3">
                            <Col xs={1}>
                                <p>0:00</p>
                            </Col>
                            <Col>
                                <div className="progress">
                                <div
                                    className="progress-bar"
                                    role="progressbar"
                                    aria-valuenow="0"
                                    aria-valuemin="0"
                                    aria-valuemax="100"
                                ></div>
                                </div>
                            </Col>
                            <Col xs={1}>
                                <p>
                                {Math.floor(parseInt(song.duration) / 60)}:
                                {parseInt(song.duration) % 60 < 10
                                    ? "0" + (parseInt(song.duration) % 60)
                                    : parseInt(song.duration) % 60}
                                </p>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            ) : (
            ""
            )}
        </Container>
    );
};

export default MyPlayer;