import React from "react";
import "./card.styles.css"

export const Card = props => (
    <div className="card-container">
        <img alt="monster" src={'https://robohash.org/${props.monster.id}?set=set1'} />
        {/* <h4>https://robohash.org/{props.monster.id}.png?set=set1</h4> */}
        <h2>{props.monster.name}</h2>
        <h4>{props.monster.email}</h4>
        <h4>{props.monster.id}</h4>
    </div>
);
