import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {

  serverId: number;
  serverStatus: string;
  constructor() { 
    this.serverId=Math.floor(Math.random()*100)+1;
    this.serverStatus=Math.floor(Math.random())>.5?'online': 'offline';
  }
  ngOnInit() {
  }

}