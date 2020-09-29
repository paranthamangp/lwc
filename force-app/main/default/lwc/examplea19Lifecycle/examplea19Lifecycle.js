import { LightningElement } from 'lwc';

export default class Examplea19Lifecycle extends LightningElement {

    constructor(){
        super();
        console.log('Constructor Called');
    }
    
    connectedCallback(){
        console.log('Component Connected Callback is called');
        //Event communication methods will be registered
    }

    renderedCallback(){
        console.log('Component Rendered Callback is called');
        //Use it to perform logic after a component has finished the rendering phase.
    }
    
    disconnectedCallback(){
        console.log('Component DisConnected Callback is called');
        //Event communication methods will be unregistere
    }

  
    errorCallback(error, stack) {
        this.error = error;
    }

}