import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {MatSort} from '@angular/material/sort';
// import { DialogBoxComponent } from './dialog-box/dialog-box';
import {MatTableDataSource} from '@angular/material/table';
export interface masterData {
  cuid: string;
  carrier:number,
  clientName: string;
  createdDate:string;
  createdBy:string;
  updatedBy:string;
  updatedDate:string;
}

const ELEMENT_DATA: masterData[] = [
  {cuid: '0636', carrier:9350, clientName: 'Bridgewater Raynham Regional School District', createdDate:'16-April-21 15:00:00', createdBy:'Kundan', updatedBy:'Devendra', updatedDate:'14-May-21 15:00:00'},
  {cuid: '0637', carrier:9350, clientName: 'Cape code Municipal', createdDate:'21-Feb-21 15:00:00', createdBy:'Kundan', updatedBy:'Devendra', updatedDate:'15-May-21 15:00:00'},
  {cuid: '0638', carrier:9350, clientName: 'City of Cambridge', createdDate:'31-May-21 15:00:00', createdBy:'Kundan', updatedBy:'Devendra', updatedDate:'16-May-21 15:00:00'},
  {cuid: '0639', carrier:9350, clientName: 'City of Chelsea', createdDate:'12-Apri-21 15:00:00', createdBy:'Kundan', updatedBy:'Devendra', updatedDate:'16-May-21 15:00:00'},
  {cuid: '0640', carrier:9350, clientName: 'City of Malden', createdDate:'12-May-21 15:00:00', createdBy:'Kundan', updatedBy:'Devendra', updatedDate:'16-May-21 15:00:00'},
  {cuid: '0641', carrier:9350, clientName: 'Hamilton-Wenham Regional', createdDate:'12-May-21 15:00:00', createdBy:'Kundan', updatedBy:'Devendra', updatedDate:'16-May-21 15:00:00'},
  {cuid: '0642', carrier:9350, clientName: 'Hewlett Packard Enterprise', createdDate:'12-May-21 15:00:00', createdBy:'Kundan', updatedBy:'Devendra', updatedDate:'16-May-21 15:00:00'},
  {cuid: '0643', carrier:9350, clientName: 'Keefe Regional Technical', createdDate:'12-May-21 15:00:00', createdBy:'Kundan', updatedBy:'Devendra', updatedDate:'16-May-21 15:00:00'},
  {cuid: '0644', carrier:9350, clientName: 'King Philip Regional School District', createdDate:'15-Dec-20 15:00:00', createdBy:'Kundan', updatedBy:'Devendra', updatedDate:'16-May-21 15:00:00'},
  {cuid: '0645', carrier:9350, clientName: 'Mendo Upton Regional School District', createdDate:'06-Nov-22 15:00:00', createdBy:'Kundan', updatedBy:'Devendra', updatedDate:'16-May-21 15:00:00'}
];

@Component({
  selector: 'app-master-data-management',
  templateUrl: './master-data-management.component.html',
  styleUrls: ['./master-data-management.component.scss']
})
export class MasterDataManagementComponent implements OnInit {

  displayedColumns: string[] = ['cuid', 'carrier', 'clientName', 'createdDate', 'createdBy', 'updatedBy', 'updatedDate', 'action'];
  selected = '1';
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  @ViewChild(MatSort) sort:any= MatSort;
  @ViewChild('filter',  {static: true}) filter:any= ElementRef;

  constructor(public dialog: MatDialog) {}

  ngOnInit():void{

  }
  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }
  // openDialog(action,obj) {
  //   obj.action = action;
  //   const dialogRef = this.dialog.open(DialogBoxComponent, {
  //     width: '250px',
  //     data:obj
  //   });

  //   dialogRef.afterClosed().subscribe(result => {
  //     if(result.event == 'Add'){
  //       this.addRowData(result.data);
  //     }else if(result.event == 'Update'){
  //       this.updateRowData(result.data);
  //     }else if(result.event == 'Delete'){
  //       this.deleteRowData(result.data);
  //     }
  //   });
  // }

  // addRowData(row_obj){
  //   var d = new Date();
  //   this.dataSource.push({
  //     id:d.getTime(),
  //     name:row_obj.name
  //   });
  //   this.table.renderRows();
    
  // }
  // updateRowData(row_obj){
  //   this.dataSource = this.dataSource.filter((value,key)=>{
  //     if(value.id == row_obj.id){
  //       value.name = row_obj.name;
  //     }
  //     return true;
  //   });
  // }

  // deleteRowData(row_obj){
  //   this.dataSource = this.dataSource.filter((value,key)=>{
  //     return value.id != row_obj.id;
  //   });
  // }

  applyFilter(filterValue: any) {
    this.dataSource.filter = filterValue.target.value.trim().toLowerCase();
    // console.log(this.dataSource.filter);
    // if (this.dataSource.paginator) {
    //   this.dataSource.paginator.firstPage();
    // }
  }

}
