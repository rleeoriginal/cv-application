import { useState } from "react";

function Experience() {

    const [company, setCompany] = useState("")
    const [position, setPosition] = useState ("")
    const [description, setDescription] = useState("")
    return (
        <>
        <form action="">
            <label htmlFor="company">Company: </label>
            <input 
                type="text" 
                id="company"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
            />
            <label htmlFor="position">Position: </label>
            <input 
                type="text" 
                id="position"
                value={position}
                onChange={(e) => setPosition(e.target.value)}
            />
            <label htmlFor="description">Main Responsiblities: </label>
            <textarea 
                name="" 
                id="description"
                value={description}
                onChange={(e) => {setDescription(e.target.value)}}
            >
            </textarea>
        </form>
        <button class="btn btn-primary">Primary button</button>

        
        </>
    )

}

export default Experience