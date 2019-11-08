import React from 'react';

import { connect } from "react-redux";
import { fetchDogs } from "../actions";


function DogsList(props) {
    console.log("DogsList", props);

    return (
        <div>
            <h1>We ❤️ Dogs🐶</h1>
            <button onClick={() => props.dispatch(fetchDogs())}>Click here for labs!</button>
        </div>
    )
}

// const mapDispatchToProps = {
//     fetchDogs
// };

export default connect(state => {
    return state;
})(DogsList);