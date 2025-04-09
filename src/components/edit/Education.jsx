
function Education(props) {

    return <>
        <div>Education Information</div>
        <form action="">
            <label htmlFor="school_name">School: </label>
            <input 
                type="text" 
                id="school_name"
                onChange={(e) => props.setSchool(e.target.value)}
            />
            <label htmlFor="study">Title of study: </label>
            <input 
                type="text" 
                id="study"
                onChange={(e) => props.setStudy(e.target.value)}
            />
            <label htmlFor="date_study">Date of study: </label>
            <input 
                type="date" 
                id="date_study"
                onChange={(e) => props.setDate(e.target.value)}
            />
        </form>
    
    
    </>
}

export default Education

