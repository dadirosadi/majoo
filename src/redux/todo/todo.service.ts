const getAllTodo = async () => {
    const data = await fetch(`${process.env.REACT_APP_BASE_URL}`)
        .then(res => {
            return res.json()
        }).then(res => {
            return res

        })
    return data;
}

export { getAllTodo }