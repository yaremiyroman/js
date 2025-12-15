const initialState = 'en';

const languageReducer = (state = initialState, action) => {

    switch (action.type) {
        case 'SET_LANGUAGE':
            return action.payload; // => 'en'
        default:
            return state;
    }
}

export default languageReducer;


// const myAction = {
//     type: 'SET_LANGUAGE',
//     payload: 'uk'
// };