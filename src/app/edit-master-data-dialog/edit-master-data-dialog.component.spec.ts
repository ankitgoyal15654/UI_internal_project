import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditMasterDataDialogComponent } from './edit-master-data-dialog.component';

describe('EditMasterDataDialogComponent', () => {
  let component: EditMasterDataDialogComponent;
  let fixture: ComponentFixture<EditMasterDataDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditMasterDataDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditMasterDataDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
