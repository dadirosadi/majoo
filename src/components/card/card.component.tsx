import { Row, Col, Card, CardImg, CardBody, CardTitle, CardText } from "reactstrap";

const Cards = (props: any) => {
    const { id, title, description, createdAt, status } = props.data;
    return <Card className="my-2 p-1">
        <Row>
            <Col lg={12}>
                <CardBody style={{ cursor: "pointer" }}>
                    <CardTitle tag="h5" >
                        {title} <span >({status === 0 ? "OnProgress" : "Done"})</span>
                    </CardTitle>
                    <CardText>
                        {description}
                    </CardText>
                    <CardText>
                        {createdAt}
                    </CardText>
                </CardBody>
            </Col>
        </Row>
    </Card>
}

export default Cards;