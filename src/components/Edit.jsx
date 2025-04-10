import Clear from "./edit/Clear"
import General from "./edit/General"
import Education from "./edit/Education"
import Experience from "./edit/Experience"



function Edit(props) {
    return (
        <>
            <div className="edit">
                <Clear />
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
                    setCompany={props.setCompany}
                    setPosition={props.setPosition}
                    setDescription={props.setDescription}
                
                />
            </div>
        </>
    )
}

export default Edit