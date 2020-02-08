import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketContactComponent } from './ticket-contact.component';

describe('TicketContactComponent', () => {
  let component: TicketContactComponent;
  let fixture: ComponentFixture<TicketContactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TicketContactComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TicketContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
