import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server-farm',
  templateUrl: './server-farm.component.html',
  styleUrls: ['./server-farm.component.css']
})
export class ServerFarmComponent implements OnInit {

  //servers=[{serverID: 32, serverStatus: 'online'}, {serverID:55 , serverStatus: 'offline'}] // Creazione di un array
  servers=[];
  serverName: string='';
  serverCreated: boolean=false;

  constructor() { }

  ngOnInit() {
  }

  onCreateServer()
  {
    this.servers.push('');
    this.serverCreated=true;  // Settiamo questa variabile se no non vediamo la stringa col messaggio
    /*setTimeout(() => {
      this.serverCreated=false
    },2000);*/
  }

  onChangeServerName()
  {
    this.serverCreated=false;
  }

}