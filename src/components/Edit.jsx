import Clear from "./edit/Clear"
import General from "./edit/General"
import Education from "./edit/Education"
import Experience from "./edit/Experience"



function Edit(props) {
    return (
        <>
            <div className="d-flex flex-column">
                <Clear 
                    clearInfo={props.clearInfo}
                
                />
                <General
                    setName={props.setName}
                    setEmail={props.setEmail}
                    setNumber={props.setNumber}
                />
                <Education 
                    educationInfo={props.educationInfo}
                    setEducationInfo={props.setEducationInfo}
                />
                <Experience 
                    experienceInfo={props.experienceInfo}
                    setExperienceInfo={props.setExperienceInfo}       
                />
            </div>
        </>
    )
}

export default Edit