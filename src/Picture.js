import React from "react";
import { useDrag } from "react-dnd";

export default function Picture ({id, url}) {
    const [{isDragging}, drag] = useDrag(() => ({
        type: 'image',
        item: {
            id: id
        },
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging(),
        }),
    }))
    return <img src={url} alt={url} width='150px' style={{border: isDragging ? '5px solid green' : '0px'}} ref={drag}/>
}