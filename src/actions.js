export const AddData = (value) => async dispatch =>{
        dispatch({
            type:"ADD",
            payload: value
        })
}
export const RemoveData = (value) => async dispatch =>{
    dispatch({
        type:"REMOVE",
        payload: {name:value}
    })
}
