import Header from "./preview/Header"
import Body from "./preview/Body"

function Preview(props) {

    return (
        <>
            <div className="card m-3 shadow flex-grow-1">
                <div className="card-header bg-secondary py-3 text-white">
                    <Header
                        name={props.name}
                        email={props.email}
                        number={props.number}
                        location={props.location}
                    />
                </div>
                <div className="card-body">
                    <Body
                        educationInfo={props.educationInfo}
                        experienceInfo={props.experienceInfo}
                    />
                </div>

            </div>
            
        
        </>
    )
}

export default Preview