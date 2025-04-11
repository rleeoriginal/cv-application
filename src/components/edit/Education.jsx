import { useState } from "react"

function Education(props) {

    function toggleInputDisplay() {
        const education_div = document.querySelector('#education')
        const education_list = document.querySelector("#education_list")
        const education_fields = document.querySelector("#education_fields")

        // note: "It is often standard (and cleaner) to toggle a CSS style rather than adding and removing inline CSS."
        education_div.classList.toggle("py-0")
        education_list.classList.toggle("d-none")
        education_fields.classList.toggle("d-none")

        
    }

    function saveInfo() {
        // create education object and send to App component
        const newEducation = {
            school,
            degree,
            startDate,
            endDate,
            location
        }
        var updatedEducation;
        if (currentSchool < 0) {
            // append new education info
            updatedEducation = [...props.educationInfo, newEducation]
            
        } else {
            // update current education info
            updatedEducation = [...props.educationInfo]
            updatedEducation[currentSchool] = newEducation
        }
        props.setEducationInfo(updatedEducation)
        exitInfo()
    }

    function editInfo(school_index) {
        toggleInputDisplay()
        const schoolInfo = props.educationInfo[school_index]
        // set current school state
        // reset to -1 when press any 3 buttons
        setCurrentSchool(school_index)
        // fill in input fields
        // note: can do all this in one line? 
        setSchool(schoolInfo.school)
        setDegree(schoolInfo.degree)
        setStartDate(schoolInfo.startDate)
        setEndDate(schoolInfo.endDate)
        setLocation(schoolInfo.location)
 

        // need to prevent save button from creating different object
    }

    function exitInfo() {
        toggleInputDisplay()
        clearFields()
        setCurrentSchool(-1)
    }

    function deleteInfo() {
        const updatedEducation = props.educationInfo.filter((_, index) => index !== currentSchool)
        props.setEducationInfo(updatedEducation)
        exitInfo()
    }



    function clearFields() {
        setSchool("")
        setDegree("")
        setStartDate("")
        setEndDate("")
        setLocation("")
    }

    const [school, setSchool] = useState("")
    const [degree, setDegree] = useState("")
    const [startDate, setStartDate] = useState("")
    const [endDate, setEndDate] = useState("")
    const [location, setLocation] = useState("")

    const[currentSchool, setCurrentSchool] = useState(-1)



    
    return <>
        <div class="card m-3 shadow">
            <div class="card-header cursor-pointer d-flex justify-content-center align-items-center gap-3" data-bs-toggle="collapse" data-bs-target="#education">
                Education Information 
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-down" viewBox="0 0 16 16">
                    <path d="M3.204 5h9.592L8 10.481zm-.753.659 4.796 5.48a1 1 0 0 0 1.506 0l4.796-5.48c.566-.647.106-1.659-.753-1.659H3.204a1 1 0 0 0-.753 1.659"/>
                </svg>
            </div>
            <div class="card-body py-0" id="education">
                <ul class="list-group list-group-flush" id="education_list">
                    {props.educationInfo.map((edu, index) => {
                        return (
                            <li class="list-group-item d-flex justify-content-center" key={index}>
                                <button type="button" className="btn" onClick={() => editInfo(index)}>
                                    {edu.school}
                                </button>
                            </li>
                        )
                    })}
                    <button class="list-group-item" type="button" onClick={toggleInputDisplay}>Add Education</button>
                </ul>
                <div class="d-none" id="education_fields">
                    <form action="" method="post">
                        <div class="mb-3">
                            <label for="school" class="form-label">School</label>
                            <input type="text" class="form-control" id="school" value={school} onChange={(e) => setSchool(e.target.value)}  />
                        </div>
                        <div class="mb-3">
                            <label for="degree" class="form-label">Degree</label>
                            <input type="text" class="form-control" id="degree" value={degree} onChange={(e) => setDegree(e.target.value)} />
                        </div>
                        <div class="mb-3">
                            <label for="start_date" class="form-label">Start Date</label>
                            <input 
                                type="date" 
                                class="form-control"
                                id="start_date"
                                value={startDate}
                                onChange={(e) => setStartDate(e.target.value)}
                            />  
                        </div>
                        <div class="mb-3">
                            <label for="end_date" class="form-label">End Date</label>
                            <input 
                                type="date" 
                                class="form-control"
                                id="end_date"
                                value={endDate}
                                onChange={(e) => setEndDate(e.target.value)}
                            />
                        </div>
                        <div class="mb-3">
                            <label for="location" class="form-label">Location</label>
                            <input type="text" class="form-control" id="location" value={location} onChange={(e) => setLocation(e.target.value)} />
                        </div>
                        <div class="d-flex justify-content-evenly">
                            <button className="btn btn-outline-danger btn-sm" type="button" onClick={deleteInfo}> Delete </button>
                            <button className="btn btn-outline-secondary btn-sm" type="button" onClick={exitInfo}> 
                                Cancel 
                            </button>
                            <button className="btn btn-outline-primary btn-sm" type="button" onClick={saveInfo}> Save </button>
                        </div>
                    </form> 
                </div>
            </div>
        </div>   
    </>
}

export default Education

// clear info
// var -> using var in if statement