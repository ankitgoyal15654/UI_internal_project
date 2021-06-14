import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteMasterDataDialogComponent } from './delete-master-data-dialog.component';

describe('DeleteMasterDataDialogComponent', () => {
  let component: DeleteMasterDataDialogComponent;
  let fixture: ComponentFixture<DeleteMasterDataDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteMasterDataDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteMasterDataDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
