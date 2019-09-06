import React from 'react';
import CardMod from "./Card";
import './App.css';

function CardList(props){
    return (
        <div className="cardList">
            {props.person.map((element) => {
                return(
                    <CardMod 
                        className="theCard"
                        header={element.name}
                        meta={element.country}
                        description={`Id: ${element.id} Searches: ${element.searches}`}
                        key={element.id}
                    />    
                )
            })}
        </div>
    ) 
}

export default CardList