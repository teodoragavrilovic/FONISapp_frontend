import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogInsertTaskComponent } from './dialog-insert-task.component';

describe('DialogInsertTaskComponent', () => {
  let component: DialogInsertTaskComponent;
  let fixture: ComponentFixture<DialogInsertTaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogInsertTaskComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogInsertTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
