import { LightningElement,track } from 'lwc';
import { createRecord } from "lightning/uiRecordApi";

export default class Examplea24LDS extends LightningElement {

    accountName;
    accountPhone;
    accountWebsite;

    accountNameChangeHandler(event){
        this.accountName = event.target.value;
    }

    accountPhoneChangeHandler(event){
        this.accountPhone = event.target.value;
    }

    accountWebsiteChangeHandler(event){
        this.accountWebsite = event.target.value;
    }

    createAccount(){
        const fields = {'Name' : this.accountName, 'Phone' : this.accountPhone, 'Website': this.accountWebsite};
        const recordInput = {apiName : 'Account', fields};

        createRecord(recordInput).then(response => {
            console.log('Account has been created : ', response.id);
        }).catch(error =>{
            console.error('Error in creating account : ', error.body.message);
        });
    }


}