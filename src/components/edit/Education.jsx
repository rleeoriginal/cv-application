import { useState } from "react";

function Education() {
    const [school, setSchool] = useState("")
    const [study, setStudy] = useState("")
    const [date, setDate] = useState("")


    return <>
        <div>Education Information</div>
        <form action="">
            <label htmlFor="school_name">School: </label>
            <input 
                type="text" 
                id="school_name"
                value={school}
                onChange={(e) => setSchool(e.target.value)}
            />
            <label htmlFor="study">Title of study: </label>
            <input 
                type="text" 
                id="study"
                value={study}
                onChange={(e) => setStudy(e.target.value)}
            />
            <label htmlFor="date_study">Date of study: </label>
            <input 
                type="date" 
                id="date_study"
                value={date}
                onChange={(e) => setDate(e.target.value)}
            />
        </form>
    
    
    </>
}

export default Education

