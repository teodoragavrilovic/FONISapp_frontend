import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogInsertUserComponent } from './dialog-insert-user.component';

describe('DialogInsertUserComponent', () => {
  let component: DialogInsertUserComponent;
  let fixture: ComponentFixture<DialogInsertUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogInsertUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogInsertUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
