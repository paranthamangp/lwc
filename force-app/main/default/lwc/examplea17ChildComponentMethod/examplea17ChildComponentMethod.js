import { LightningElement ,api} from 'lwc';

export default class Examplea17ChildComponentMethod extends LightningElement {

    value=100; 
  //public method
  @api handleValueChange() {
    this.value=200;
  }


}