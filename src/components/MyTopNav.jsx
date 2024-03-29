import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const MyTopNav = () => {
    return (
        <Container>
            <Row lg={5} md={3} xs={2} className="ms-3 justify-content-evenly">
                <Col className="mt-4 mb-4">
                <Link to={""}>TRENDING</Link>
                </Col>
                <Col className="mt-4">
                <Link to={""}>PODCAST</Link>
                </Col>
                <Col className="mt-4">
                <Link to={""}>MOODS AND GENRES</Link>
                </Col>
                <Col className="mt-4">
                <Link to={""}>NEW RELEASES</Link>
                </Col>
                <Col className="mt-4 mb-4">
                <Link to={""}>DISCOVER</Link>
                </Col>
            </Row>
        </Container>
    )
}

export default MyTopNav;