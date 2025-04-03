import { useState } from "react"

function General() {

    const [name, setName] = useState("")
    const [email, setEmail] = useState ("")
    const [number, setNumber] = useState ("")

    return <>
        <div> General info </div>
        <form action="" method="post">
            <label for="full_name">Full Name: </label>
            <input type="text" id="full_name" placeholder="Jane Doe" />
        </form> 
        <form action="" method="post">
            <label for="user_email">Email: </label>
            <input type="email" id="user_email" placeholder="janedoe123@gmail.com" />
        </form> 
        <form action="" method="post">
            <label for="phone_number">Phone Number: </label>
            <input 
                type="tel" 
                id="phone_number" 
                placeholder="123-456-7890" 
                pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"  
            />
        </form> 
        
    </>
    
}

export default General


// how to use input component
// how to store input after each update
// think of how to pass data from child to parent