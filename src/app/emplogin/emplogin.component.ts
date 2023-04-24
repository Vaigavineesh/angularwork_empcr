import { Component,OnInit } from '@angular/core';
import { FormGroup,FormControl, Validators } from '@angular/Forms';
import {Router} from '@angular/router'
@Component({
  selector: 'app-emplogin',
  templateUrl: './emplogin.component.html',
  styleUrls: ['./emplogin.component.css']
})
export class EmploginComponent implements OnInit{
  
  eloginform=new FormGroup(
    {
      username:new FormControl("",Validators.required),
      password:new FormControl("",Validators.required),
    }
  )
  
  
  constructor(private router:Router)
  {

  }
  ngOnInit()
  {
    
  }
  authenticate()
  {
    console.log(this.eloginform.value)
    
  }
  get username()
  {
    return this.eloginform.get("username")
  }
  get password()
  {
    return this.eloginform.get("password")
  }
  LOGIN()
  {
    console.log(this.eloginform.value)
    this.router.navigateByUrl("index")
  }

}
