import React from "react";
import { BasicFormInput, BasicFormInputLabel } from "components/forms";



const CreateAccountForm = () => {
    return (
        <div>
            <BasicFormInputLabel>Mobile
                <br/>
            <BasicFormInput type="text"/>
            </BasicFormInputLabel>
            <BasicFormInputLabel bold={true}>Mobile
                <br/>
            <BasicFormInput type="text"/>
            </BasicFormInputLabel>
            
        </div>
    );
};

export default CreateAccountForm;
