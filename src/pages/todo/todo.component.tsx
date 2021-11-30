import { useEffect } from "react";
import { withRouter } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux";
import { Container, Spinner, Row, Col, Button } from "reactstrap";
import { getTodo } from "../../redux/todo/todo.action";
import { Todo } from "../../model/todo";
import Cards from "../../components/card/card.component";

const Todos = (props: any) => {
    const dispatch = useDispatch();
    const todo = useSelector((state: any) => {
        return state.todo
    })

    useEffect(() => {
        dispatch(getTodo());
    }, [dispatch])


    return !todo?.loading ? <Container>
        <Button className="mt-3">Create Todo</Button>
        <Row>

            <Col lg={6} className="br-1">
                <h5 className="my-2">On Progress</h5>
                {
                    todo?.data?.filter((item: Todo) => item.status == "0").sort(function (a: Todo, b: Todo) { return new Date(`${a.createdAt}`).getTime() - new Date(`${b.createdAt}`).getTime() }).map((todo: Todo) => {
                        return <div key={`${todo.id}`}><Cards data={todo} /></div>
                    })
                }
            </Col>
            <Col lg={6}>
                <h5 className="my-2">Done</h5>
                {
                    todo?.data?.filter((item: Todo) => item.status == "1").sort(function (a: Todo, b: Todo) { return new Date(`${b.createdAt}`).getTime() - new Date(`${a.createdAt}`).getTime() }).map((todo: Todo) => {
                        return <div key={`${todo.id}`}><Cards data={todo} /></div>
                    })
                }
            </Col>
        </Row>




    </Container > :
        <div style={{ textAlign: "center", paddingTop: "30px" }}><Spinner>Loading...</Spinner></div>
}

export default withRouter(Todos);
