//this is simple component that exporting all language messages 
//this is encapsulation component that encapsulates all messages from all languages

import en_US from './englishMessages/en-US';
import de_de from './germanMessages/de-de';
import fr_ca from './FrenchMessages/fr-ca'

export default {
	...en_US,
	...de_de,
	...fr_ca,
}


//above will be evaluated to {["en-Us"]:{name:"english"}}