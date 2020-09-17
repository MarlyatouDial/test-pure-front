import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { DialogData } from '../app.component';

@Component({
  selector: 'app-dialog-pop-up',
  templateUrl: './dialog-pop-up.component.html',
  styleUrls: ['./dialog-pop-up.component.scss']
})
export class DialogPopUpComponent {

  constructor(
    public dialogRef: MatDialogRef<DialogPopUpComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

}

