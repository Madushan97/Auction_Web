
import emailjs from 'emailjs-com'
import ContactMailIcon from '@material-ui/icons/ContactMail';




const Mailer = () => {

    function sendEmail(e){
        e.preventDefault();
        
        emailjs.sendForm('service_fzct538', 'template_bza4vxk', e.target, 'user_aVJd9QNVcrVdefFvZ1mbx')
        .then(res=>{
            console.log(res);
        })
        .catch(err=>console.log(err))

        
    }
    return (
       
        <div className='container border'
            style={{marginTop: '50px',
            width: '50%',
            backgroundImage: `url(mail1.jpg)`,
            ackgroungPosition: 'center',
            backgroundSize: 'cover'}}>

               
            <div><ContactMailIcon fontSize="large" align= "center"/></div>
            <h1 style={{marginTop: '25px'}}> Compose Email</h1>
            <form className='row' style={{margin: '25px 85px 75px 100px'}} onSubmit ={sendEmail}>
                <label>Name</label>
                <input type = "text" name = " name" className='form-control'/>

                <label>Email</label>
                <input type = "email" name = " user_email" className='form-control'/>

                <label>Message</label>
                <textarea name = 'message' rows = '4' className='form-control'/>
                <input type = "submit" value = " SEND" className='form-control btn btn-primary' style={{marginTop: '30px'}}/>
                <input type = "reset" value = " RESET" className='form-control btn btn-secondary' style={{marginTop: '30px'}}/>

            </form>
        </div>

    )
}

export default Mailer;