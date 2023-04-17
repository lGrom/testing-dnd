import React, { useState } from "react";
import Picture from "./Picture";
import { useDrop } from 'react-dnd';
import './DragDrop.css'

const pictures = [
    {
        id: 1,
        url: 'https://www.seiu1000.org/sites/main/files/main-images/camera_lense_0.jpeg'
    },
    {
        id: 2,
        url: 'https://imgv3.fotor.com/images/blog-cover-image/part-blurry-image.jpg'
    },
    {
        id: 3,
        url: 'https://www.wapititravel.com/blog/wp-content/uploads/2019/07/Lake_Kawaguchiko_Fall_Colors_Mt_Fuji_Japan-1024x426.jpg'
    }
]

export default function DragDrop () {

    const [board, setBoard] = useState([])

    const [{ isOver }, drop] = useDrop(() => ({
        accept: 'image',
        drop: (item) => addToBoard(item.id),
        collect: (monitor) => ({
            isOver: !!monitor.isOver(),
        })
    }))

    function addToBoard (id) {
        const pictureList = pictures.filter((picture) => id === picture.id);
        setBoard((board) => [...board, pictureList[0]])
    }

    return (
        <>
            <div className="Pictures">{pictures.map((picture) => {
                return <Picture id={picture.id} url={picture.url}/>
            })}</div>
            <div className="Board" ref={drop}>
                {
                    board.map((picture) => {
                        return <Picture url={picture.url} id={picture.id} />
                    })
                }
            </div>
        </>
    )
}