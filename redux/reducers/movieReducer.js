const initialState = {
    movies: [],
    details: {},
    favorites: [],
    loading: false,
    error: ""

}

const movieReducer = (state = initialState, action) => {

    switch (action.type) {

        case "LOADING":
            return {
                ...state,
                loading: true
            }

        case "GET_MOVIES":
            return {
                ...state,
                loading: false,
                movies: action.payload
            }

        case "SEARCH_MOVIES":
            return {
                ...state,
                loading: false,
                movies: action.payload
            }

        case "MOVIE_DETAILS":
            return {
                ...state,
                loading: false,
                details: action.payload
            }

        case "ADD_FAVORITE":

            return {
                ...state,
                favorites: [...state.favorites, action.payload]
            }

        case "ERROR":
            return {
                ...state,
                loading: false,
                error: action.payload
            }

        default:
            return state;

    }

}

export default movieReducer;