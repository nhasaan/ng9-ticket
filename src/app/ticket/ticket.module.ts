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
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCardModule } from '@angular/material/card'
import { TabContainerModule } from '../tab-container/tab-container.module';
import { TicketIssueComponent } from './components/ticket-issue/ticket-issue.component';



@NgModule({
  declarations: [TicketComponent, TicketCreateComponent, TicketDetailsComponent, TicketSidebarComponent, TicketActionsComponent, TicketMessageComponent, TicketContactComponent, TicketFaqComponent, TicketIssueComponent],
  imports: [
    CommonModule,
    TabContainerModule,
    MatCardModule,
    FlexLayoutModule.withConfig({
      useColumnBasisZero: true,
      printWithBreakpoints: ['xs', 'sm', 'md', 'lg', 'xl', 'lt-sm', 'lt-md', 'lt-lg', 'lt-xl', 'gt-xs', 'gt-sm', 'gt- md', 'gt-lg']
    }),
    RouterModule.forChild([
      {
        path: '',
        component: TicketComponent,
        children: [
          {
            path: 'create',
            component: TicketCreateComponent,
            children: [
              {
                path: 'message',
                component: TicketMessageComponent
              },
              {
                path: 'contact',
                component: TicketContactComponent
              },
              {
                path: 'faq',
                component: TicketFaqComponent
              }
            ]
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
  ],
  exports: [TicketCreateComponent, TicketDetailsComponent]
})
export class TicketModule { }