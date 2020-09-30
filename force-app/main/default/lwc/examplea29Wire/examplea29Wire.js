import { LightningElement, wire } from 'lwc';
import getAllAccounts from '@salesforce/apex/wireServiceAccountManager.getAccount'

export default class Examplea29Wire extends LightningElement {

    
    @wire(getAllAccounts)
    accounts;

//Wire service response is stored as accounts.data property and incase of error accounts.error property has the error details

    get responseReceived(){
        if(this.accounts){
            return true;
        }
        return false;
    }
}
