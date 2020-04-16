import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {

  serverID: number;
  serverStatus: string;

  constructor() { 
    this.serverID=Math.floor(Math.random()*100);
    this.serverStatus=Math.random()>.5?'online':'offline';
  }

  ngOnInit(): void {
  }

}
