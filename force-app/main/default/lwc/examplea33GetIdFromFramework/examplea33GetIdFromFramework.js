import { LightningElement,api } from 'lwc';

export default class Examplea33GetIdFromFramework extends LightningElement {
    @api recordId;
    @api objectApiName;
    

    handleSuccess(event){
        this.recordId = event.detail.id;
    }

}