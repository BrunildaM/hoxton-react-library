import { useState } from "react";
import { Input } from "./Input";
import "./Input.css"

export function Label () {
    const [value, setValue] = useState(undefined)
    return (
        <label className="label">
           
        You are typing {value}

        <br />

        <Input 
            type="text"
            value="firstName"
            placeholder="Enter your name"
            //@ts-ignore
            onChange={event => {
                setValue(event.target.value)
            }}
            />
        
        </label>
    )
}