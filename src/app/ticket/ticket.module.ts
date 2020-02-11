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
import { MatCheckboxModule } from '@angular/material/checkbox'
import { MatButtonModule } from '@angular/material/button'
import { MatDatepickerModule } from '@angular/material/datepicker'
import { MatListModule } from '@angular/material/list'
import { MatDividerModule } from '@angular/material/divider'
import { MatChipsModule } from '@angular/material/chips'
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { TabContainerModule } from '../tab-container/tab-container.module';
import { TicketIssueComponent } from './components/ticket-issue/ticket-issue.component';



@NgModule({
  declarations: [TicketComponent, TicketCreateComponent, TicketDetailsComponent, TicketSidebarComponent, TicketActionsComponent, TicketMessageComponent, TicketContactComponent, TicketFaqComponent, TicketIssueComponent],
  imports: [
    CommonModule,
    TabContainerModule,
    FlexLayoutModule.withConfig({
      useColumnBasisZero: true,
      printWithBreakpoints: ['xs', 'sm', 'md', 'lg', 'xl', 'lt-sm', 'lt-md', 'lt-lg', 'lt-xl', 'gt-xs', 'gt-sm', 'gt- md', 'gt-lg']
    }),
    MatCardModule,
    MatCheckboxModule,
    MatButtonModule,
    MatDatepickerModule,
    MatListModule,
    MatDividerModule,
    MatChipsModule,
    MatFormFieldModule,
    MatIconModule,
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
