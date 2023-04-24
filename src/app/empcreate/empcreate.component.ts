import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/Forms'

@Component({
  selector: 'app-empcreate',
  templateUrl: './empcreate.component.html',
  styleUrls: ['./empcreate.component.css']
})
export class EmpcreateComponent implements OnInit {

  empForm = new FormGroup(
    {
      name: new FormControl(),
      email: new FormControl(),
      department: new FormControl(),
      phone: new FormControl(),
      salary: new FormControl()
    }

  )

  constructor() {

  }
  ngOnInit() {

  }
  // get name() {
  //   return this.empForm.get("name")
  // }
  // get email() {
  //   return this.empForm.get("email")
  // }
  // get phone() {
  //   return this.empForm.get("phone")
  // }
  // get department() {
  //   return this.empForm.get("department")
  // }
  // get salary() {
  //   return this.empForm.get("salary")
  // }
  saveEmp() {
    console.log(this.empForm.value)
  }

}
