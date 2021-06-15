import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-edit-master-data-dialog',
  templateUrl: './edit-master-data-dialog.component.html',
  styleUrls: ['./edit-master-data-dialog.component.scss']
})
export class EditMasterDataDialogComponent implements OnInit {

  constructor(public dialog: MatDialog,  public dialogRef: MatDialogRef<EditMasterDataDialogComponent>,  @Inject(MAT_DIALOG_DATA) public data: any,) { }

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
