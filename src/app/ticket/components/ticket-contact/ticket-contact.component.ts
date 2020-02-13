import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ticket-contact',
  templateUrl: './ticket-contact.component.html',
  styleUrls: ['./ticket-contact.component.scss']
})
export class TicketContactComponent implements OnInit {
  panelOpenState = false;

  constructor() { }

  ngOnInit(): void {
  }

}
