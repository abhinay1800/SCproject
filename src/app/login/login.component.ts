import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  msg :string;
  constructor(public userSer : UsersService , public myRouter : Router) { }

  ngOnInit(): void {
  }

  doLogin(form:NgForm){
    
    console.log(form.value);

    this.userSer.userLogin(form.value).subscribe((data: any[] )=>{
      
      //this.msg = data;
      
      console.log(data);

      if(data.length==0)
      {
        this.msg = "Invalid Login";
      }
      else{

        localStorage.setItem("loggeduser",data[0]._id);  //(name,data)

        this.myRouter.navigateByUrl("/loggedin");
      }
      
   
    },(error : any)=>{
     
      console.log(error);
      
      this.msg = "Something went wrong";
    });

  }
}
