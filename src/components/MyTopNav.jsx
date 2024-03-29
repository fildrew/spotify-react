import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const MyTopNav = () => {
    return (
        <Container className="">
            <Row lg={5} md={3} xs={2} className="mb-3">
                <Col className="mainLinks mt-4">
                <Link to={""}>TRENDING</Link>
                </Col>
                <Col className="mainLinks mt-4">
                <Link to={""}>PODCAST</Link>
                </Col>
                <Col className="mainLinks mt-4">
                <Link to={""}>MOODS AND GENRES</Link>
                </Col>
                <Col className="mainLinks mt-4">
                <Link to={""}>NEW RELEASES</Link>
                </Col>
                <Col className="mainLinks mt-4">
                <Link to={""}>DISCOVER</Link>
                </Col>
            </Row>
        </Container>
    )
}

export default MyTopNav;