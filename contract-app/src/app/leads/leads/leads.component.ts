import {Component, OnInit} from '@angular/core';
import {CompatClient, Stomp} from "@stomp/stompjs";
import {MatTableDataSource} from "@angular/material";

const URL = "ws://localhost:8080/websocket";

export interface Lead {
  id: number;
  number: string;
  relationId: string;
  quantity: number;
}

@Component({
  selector: 'app-leads',
  templateUrl: './leads.component.html',
  styleUrls: ['./leads.component.css']
})
export class LeadsComponent implements OnInit {

  leads: Lead[] = [];
  dataSource = new MatTableDataSource<Lead>();
  columnsToDisplay: string[] = ['number', 'relation', 'quantity'];

  private ws: CompatClient;

  constructor() {
  }

  ngOnInit() {
    this.connect();
  }

  connect() {
    //connect to stomp where stomp endpoint is exposed
    this.ws = Stomp.over(new WebSocket(URL));
    let that = this;
    this.ws.connect({}, function (frame) {
      that.ws.subscribe("/errors", function (message) {
        alert("Error " + message.body);
      });
      that.ws.subscribe("/topic/leads", function (message) {
        that.leads.push(JSON.parse(message.body));
        that.dataSource = new MatTableDataSource<Lead>(that.leads);
      });
    }, function (error) {
      alert("STOMP error " + error);
    });
  }

  disconnect() {
    if (this.ws != null) {
      this.ws.ws.close();
    }
    console.log("Disconnected");
  }
}
