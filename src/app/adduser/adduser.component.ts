import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})
export class AdduserComponent implements OnInit {

  msg : string;

  usernameAvail = false; 

  constructor(public userSer : UsersService) { }

  ngOnInit(): void {
  }

  addUsers(form:NgForm)
  {
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

  usernameCheck(uname:string)
  {
    this.userSer.usernameAvailibility(uname).subscribe((data:any[])=>{

      console.log(data);

      if(data.length==0)
      {
        this.msg = "Congrats Username Availible for You!!";

        this.usernameAvail = true;
      }
      else {
        this.msg = "Username Already Taken";
        this.usernameAvail = false;
      }

    }, (error:any)=>{

      console.log(error);

    });
  }

}
