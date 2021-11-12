import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  msg : string;

  constructor(public userSer : UsersService) { }

  ngOnInit(): void {
  }

  doRegistration(form:NgForm)
  {
    console.log("User Registered");

    console.log(form.value);

    this.userSer.userRegistration(form.value).subscribe((data:string)=>{

      console.log(data);

      this.msg = data;

      form.reset();

    }, (error:any)=>{

        console.log(error);

        this.msg = "Something Went Wrong";

    });

    
  }

}
