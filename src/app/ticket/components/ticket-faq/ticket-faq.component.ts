import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ticket-faq',
  templateUrl: './ticket-faq.component.html',
  styleUrls: ['./ticket-faq.component.scss']
})
export class TicketFaqComponent implements OnInit {
  panelOpenState = false;

  constructor() { }

  ngOnInit(): void {
  }

}
