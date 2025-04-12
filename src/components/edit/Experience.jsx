import { useState } from "react"

function Experience(props) {

    function toggleInputDisplay() {
        const experience_div = document.querySelector('#experience')
        const experience_list = document.querySelector("#experience_list")
        const experience_fields = document.querySelector("#experience_fields")

        experience_div.classList.toggle("py-0")
        experience_list.classList.toggle("d-none")
        experience_fields.classList.toggle("d-none")
    }

    function saveInfo() {
        // create experience object and send to App component
        const newExperience = {
            company,
            position,
            startDate,
            endDate,
            location,
            description
        }
        var updatedExperience;
        if (currentExp < 0) {
            // append new experience info
            updatedExperience = [...props.experienceInfo, newExperience]
        } else {
            // update current experience info
            updatedExperience = [...props.experienceInfo]
            updatedExperience[currentExp] = newExperience
        }
        props.setExperienceInfo(updatedExperience)
        exitInfo()
        
    }

    function clearFields() {
        setCompany("")
        setPosition("")
        setStartDate("")
        setEndDate("")
        setLocation("")
        setDescription("")
    }
    
    function exitInfo(company_index) {
        toggleInputDisplay()
        clearFields()
        setCurrentExp(-1)
    }

    function deleteInfo() {
        const updatedExperience = props.experienceInfo.filter((_, index) => index !== currentExp)
        props.setExperienceInfo(updatedExperience)
        exitInfo()
    }

    function editInfo(experience_index) {
        toggleInputDisplay()
        const chosenExperience = props.experienceInfo[experience_index]
        // set current experience state
        setCurrentExp(experience_index)
        // fill in input fields
        setCompany(chosenExperience.company)
        setPosition(chosenExperience.position)
        setStartDate(chosenExperience.startDate)
        setEndDate(chosenExperience.endDate)
        setLocation(chosenExperience.location)
        setDescription(chosenExperience.description)
    }

    
    const [company, setCompany] = useState("")
    const [position, setPosition] = useState("")
    const [startDate, setStartDate] = useState("")
    const [endDate, setEndDate] = useState("")
    const [location, setLocation] = useState("")
    const [description, setDescription] = useState("")

    const [currentExp, setCurrentExp] = useState(-1)

    return (
        <>
            <div className="card m-3 shadow">
                <div class="card-header cursor-pointer d-flex justify-content-center align-items-center gap-3" data-bs-toggle="collapse" data-bs-target="#experience">
                    Career Experience
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-down" viewBox="0 0 16 16">
                        <path d="M3.204 5h9.592L8 10.481zm-.753.659 4.796 5.48a1 1 0 0 0 1.506 0l4.796-5.48c.566-.647.106-1.659-.753-1.659H3.204a1 1 0 0 0-.753 1.659"/>
                    </svg>
                </div>
                <div className="card-body py-0" id="experience">
                    <ul className="list-group list-group-flush" id="experience_list">
                        {props.experienceInfo.map((exp, index) => {
                            return (
                                <li className="list-group-item d-flex justify-content-center" key={index}>
                                    <button type="button" className="btn" onClick={() => editInfo(index)}>
                                        {exp.company}
                                    </button>
                                </li>
                            )
                        })}
                        <li className="list-group-item d-flex justify-content-center">
                            <button type="button" className="btn" onClick={toggleInputDisplay}>
                                Add Company
                            </button>
                        </li>
                    </ul>
                    <div className="d-none" id="experience_fields">
                        <form action="" method="post"> 
                            <div class="mb-3">
                                <label for="company" class="form-label">Company</label>
                                <input type="text" class="form-control" id="company" value={company} onChange={(e) => setCompany(e.target.value)}  />
                            </div>
                            <div class="mb-3">
                                <label for="position" class="form-label">Position</label>
                                <input type="text" class="form-control" id="position" value={position} onChange={(e) => setPosition(e.target.value)}  />
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
                            <div className="mb-3">
                                <label htmlFor="description" class="form-label">Main Responsiblities: </label>
                                <textarea 
                                    class="form-control"
                                    id="description"
                                    value={description}
                                    onChange={(e) => setDescription(e.target.value)}
                                >
                                </textarea>
                            </div>
                            <div class="d-flex justify-content-evenly">
                                <button className="btn btn-outline-danger btn-sm" type="button" onClick={deleteInfo}> Delete </button>
                                <button className="btn btn-outline-secondary btn-sm" type="button" onClick={exitInfo}> Cancel </button>
                                <button className="btn btn-outline-primary btn-sm" type="button" onClick={saveInfo}> Save </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )

}

export default Experience