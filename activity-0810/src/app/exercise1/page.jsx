"use client";

import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";

export default function Exercise1(){
    let [count, setCount] = useState(0);

    useEffect(()=> {
        document.title = count
      }, [count]);

    return(
        <Button variant="primary" 
        type="submit"
        onClick={() => setCount(count + 1)}>
            Cambiar valor
        </Button>
    );
}