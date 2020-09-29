import { LightningElement } from 'lwc';

export default class Example8IfTrueFalse extends LightningElement {

    displayDiv = false;

    showDivHandler(event){
        this.displayDiv = event.target.checked;
    }

}