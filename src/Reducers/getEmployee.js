export const getEmployee = (state = [], action) => {
    switch (action.type) {
        case 'START_GET_EMPLOYEE':
            return action;
        case 'COMPLETE_GET_EMPLOYEE':
            return action;
        case 'ERROR_GET_EMPLOYEE':
            return action;
        default:
            return state;
    }
}