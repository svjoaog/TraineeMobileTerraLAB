import React from "react";

interface IState{}
interface IProps{}

let Counter: React.FC<IProps> = () =>{
    return (
        <React.Fragment>
            <h3>Counter</h3>
        </React.Fragment>
    )
};

export default Counter;