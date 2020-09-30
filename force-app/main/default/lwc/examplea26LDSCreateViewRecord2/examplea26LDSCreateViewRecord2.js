//Example usinf getFieldValue

import { LightningElement,track, wire } from 'lwc';
import { getRecord,getFieldValue  } from "lightning/uiRecordApi";

import NAME_FIELD from '@salesforce/schema/Account.Name';
import PHONE_FIELD from '@salesforce/schema/Account.Phone';
import WEBSITE_FIELD from '@salesforce/schema/Account.Website';

export default class Examplea26LDSCreateViewRecord2 extends LightningElement {
   
    accountName;
    accountPhone;
    accountWebsite;

    recordId;


    @wire(getRecord, { recordId:'$recordId', fields: [NAME_FIELD, PHONE_FIELD,WEBSITE_FIELD] })
    account;

    
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
            this.recordId = response.id;
        }).catch(error =>{
            console.error('Error in creating account : ', error.body.message);
        });
    }
    get retAccountName(){
        return getFieldValue(this.account.data,NAME_FIELD);
    }

    get retAccountPhone(){
        return getFieldValue(this.account.data,PHONE_FIELD);
    }

    get retAccountWebsite(){
        return getFieldValue(this.account.data,WEBSITE_FIELD);
    }



}