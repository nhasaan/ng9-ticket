import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketFaqComponent } from './ticket-faq.component';

describe('TicketFaqComponent', () => {
  let component: TicketFaqComponent;
  let fixture: ComponentFixture<TicketFaqComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TicketFaqComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TicketFaqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
