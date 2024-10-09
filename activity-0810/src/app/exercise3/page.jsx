"use client";

import { useState, useEffect } from "react";
import {Button} from "react-bootstrap";

export default function Exercise3 (){
    const [time, setTime] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(prevTime => prevTime + 1);
        })
        return () => clearInterval(interval)
    }, []);

    return (
        <div>
            <h1>Temporizador</h1>
            <p>{time}</p>
            <Button>Pausar</Button>
        </div>
    );
}