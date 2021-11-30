import { Row, Col, Card, CardBody, CardTitle, CardText, Badge } from "reactstrap";

const Cards = (props: any) => {
    const { id, title, description, createdAt, status } = props.data;
    return <Card className="my-2 p-1">
        <Row>
            <Col lg={12}>
                <CardBody  >
                    <CardTitle style={{ cursor: "pointer" }} tag="h5" onClick={() => props.getDetail(props.data)}>
                        {title}
                    </CardTitle>
                    <CardText>
                        {description}
                    </CardText>
                    <CardText>
                        {new Date(createdAt).toLocaleDateString()}
                        {status == "0" && <Badge
                            onClick={() => props.delete(id)}
                            style={{ marginLeft: "10px", cursor: "pointer", zIndex: "5" }}
                            color="danger"
                            pill
                        >
                            Delete
                        </Badge>}
                    </CardText>
                </CardBody>
            </Col>
        </Row>
    </Card>
}

export default Cards;