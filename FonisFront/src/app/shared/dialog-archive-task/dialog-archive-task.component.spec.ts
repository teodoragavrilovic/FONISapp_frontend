import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogArchiveTaskComponent } from './dialog-archive-task.component';

describe('DialogArchiveTaskComponent', () => {
  let component: DialogArchiveTaskComponent;
  let fixture: ComponentFixture<DialogArchiveTaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogArchiveTaskComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogArchiveTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
