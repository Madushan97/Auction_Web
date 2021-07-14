import React from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import {
  withStyles,
  
} from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import GemStatus from './GemStatus';
import GemWeight from './GemWeight'
import GemAmount from './GemAmount';
import GemImageUpload from './GemImageUpload';
import Button from '@material-ui/core/Button';

import CreateNewFolderRoundedIcon from '@material-ui/icons/CreateNewFolderRounded';
import DeleteRoundedIcon from '@material-ui/icons/DeleteRounded';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(2),
      width: '30ch',
    },
    
  },
  formControl: {
    margin: theme.spacing(2),
    minWidth: 263,
  },
  MenuItem: {
    margin: theme.spacing(2),
    minWidth: 100,
  },
  OutlinedInput: {
    minWidth: 100,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

const ValidationTextField = withStyles({
  root: {
    '& input:valid + fieldset': {
      borderColor: 'green',
      borderWidth: 2,
    },
    '& input:invalid + fieldset': {
      borderColor: 'red',
      borderWidth: 2,
    },
    '& input:valid:focus + fieldset': {
      borderLeftWidth: 6,
      padding: '4px !important', // override inline-style
    },
  },
})(TextField);

export default function CreateAuctionForm() {
  const classes = useStyles();
  const [gemname, setgemname] = React.useState('');

 
  const handleChange = (event)=>{
    setgemname(event.target.value);
  };
   
  return (
    <form className={classes.root} noValidate autoComplete="off">
      {/* user details */}
        <div className='User Details' >
          <h3 align='center'>User Details</h3>
          
            <ValidationTextField
                className={classes.margin}
                label="First Name"
                required
                variant="outlined"
                defaultValue=""
                id="validation-outlined-input"
            />

            <ValidationTextField
                className={classes.margin}
                label="Last Name"
                required
                variant="outlined"
                defaultValue=""
                id="validation-outlined-input"
            />

            <ValidationTextField
                className={classes.margin}
                label="Email"
                required
                variant="outlined"
                defaultValue=""
                id="validation-outlined-input"
            />
      </div>

      {/* auction details */}
      <div className='Auction Details' >
      <h3 align = 'center'>Auction Details</h3>
        
      </div>

      <div >
      <FormControl variant="outlined" className={classes.formControl}>
          <InputLabel id="demo-simple-select-outlined-label">Gem Name</InputLabel>
              <Select
                labelId="demo-simple-select-outlined-label"
                id="demo-simple-select-outlined"
                value={gemname}
                onChange={handleChange}
                label="Gem Name"
          >

          <MenuItem value="">
              <em>None</em>
          </MenuItem>
          <MenuItem value={10}>ALEXANDRITE</MenuItem>
          <MenuItem value={20}>ALEXANDRITE CATS EYE</MenuItem>
          <MenuItem value={30}>ALMANDINE GARNET (PYROPE)</MenuItem>
          <MenuItem value={40}>AMBER</MenuItem>
          <MenuItem value={50}>AMETHYST</MenuItem>
          <MenuItem value={60}>AMETHYST CABOCHON</MenuItem>
          <MenuItem value={70}>AMETRINE</MenuItem>
          <MenuItem value={80}>AMMOLITE</MenuItem>
          <MenuItem value={90}>ANDESINE</MenuItem>
          <MenuItem value={100}>APATITE</MenuItem>
          <MenuItem value={110}>APATITE CAT'S EYE</MenuItem>
          <MenuItem value={120}>AQUAMARINE</MenuItem>
          <MenuItem value={130}>AUSTRALIAN OPAL</MenuItem>
          <MenuItem value={140}>AVENTURINE</MenuItem>
          <MenuItem value={150}>AZURITE</MenuItem>
          <MenuItem value={160}>BALTIC AMBER</MenuItem>
          <MenuItem value={170}>BASRA PEARLS</MenuItem>
          <MenuItem value={180}>BERYL</MenuItem>
          <MenuItem value={190}>BICOLOR SAPPHIRE</MenuItem>
          <MenuItem value={200}>BIXBITE</MenuItem>
          <MenuItem value={210}>BLACK ONYX</MenuItem>
          <MenuItem value={220}>BLACK OPAL</MenuItem>
          <MenuItem value={230}>BLACK PEARLS</MenuItem>
          <MenuItem value={240}>BLACK SPINEL</MenuItem>
          <MenuItem value={250}>BLACK TOURMALINE</MenuItem>
          <MenuItem value={260}>BLIZZARD STONE</MenuItem>
          <MenuItem value={270}>BLOODSTONE</MenuItem>
          <MenuItem value={280}>BLUE FLUORITE</MenuItem>
          <MenuItem value={290}>BLUE OPAL</MenuItem>
          <MenuItem value={300}>BLUE SAPPHIRE (NEELAM)</MenuItem>
          <MenuItem value={310}>BLUE SPINEL</MenuItem>
          <MenuItem value={320}>BLUE TOPAZ</MenuItem>
          <MenuItem value={330}>BLUE TOURMALINE/INDICOLITE TOURMALINE</MenuItem>
          <MenuItem value={340}>BLUE ZIRCON</MenuItem>
          <MenuItem value={350}>BOULDER OPAL</MenuItem>
          <MenuItem value={360}>BRAZILIAN EMERALD</MenuItem>
          <MenuItem value={370}>BROWN ZIRCON</MenuItem>
          <MenuItem value={380}>BURMESE RUBY</MenuItem>
          <MenuItem value={390}>BURMESE SAPPHIRE</MenuItem>
          <MenuItem value={400}>CARNELIAN</MenuItem>
          <MenuItem value={410}>CATS EYE</MenuItem>
          <MenuItem value={420}>CEYLON BLUE SAPPHIRE</MenuItem>
          <MenuItem value={430}>CHROME DIOPSIDE</MenuItem>
          <MenuItem value={440}>CHROME TOURMALINE</MenuItem>
          <MenuItem value={450}>CHRYSOBERYL</MenuItem>
          <MenuItem value={460}>CHRYSOBERYL CAT’S EYE (LEHSUNIA)</MenuItem>
          <MenuItem value={470}>CHRYSOCOLLA</MenuItem>
          <MenuItem value={480}>CITRINE (SUNELA)</MenuItem>
          <MenuItem value={490}>COLOMBIAN EMERALD</MenuItem>
          <MenuItem value={500}>COLOR CHANGE FLUORITE</MenuItem>
          <MenuItem value={510}>COLOR CHANGE SAPPHIRE</MenuItem>
          <MenuItem value={520}>CORNFLOWER BLUE SAPPHIRE</MenuItem>
          <MenuItem value={530}>CUBIC ZIRCONIA</MenuItem>
          <MenuItem value={540}>CULTURED PEARLS</MenuItem>
          <MenuItem value={550}>DANBURITE</MenuItem>
          <MenuItem value={560}>DEMANTOID GARNET</MenuItem>
          <MenuItem value={570}>DIOPSIDE</MenuItem>
          <MenuItem value={580}>EMERALD (PANNA)</MenuItem>
          <MenuItem value={590}>ETHIOPIAN EMERALD</MenuItem>
          <MenuItem value={600}>ETHIOPIAN OPAL</MenuItem>
          <MenuItem value={610}>FIRE AGATE</MenuItem>
          <MenuItem value={620}>FIRE OPAL</MenuItem>
          <MenuItem value={630}>FLUORITE</MenuItem>
          <MenuItem value={640}>FRESHWATER PEARLS</MenuItem>
          <MenuItem value={650}>GARNET</MenuItem>
          <MenuItem value={660}>GLASS FILLED RUBY</MenuItem>
          <MenuItem value={670}>GOLDEN SAPPHIRE</MenuItem>
          <MenuItem value={680}>GOSHENITE</MenuItem>
          <MenuItem value={690}>GREEN AMETHYST (PRASIOLITE)</MenuItem>
          <MenuItem value={700}>GREEN KYANITE</MenuItem>
          <MenuItem value={710}>GREEN SAPPHIRE</MenuItem>
          <MenuItem value={720}>GREEN TOURMALINE (VERDELITE)</MenuItem>
          <MenuItem value={730}>HELIODOR</MenuItem>
          <MenuItem value={740}>HESSONITE (GOMED)</MenuItem>
          <MenuItem value={750}>INDIAN EMERALD</MenuItem>
          <MenuItem value={760}>INDIAN RUBY</MenuItem>
          <MenuItem value={770}>INDRANEELAM</MenuItem>
          <MenuItem value={780}>INSIGNIFICANT OIL EMERALD</MenuItem>
          <MenuItem value={790}>IOLITE (NEELI)</MenuItem>
          <MenuItem value={800}>JADE NEPHRITE</MenuItem>
          <MenuItem value={810}>JADEITE</MenuItem>
          <MenuItem value={820}>JAPANESE RED CORAL</MenuItem>
          <MenuItem value={830}>JASPER</MenuItem>
          <MenuItem value={840}>KASHMIR BLUE SAPPHIRE</MenuItem>
          <MenuItem value={850}>KESHI PEARLS</MenuItem>
          <MenuItem value={860}>KHOONI NEELAM</MenuItem>
          <MenuItem value={870}>KUNZITE</MenuItem>
          <MenuItem value={880}>KYANITE</MenuItem>
          <MenuItem value={890}>LABRADORITE</MenuItem>
          <MenuItem value={900}>LAPIS LAZULI</MenuItem>
          <MenuItem value={910}>LAVENDER QUARTZ</MenuItem>
          <MenuItem value={920}>LEMON QUARTZ</MenuItem>
          <MenuItem value={930}>LONDON BLUE TOPAZ</MenuItem>
          <MenuItem value={940}>MALACHITE</MenuItem>
          <MenuItem value={950}>MEXICAN FIRE OPAL</MenuItem>
          <MenuItem value={960}>MOGOK RUBY</MenuItem>
          <MenuItem value={970}>MOLDAVITE</MenuItem>
          <MenuItem value={980}>MOONSTONE</MenuItem>
          <MenuItem value={990}>MORGANITE</MenuItem>
          <MenuItem value={999}>MOSS AGATE</MenuItem>
          <MenuItem value={998}>MOZAMBIQUE RUBY</MenuItem>
          <MenuItem value={997}>NATURAL PEARLS</MenuItem>
          <MenuItem value={996}>NAVRATNA</MenuItem>
          <MenuItem value={995}>OBSIDIAN</MenuItem>
          <MenuItem value={994}>ONYX (CHALCEDONY)</MenuItem>
          <MenuItem value={993}>OPAL</MenuItem>
          <MenuItem value={992}>ORANGE KYANITE</MenuItem>
          <MenuItem value={991}>ORANGE SAPPHIRE</MenuItem>
          <MenuItem value={989}>PADPARADSCHA</MenuItem>
          <MenuItem value={988}>PAKISTAN EMERALD/SWAT EMERALD</MenuItem>
          <MenuItem value={987}>PANJSHIR EMERALD</MenuItem>
          <MenuItem value={986}>PARAIBA TOURMALINE</MenuItem>
          <MenuItem value={985}>PEACH SAPPHIRE</MenuItem>
          <MenuItem value={984}>PEARL (MOTI)</MenuItem>
          <MenuItem value={983}>PERIDOT</MenuItem>
          <MenuItem value={982}>PIGEON BLOOD RUBY</MenuItem>
          <MenuItem value={981}>PINK SAPPHIRE</MenuItem>
          <MenuItem value={979}>PINK SPINEL</MenuItem>
          <MenuItem value={978}>PINK TOPAZ</MenuItem>
          <MenuItem value={977}>PINK TOURMALINE</MenuItem>
          <MenuItem value={976}>PREHNITE</MenuItem>
          <MenuItem value={975}>PURPLE SAPPHIRE</MenuItem>
          <MenuItem value={974}>RED ZIRCON</MenuItem>
          <MenuItem value={973}>ROYAL BLUE SAPPHIRE</MenuItem>
          <MenuItem value={972}>RUBY (MANIK)</MenuItem>
          <MenuItem value={971}>RUSSIAN ALEXANDRITE</MenuItem>
          <MenuItem value={969}>RUSSIAN EMERALD</MenuItem>
          <MenuItem value={968}>ZOISITE</MenuItem>
          <MenuItem value={967}>ZIRCON</MenuItem>
          <MenuItem value={966}>ZAMBIAN EMERALD</MenuItem>
          <MenuItem value={965}>YELLOW ZIRCON</MenuItem>
          <MenuItem value={964}>YELLOW TOPAZ</MenuItem>
          <MenuItem value={963}>YELLOW SAPPHIRE - PUKHRAJ</MenuItem>
          <MenuItem value={962}>YELLOW FLUORITE</MenuItem>
          <MenuItem value={961}>YELLOW BERYL</MenuItem>
          <MenuItem value={959}>WHITE ZIRCON</MenuItem>
          <MenuItem value={958}>TURQUOISE (FIROZA)</MenuItem>
          <MenuItem value={957}>TSAVORITE</MenuItem>
          <MenuItem value={956}>TITANITE</MenuItem>
          <MenuItem value={955}>TEAL SAPPHIRE</MenuItem>
          <MenuItem value={954}>TIGER EYE</MenuItem>


              </Select>

      </FormControl>

      <GemStatus/>
      </div>

          <div >
              <GemWeight/>
          </div>

          <div >
              <GemAmount/>
          </div>


          <div>
           <div class="mb-3" >
              <label for="validationTextarea">Description</label>
              <textarea class="form-control is-valid" id="validationTextarea" placeholder="Required Gem Description" required ></textarea>
              <div class="valid-feedback">
                    Please enter a message in the textarea.
              </div>
           </div>
      </div>

      <div>
      <br/>
      <form className={classes.container} noValidate>
  <TextField
    id="datetime-local"
    label="Next appointment"
    type="datetime-local"
    defaultValue="2017-05-24T10:30"
    className={classes.textField}
    InputLabelProps={{
      shrink: true,
    }}
  />
</form>
<br/>
      </div>
     

      <div >
        <GemImageUpload/>
      </div>

      

      <div className='Creat Auction' align = 'center'>
      <Button href='/User_Homepage' variant="contained" color="primary" disableElevation>
          <CreateNewFolderRoundedIcon/>
           Create Auction
      </Button>
            <br/>
            <br/>
      <Button variant="contained" color="secondary" disableElevation>
          <DeleteRoundedIcon/>
          Cancel
      </Button>

      </div>

      <div>
        <br/>
      </div>
     
    
      
    </form>
  );
}
