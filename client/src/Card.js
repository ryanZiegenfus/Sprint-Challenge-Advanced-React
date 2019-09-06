import React, { useEffect } from 'react';
import { Card } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import useDarkMode from "./useDarkMode";



function CardMod(props) {

    return (
        <Card
            header={props.header}
            meta={props.meta}
            description={props.description}
        />
    )
}

export default CardMod