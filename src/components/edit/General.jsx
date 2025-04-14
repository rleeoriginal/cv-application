
function General(props) {

    return <>
        <div class="card m-3 shadow">
            <div class="card-header d-flex justify-content-center align-items-center gap-3">
                General Information
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-info-circle" viewBox="0 0 16 16">
                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
                    <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0"/>
                </svg>
            </div>
            <div class="card-body">
                <form action="" method="post">
                    <div class="mb-3">
                        <label for="full_name" class="form-label">Full Name</label>
                        <input type="text" class="form-control" id="full_name" placeholder="John Doe" onChange={(e) => props.setName(e.target.value)}  />
                    </div>
                    <div class="mb-3">
                        <label for="user_email" class="form-label">Email address</label>
                        <input type="email" class="form-control" id="user_email" placeholder="name@example.com" onChange={(e) => props.setEmail(e.target.value)} />
                    </div>
                    <div class="mb-3">
                        <label for="phone_number" class="form-label">Phone Number</label>
                        <input type="tel" class="form-control" id="phone_number" placeholder="123-456-7890" onChange={(e) => props.setNumber(e.target.value)} />
                    </div>
                    <div class="mb-3">
                        <label for="location" class="form-label">Location</label>
                        <input type="text" class="form-control" id="location" placeholder="San Francisco, CA" onChange={(e) => props.setLocation(e.target.value)} />
                    </div>
                </form> 
            </div>
        </div>     
    </>
    
}

export default General


// think of how to pass data from child to parent