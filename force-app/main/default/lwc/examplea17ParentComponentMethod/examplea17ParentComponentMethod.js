import { LightningElement } from 'lwc';

export default class Examplea17ParentComponentMethod extends LightningElement {

    handleClick() {
        //firing an child method
        this.template.querySelector("c-examplea17-child-component-method").handleValueChange();
      }
}