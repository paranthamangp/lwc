import { LightningElement } from 'lwc';

export default class Examplea27LDSBCRecordEdit extends LightningElement {

    recordId;
successHandler(event){
        this.recordId = event.detail.id;
    }

}