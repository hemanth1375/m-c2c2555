import React, { FC } from "react";
import "./CreateContactFromVcard.css";
import { translate } from "languages";

const CreateContactFromVcard: FC = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-sm-12">
          <div>
            <h4 className="contact-vcard-heading mt-3 mb-3">{translate("importVCard")}</h4>
          </div>
          <div className="contact-vcard p-3">
            <div className="contact-vcard-flex-container">
              <p className="contact-vcard-paragraph">
              {translate("automaticallyCreateANewContactByImportingAVCardFromYourFileSystem")}
              </p>
              <form>
                <input type="hidden" name="max_file_size" value="30000" />
                <input type="hidden" name="action" value="importVCardSave" />
                <input type="hidden" name="module" value="Contacts" />
                <input type="hidden" name="form" value="ImportVCard" />
                <input size={60} name="Vcard" id="Vcard-file" type="file" className="contact-vcard-file"/> <br />
                <input type="button" id="import-vcard-button" title =" Import Vcard" className="contact-vcard-button mt-3" value="Import Vcard"/>
               </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateContactFromVcard;
