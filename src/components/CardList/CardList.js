import React from 'react'
import "../../styles/original.css"
import "../../styles/card.css"
import {Card} from "../../components/Card/Card"

export const CardList = props => (
        <div className="card-list">
            {props.monsters.map (monster => (
             <Card key={ monster.id } monster={ monster }/>
            ))}
        </div>
    )