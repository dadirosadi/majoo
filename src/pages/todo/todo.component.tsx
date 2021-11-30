import { useEffect, useState } from "react";
import { withRouter } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux";
import { Container, Spinner, Row, Col, Button, Modal, ModalHeader, ModalBody } from "reactstrap";
import { getTodo } from "../../redux/todo/todo.action";
import { Todo } from "../../model/todo";
import Cards from "../../components/card/card.component";
import Form from "../../components/form/form.component";

const Todos = (props: any) => {
    const dispatch = useDispatch();
    const todo = useSelector((state: any) => {
        return state.todo
    })
    const [isOpen, setIsOpen] = useState(false);
    const [detail, setDetail] = useState({});
    const [status, setStatus] = useState("add");

    useEffect(() => {
        dispatch(getTodo());
    }, [dispatch])

    const getDetail = (data: Object) => {
        setIsOpen(true);
        setDetail(data)
        setStatus("update")
    }


    return !todo?.loading ? <Container>
        <Button className="mt-3" onClick={() => {
            setStatus("add")
            setIsOpen(true)
        }}>Create Todo</Button>
        <Row>

            <Col lg={6} className="br-1">
                <h5 className="my-3">On Progress</h5>
                {
                    todo?.data?.filter((item: Todo) => item.status == "0").sort(function (a: Todo, b: Todo) { return new Date(`${a.createdAt}`).getTime() - new Date(`${b.createdAt}`).getTime() }).map((todo: Todo) => {
                        return <div key={`${todo.id}`}><Cards data={todo} getDetail={getDetail} /></div>
                    })
                }
            </Col>
            <Col lg={6}>
                <h5 className="my-3">Done</h5>
                {
                    todo?.data?.filter((item: Todo) => item.status == "1").sort(function (a: Todo, b: Todo) { return new Date(`${b.createdAt}`).getTime() - new Date(`${a.createdAt}`).getTime() }).map((todo: Todo) => {
                        return <div key={`${todo.id}`}><Cards data={todo} getDetail={getDetail} /></div>
                    })
                }
            </Col>
        </Row>
        <Modal
            isOpen={isOpen}
            toggle={() => {
                setIsOpen(false)
                setDetail({})
            }}

        >
            <ModalHeader toggle={() => {
                setIsOpen(false)
                setDetail({})
            }}>
                Create Todo
            </ModalHeader>
            <ModalBody>
                {status === "update" && <Cards data={detail} />}
                <Form data={detail} status={status} setIsOpen={() => {
                    setIsOpen(false)
                    setDetail({})
                }} />
            </ModalBody>
        </Modal>

    </Container > :
        <div style={{ textAlign: "center", paddingTop: "30px" }}><Spinner>Loading...</Spinner></div>
}

export default withRouter(Todos);
