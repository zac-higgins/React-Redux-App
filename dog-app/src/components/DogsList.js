import React from 'react';
import { connect } from "react-redux";
import { fetchDogs } from "../actions";


function DogsList(props) {
    console.log("DogsList", props);

    return (
        <div>
            <h1>We ❤️ Dogs🐶</h1>
            <button onClick={() => props.dispatch(fetchDogs())}>Click here for labs!</button>
            {props.isFetching && <h2>Fetching Doggos...</h2>}
            {props.error && <div>{props.error.message}</div>}
            {props.dogs.map(dog => {
                return <img src={dog} alt="" />
            })}

        </div>
    )
}

// const mapDispatchToProps = {
//     fetchDogs
// };

export default connect(state => {
    return state;
})(DogsList);