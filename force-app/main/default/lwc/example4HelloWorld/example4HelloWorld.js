import { LightningElement } from 'lwc';

export default class Example4HelloWorld extends LightningElement {

    dynamicGreeting = 'World';

    greetingChangeHandler(event){
        this.dynamicGreeting = event.target.value;
    }


}