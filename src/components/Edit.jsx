import Clear from "./edit/Clear"
import General from "./edit/General"
import Education from "./edit/Education"
import Experience from "./edit/Experience"


function Edit() {
    return (
        <>
            <div className="edit">
                <Clear />
                <General />
                <Education />
                <Experience />
                
            </div>
        </>
    )
}

export default Edit