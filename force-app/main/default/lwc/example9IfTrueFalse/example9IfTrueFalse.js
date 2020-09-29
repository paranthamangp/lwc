import { LightningElement } from 'lwc';

export default class Example9IfTrueFalse extends LightningElement {

    displayDiv = false;

    showDivHandler(event){
        this.displayDiv = event.target.checked;
    }

}