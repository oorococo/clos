import {
    MODAL_OPEN,
    MODAL_CLOSE,
} from '../actions/rootActions'

export default (state = {
    isLoading: false,
    isModalOpen: false,
    isError: true,
    isWaring: false,
}, action) => {
    switch (action.type) {
    case MODAL_OPEN:
        return state
    case MODAL_CLOSE:
        return state
    default:
        return state
    }
}
