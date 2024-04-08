import {useState} from "react";

export default function SyncInput() {
    const [text, setText] = useState('')

    function onChange(e) {
        setText(e.target.value)
    }

    return (
        <>
            <Label txt="Email"/>
            <Input value={text} onChange={onChange}/>
            <Label txt="Confirm Email"/>
            <Input value={text} onChange={onChange}/>
        </>
    )
}

function Label({txt}) {
    return (
        <>
            <label>{txt}</label>
        </>
    )
}

function Input({value, onChange}) {
    return (
        <>
            <input type="text" onChange={onChange} value={value}/>
        </>
    )
}