import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import GavelIcon from '@material-ui/icons/Gavel';

function PlaceBid() {
    return (
        
            <form>
              <div align='center'>
              <GavelIcon style={{fontSize:80}}/></div>
                <div class="form-row">
                  <br/>
                  <br/>
                  
                    <div class="col-md-4 mb-3">
                          <label for="validationDefault01">First name</label>
                          <input type="text" class="form-control" id="validationDefault01" placeholder="First name"  required/>
                    </div>
                    
                    <div class="col-md-4 mb-3">
                      <label for="validationDefault02">Last name</label>
                      <input type="text" class="form-control" id="validationDefault02" placeholder="Last name"  required/>
                    </div>
                    <div class="col-md-4 mb-3 form-row">
                      <label for="validationDefaultUsername">Username</label>
                      <div class="input-group">
                        <div class="input-group-prepend">
                          <span class="input-group-text" id="inputGroupPrepend2">@</span>
                        </div>
                        <input type="text" class="form-control" id="validationDefaultUsername" placeholder="Username" aria-describedby="inputGroupPrepend2" required/>
                      </div>
                      </div>
                      </div>

  <div class="form-row">
    <div class="col-md-6 mb-3">
      <label for="validationDefault03">Bid Amount</label>
      <input type="text" class="form-control" id="validationDefault03" placeholder="Bid Amount in LKR" required/>
    </div>
   
    
  </div>
  <div class="form-group" align='center'>
    <div class="form-check" >
      <input class="form-check-input" type="checkbox" value="" id="invalidCheck2" required/>
      <label class="form-check-label" for="invalidCheck2">
        Confirm
      </label>
    </div>
  </div>
  <div align='center'>
  <button class="btn btn-primary" type="submit">PLACE BID</button>
  </div>
</form>
        
    )
}

export default PlaceBid;
