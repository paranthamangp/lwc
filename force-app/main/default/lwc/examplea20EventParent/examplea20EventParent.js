import { LightningElement } from 'lwc';

export default class Examplea20EventParent extends LightningElement {

    selectedMeetingRoom;

    meetingRoomsInfo = [
        {roomName:'A-01', roomCapacity:'12'},
        {roomName:'A-02', roomCapacity:'16'},
        {roomName:'A-03', roomCapacity:'12'},
        {roomName:'B-01', roomCapacity:'5'},
        {roomName:'B-02', roomCapacity:'8'},
        {roomName:'B-03', roomCapacity:'10'},
        {roomName:'C-01', roomCapacity:'20'}

    ];

    onTileSelectHandler(event){
        const meetingRoomInfo = event.detail;
        this.selectedMeetingRoom = meetingRoomInfo.roomName;
    }

    //Alternately, you can define both the listener and the handler in the owner component's JavaScript file.
    /* 
    constructor(){
        super();
        this.template.addEventListener('tileclick', this.onTileSelectHandler.bind(this));
    }
     */ 
}