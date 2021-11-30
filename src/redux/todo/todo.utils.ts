export const updateData = (oldData: any, newData: any) => {
    const dataFilter = oldData.filter((data: any) => {
        return data.id !== newData.id
    })

    return [...dataFilter, {
        ...newData.data,
        createdAt: new Date(),
        id: newData.id
    }]
}