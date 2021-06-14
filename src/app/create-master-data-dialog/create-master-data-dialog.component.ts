import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
@Component({
  selector: 'app-create-master-data-dialog',
  templateUrl: './create-master-data-dialog.component.html',
  styleUrls: ['./create-master-data-dialog.component.scss']
})
export class CreateMasterDataDialogComponent implements OnInit {

  constructor(public dialog: MatDialog,  public dialogRef: MatDialogRef<CreateMasterDataDialogComponent>) { }

  ngOnInit(): void {
  }

  // Save master data dialog
  saveMasterData(): void {
    this.dialogRef.close();
  }

  // Close master data dialog
  closeDiolog(): void {
    this.dialogRef.close();
  }

}
