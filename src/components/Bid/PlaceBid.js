import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import GavelIcon from '@material-ui/icons/Gavel';



function PlaceBid() {
    return (
        
            <form>
        {/* form format */}
              <div className='container border'
                    style={{marginTop: '50px',
                    width: '50%',
                    backgroundImage: `url(mail1.jpg)`,
                    ackgroungPosition: 'center',
                    backgroundSize: 'cover'}}>

        {/* bid Icon */}
              <div align='center'><GavelIcon style={{fontSize:80}}/></div>
                
                  <div class="form-group">
                      <br/>
                      <br/>
                  
        {/* First Name */}
                    <div class="form-group">
                          <label for="validationDefault01">First name</label>
                          <input type="text" class="form-control btn-lg active btn-block" id="validationDefault01" placeholder="First name"  required/>
                    </div>
                    
        {/* Last Name  */}
                    <div class="form-group">
                      <label for="validationDefault02">Last name</label>
                      <input type="text" class="form-control" id="validationDefault02" placeholder="Last name"  required/>
                    </div>
        {/* User Name */}
                    <div class="form-group">
                      <label for="validationDefaultUsername">Username</label>
                      <div class="input-group">
                        <div class="input-group-prepend">
                          <span class="input-group-text" id="inputGroupPrepend2">@</span>
                        </div>

                        <input 
                        type="text" 
                          class="form-control" 
                          id="validationDefaultUsername" 
                          placeholder="Username" 
                          aria-describedby="inputGroupPrepend2" 
                          required
                        />
                      </div>
                    </div>
        {/* E mail */}
                    <div class="form-group">
                      <label for="exampleInputEmail1">Email address</label>
                      <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
                      <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>
        {/* Bid Amount */}
                    <div class="form-group">
                        <div class="form-group">
                            <label for="validationDefault03">Bid Amount</label>
                            <input type="number" class="form-control btn-lg active btn-block" id="validationDefault03" placeholder="Bid Amount in LKR" required/>
                        </div>

                  </div>
                </div>
        {/* confirm check box */}
                    <div class="form-group" align='left' >
                      <div class="form-check" >
                        <input class="form-check-input " type="checkbox" value="" id="invalidCheck2" required style={{width: 20, height: 20}}/>
                        <label class="form-check-label" for="invalidCheck2">
                          Confirm
                        </label>
                      </div>
                    </div>

        {/* submit/reset/cancel buttons */}
                <div align='center'>
                
                  <a href="/User_Homepage" class="btn btn-success btn-lg active btn-block"  type="submit" role="button" aria-pressed="true">Place Bid</a>
                  <input class="btn btn-secondary btn-lg active btn-block" type="reset" value="Reset"></input>
                  <button type="button" class="btn btn-danger btn-lg active btn-block">Cancel</button>
                
                </div>
            </div>
</form>
        
    )
}

export default PlaceBid;
