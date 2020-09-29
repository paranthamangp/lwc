import { LightningElement } from 'lwc';

export default class Example7ApplyCSS extends LightningElement {

    dynamicGreeting = 'World';

    greetingChangeHandler(event){
        this.dynamicGreeting = event.target.value;
    }


}