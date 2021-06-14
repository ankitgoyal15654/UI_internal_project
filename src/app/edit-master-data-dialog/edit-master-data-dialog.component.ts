import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-edit-master-data-dialog',
  templateUrl: './edit-master-data-dialog.component.html',
  styleUrls: ['./edit-master-data-dialog.component.scss']
})
export class EditMasterDataDialogComponent implements OnInit {

  constructor(public dialog: MatDialog,  public dialogRef: MatDialogRef<EditMasterDataDialogComponent>) { }

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
