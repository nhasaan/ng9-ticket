import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.scss']
})
export class TicketComponent implements OnInit {
  tabConfigTickets: any[] = [];

  setTabConfiguration(queryParams: any) {
    this.tabConfigTickets = [
      {
        'title': 'Ticket1',
        'translate': 'Ticket1',
        'path': 'ticket1',
        'serialNumber': 1,
        'isDisable': true,
        'titleUppercase': false,
        'icon': {
          right: 'cancel'
        },
        queryParams: queryParams
      },
      {
        'title': 'Ticket2',
        'translate': 'Ticket2',
        'path': 'ticket2',
        'serialNumber': 2,
        'isDisable': false,
        'titleUppercase': false,
        'icon': {
          right: 'cancel'
        },
        queryParams: queryParams
      },
      {
        'title': 'Ticket3',
        'translate': 'Ticket3',
        'path': 'ticket3',
        'serialNumber': 3,
        'isDisable': false,
        'titleUppercase': false,
        'icon': {
          right: 'cancel'
        },
        queryParams: queryParams
      },
      {
        'title': 'Add New',
        'translate': 'Add New',
        'path': 'create',
        'serialNumber': 4,
        'isDisable': false,
        'titleUppercase': false,
        'icon': {
          right: 'add'
        },
        queryParams: queryParams
      },
    ]
  }

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.router.navigate(['ticket', 'create', 'message']);
    this.activatedRoute.queryParams.subscribe(params => {
      this.setTabConfiguration(params);
    })
  }

}
