import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-ticket-details',
  templateUrl: './ticket-details.component.html',
  styleUrls: ['./ticket-details.component.scss']
})
export class TicketDetailsComponent implements OnInit {
  tabConfigDetails: any[] = [];

  setTabConfiguration(queryParams: any) {
    this.tabConfigDetails = [
      {
        'title': 'Message',
        'translate': 'Message',
        'path': 'message',
        'serialNumber': 1,
        'isDisable': true,
        'titleUppercase': false,
        queryParams: queryParams
      },
      {
        'title': 'Contact',
        'translate': 'Contact',
        'path': 'contact',
        'serialNumber': 2,
        'isDisable': false,
        'titleUppercase': false,
        queryParams: queryParams
      },
      {
        'title': 'FAQ',
        'translate': 'FAQ',
        'path': 'faq',
        'serialNumber': 3,
        'isDisable': false,
        'titleUppercase': false,
        queryParams: queryParams
      }
    ]
  }

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe(params => {
      this.setTabConfiguration(params);
    })
  }

}
