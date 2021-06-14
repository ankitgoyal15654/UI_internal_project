import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateMasterDataDialogComponent } from './create-master-data-dialog.component';

describe('CreateMasterDataDialogComponent', () => {
  let component: CreateMasterDataDialogComponent;
  let fixture: ComponentFixture<CreateMasterDataDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateMasterDataDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateMasterDataDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
