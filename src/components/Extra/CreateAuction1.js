import React from 'react'

function CreateAuction1() {
    return (

        <form>

            <div className='container border'
                    style={{marginTop: '50px',
                    width: '50%',
                    backgroundImage: `url(mail1.jpg)`,
                    ackgroungPosition: 'center',
                    backgroundSize: 'cover'}}>

            <div class="form-group">
                <label for="exampleInputEmail1">Email address</label>
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
                <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>

            <div class="form-group">
                <label for="exampleInputPassword1">Password</label>
                <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"/>
            </div>

            
            <button type="submit" class="btn btn-primary">Submit</button>

            </div>

        </form>
    )
}

export default CreateAuction1;
