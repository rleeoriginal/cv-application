
function Body(props) {
    return (
        <>
            <div className="p-5 d-flex flex-column">
                <div className="d-flex flex-column">
                    <div className="text-center bg-secondary text-white rounded p-2">
                        <b>Education</b>
                    </div>
                    <div className="">
                        {props.educationInfo.map((edu, index) => {
                            let startDate = edu.startDate.slice(5,7) + "/" + edu.startDate.slice(0,4)
                            let endDate = edu.endDate.slice(5,7) + "/" + edu.endDate.slice(0,4)
                            return (
                                <div className="container my-3">
                                    <div className="row text-start">
                                        <div className="col-auto">
                                            <div>
                                                {startDate} - {endDate}
                                            </div>
                                            <div>
                                                {edu.location}
                                            </div>
                                        </div>
                                        <div className="col d-flex flex-column gap-1">
                                            <div>
                                                <b>{edu.school}</b>
                                            </div>
                                            <div>
                                                {edu.degree}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
                <div className="d-flex flex-column">
                    <div className="text-center bg-secondary text-white rounded p-2">
                        <b>Professional Experience</b>
                    </div>
                    <div className="">
                        {props.experienceInfo.map((exp) => {
                            let startDate = exp.startDate.slice(5,7) + "/" + exp.startDate.slice(0,4)
                            let endDate = exp.endDate.slice(5,7) + "/" + exp.endDate.slice(0,4)
                            return (
                                <div className="container my-3">
                                    <div className="row text-start">
                                        <div className="col-auto">
                                            <div>
                                                {startDate} - {endDate}
                                            </div>
                                            <div>
                                                {exp.location}
                                            </div>
                                        </div>
                                        <div className="col d-flex flex-column gap-1">
                                            <div>
                                                <b>{exp.company}</b>
                                            </div>
                                            <div>
                                                {exp.position}
                                            </div>
                                            <div>
                                                {exp.description}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>

            </div>
        
        </>
    )
}

export default Body