import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TicketComponent } from './components/ticket/ticket.component';
import { TicketCreateComponent } from './components/ticket-create/ticket-create.component';
import { TicketDetailsComponent } from './components/ticket-details/ticket-details.component';
import { TicketSidebarComponent } from './components/ticket-sidebar/ticket-sidebar.component';
import { TicketActionsComponent } from './components/ticket-actions/ticket-actions.component';
import { TicketMessageComponent } from './components/ticket-message/ticket-message.component';
import { TicketContactComponent } from './components/ticket-contact/ticket-contact.component';
import { TicketFaqComponent } from './components/ticket-faq/ticket-faq.component';
import { RouterModule } from '@angular/router';
import { TabContainerModule } from '../tab-container/tab-container.module';



@NgModule({
  declarations: [TicketComponent, TicketCreateComponent, TicketDetailsComponent, TicketSidebarComponent, TicketActionsComponent, TicketMessageComponent, TicketContactComponent, TicketFaqComponent],
  imports: [
    CommonModule,
    TabContainerModule,
    RouterModule.forChild([
      {
        path: '',
        component: TicketComponent,
        children: [
          {
            path: 'create',
            component: TicketCreateComponent
          },
          {
            path: 'ticket1',
            component: TicketCreateComponent
          },
          {
            path: 'ticket2',
            component: TicketCreateComponent
          },
          {
            path: 'ticket3',
            component: TicketCreateComponent
          },
        ]
      }
    ])
  ]
})
export class TicketModule { }
