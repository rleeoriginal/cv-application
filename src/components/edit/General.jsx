import { useState } from "react"

function General() {

    const [name, setName] = useState("")
    const [email, setEmail] = useState ("")
    const [number, setNumber] = useState ("")

    return <>
        <div> General Information </div>
        <form action="" method="post">
            <label for="full_name">Full Name: </label>
            <input 
                type="text" 
                id="full_name" 
                value={name}
                onChange={(e) => setName(e.target.value)}  
            />
            <label for="user_email">Email: </label>
            <input 
                type="email" 
                id="user_email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <label for="phone_number">Phone Number: </label>
            <input 
                type="tel" 
                id="phone_number" 
                pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"  
                value={number}
                onChange={(e) => setNumber(e.target.value)}
            />
        </form> 
        
    </>
    
}

export default General


// think of how to pass data from child to parent