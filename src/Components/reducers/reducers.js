const reducers = (state, action) => {
    if (action.type === "Links") {
        return {
            ...state,
            links: action.links

        }

    } else {

    }
}

export default reducers;