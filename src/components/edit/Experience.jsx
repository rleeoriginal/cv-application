
function Experience(props) {

    return (
        <>
        <form action="">
            <label htmlFor="company">Company: </label>
            <input 
                type="text" 
                id="company"
                onChange={(e) => props.setCompany(e.target.value)}
            />
            <label htmlFor="position">Position: </label>
            <input 
                type="text" 
                id="position"
                onChange={(e) => props.setPosition(e.target.value)}
            />
            <label htmlFor="description">Main Responsiblities: </label>
            <textarea 
                name="" 
                id="description"
                onChange={(e) => props.setDescription(e.target.value)}
            >
            </textarea>
        </form>
        <button class="btn btn-primary">Primary button</button>

        
        </>
    )

}

export default Experience