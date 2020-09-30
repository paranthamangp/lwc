import { LightningElement } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

export default class Examplea31ToastNotification extends LightningElement {


    showErrorToast() {
        const evt = new ShowToastEvent({
            title: 'Toast Error',
            message: 'Some unexpected error',
            variant: 'error',
            mode: 'dismissable'
        });
        this.dispatchEvent(evt);
    }
    showSuccessToast() {
        const evt = new ShowToastEvent({
            title: 'Toast Success',
            message: 'Operation sucessful',
            variant: 'success',
            mode: 'dismissable'
        });
        this.dispatchEvent(evt);
    }
    showWarningToast() {
        const evt = new ShowToastEvent({
            title: 'Toast Warning',
            message: 'Some problem',
            variant: 'warning',
            mode: 'pester'
        });
        this.dispatchEvent(evt);
    }
    showInfoToast() {
        const evt = new ShowToastEvent({
            title: 'Toast Info',
            message: 'Operation will run in background',
            variant: 'info',
            mode: 'sticky'
        });
        this.dispatchEvent(evt);
    }


}