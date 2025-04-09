
function General(props) {

    return <>
        <div class="card m-3 shadow">
            <div class="card-header">
                General Information
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
                </form> 
            </div>
        </div>     
    </>
    
}

export default General


// think of how to pass data from child to parent