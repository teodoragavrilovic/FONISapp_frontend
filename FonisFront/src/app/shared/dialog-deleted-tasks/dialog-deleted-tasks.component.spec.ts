import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogDeletedTasksComponent } from './dialog-deleted-tasks.component';

describe('DialogDeletedTasksComponent', () => {
  let component: DialogDeletedTasksComponent;
  let fixture: ComponentFixture<DialogDeletedTasksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogDeletedTasksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogDeletedTasksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
