import { useState } from "react";
import { useDispatch } from "react-redux";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import { createTodo, updateTodo } from "./../../redux/todo/todo.action";

const FormTodo = (props: any) => {
    const dispatch = useDispatch();
    const { id, title, description, createdAt, status } = props.data;
    const titleDefault = title;
    const descriptionDefault = description;
    const statusDefalt = status || 0;
    const [titles, setTitle] = useState(titleDefault);
    const [descriptions, setDescription] = useState(descriptionDefault);
    const [statuss, setStatus] = useState(statusDefalt);

    const CreateTodos = (e: any) => {
        e.preventDefault();
        if (props.status === "update") {
            dispatch(updateTodo(id, {
                title: titles,
                description: descriptions,
                status: statuss
            }))
        } else {
            dispatch(createTodo({
                title: titles,
                description: descriptions,
                status: statuss
            }))
        }

        props.setIsOpen();
    }

    return <Form inline onSubmit={(e) => {
        CreateTodos(e)
    }}>
        <FormGroup>
            <Label
                for="title"
            >
                Title
            </Label>
            <Input
                id="title"
                name="title"
                type="text"
                value={titles}
                onChange={(e) => setTitle(e.target.value)}
            />
        </FormGroup>
        {' '}
        <FormGroup>
            <Label
                for="description"
            >
                Description
            </Label>
            <Input
                id="description"
                name="description"
                type="textarea"
                value={descriptions}
                onChange={(e) => setDescription(e.target.value)}
            />
        </FormGroup>
        {' '}
        <FormGroup>
            <Label
                for="status">
                Status
            </Label>
            <Input
                id="status"
                name="status"
                type="select"
                value={statuss}
                defaultValue={status}
                onChange={(e) => setStatus(parseInt(e.target.value))}
            >
                <option value={0}>
                    In Progress
                </option>
                <option value={1}>
                    Done
                </option>
            </Input>
        </FormGroup>
        {' '}
        <Button type="submit">
            Create
        </Button>
    </Form>
}

export default FormTodo;