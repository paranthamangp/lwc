import { LightningElement } from 'lwc';
import getAllAccounts from '@salesforce/apex/AccountManagerNonCacheable.getAccount'
export default class Examplea30NonCacheableApex extends LightningElement {

    numberOfRecords;
    accounts;

    numberOfAccountChangeHandler(event){
        this.numberOfRecords = event.target.value;
    }

    getAccounts(){
        getAllAccounts({numberOfRecords:this.numberOfRecords}).then(response =>{
            this.accounts = response;
        }).catch(error =>{
            console.error('Error in getting the accounts', error.body.message);
        })
    }

    get responseReceived(){
        if(this.accounts){
            return true;
        }
        return false;
    }


}