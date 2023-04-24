import { Component,OnInit } from '@angular/core';
import {FormGroup,FormControl,Validator, Validators} from '@angular/Forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  regform=new FormGroup(
    {
      username:new FormControl("",Validators.required),
      password:new FormControl("",Validators.required),
      email:new FormControl("",[Validators.required,Validators.email]),
    })
    constructor(private router:Router)
    {

    }
  ngOnInit()
   {
    
  }
  get username()
  {
    return this.regform.get("username")
  }
  get password()
  {
    return this.regform.get("password")
  }
  get email()
  {
    return this.regform.get("email")
  }
  signup()
  {
    console.log(this.regform.value)
    this.router.navigateByUrl("")
  }

}
