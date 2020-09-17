import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { DialogPopUpComponent } from './dialog-pop-up/dialog-pop-up.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'personalInfo';
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;

  lastName: string;
  firstName: string;
  submitted = false;
  // tslint:disable-next-line:variable-name
  constructor(private formBuilder: FormBuilder,
              public dialog: MatDialog) {}
  // tslint:disable-next-line:typedef
  ngOnInit() {
    this.firstFormGroup = this.formBuilder.group({
      lNameCtrl: ['', Validators.required],
      fNameCtrl: [''],
      titleCtrl: ['']
    });
    this.secondFormGroup = this.formBuilder.group({
      countryCtrl: ['', Validators.required],
      cityCtrl : [''],
      streetCtrl: ['']
    });
    this.thirdFormGroup = this.formBuilder.group({
      emailCtrl: ['', Validators.required, Validators.email],
      phoneCtrl : ['', Validators.maxLength(10)],

    });
  }

  // tslint:disable-next-line:typedef
  get firstTemplate() {
    return this.firstFormGroup.controls;
  }

  // tslint:disable-next-line:typedef
  get secondtemplate() {
    return this.secondFormGroup.controls;
  }

  // tslint:disable-next-line:typedef
  get thirdtemplate() {
    return this.thirdFormGroup.controls;
  }

  // tslint:disable-next-line:typedef
  onSubmit(): void {
    /*if (this.thirdFormGroup.invalid || this.secondFormGroup.invalid || this.thirdFormGroup.invalid){
      return;
    }*/
    this.submitted = true;
    const dialogRef = this.dialog.open(DialogPopUpComponent, {
      width: '250px',
      data: {lastName: this.firstFormGroup.get('lNameCtrl').value.lNameCtrl, firstName: this.firstFormGroup.get('fNameCtrl').value}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}

export interface DialogData {
  lastName: string;
  firstName: string;
}

// Non duplicated msg
export class ValidationMsg{

  private errorMsg = {
    'last-Name-Required-Msg': 'Last name is a required field',
    'Country-Required-Msg' : 'Country is a required fied',
    'email-required-Msg' : 'email is a required field',
  };

public getvalidation(validationId: string): string{
  return this.errorMsg[validationId];

}
}
