import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-edituser',
  templateUrl: './edituser.component.html',
  styleUrls: ['./edituser.component.css']
})
export class EdituserComponent implements OnInit {

  userData : {_id : number, uname:string, upassword:string, uemail:string, uphone:string , ucode:string , ustatus:string};
 
  msg :string;

  usernameAvail = false;
 
  constructor(public userSer : UsersService, public activeRoute : ActivatedRoute) { }

  ngOnInit(): void {

    this.activeRoute.params.subscribe((param:Params)=>{

      console.log(param);

      if(param.userid)
      {
        this.userSer.getSingleUserData(param.userid).subscribe((data:any[])=>{

          console.log(data);

          this.userData = data[0];
        
        },(error:any)=>{
          
          console.log(error);

        });
      }

    });
  }

  editUser(form:NgForm)
  {
    form.value._id = this.userData._id;
    
    this.userSer.editSingleUserData(form.value).subscribe((data:string)=>{

      console.log(data);

      this.msg = data;
    },(error:any)=>{
      
      console.log(error);

      this.msg = "Something went wrong";
    });
  }

  }



//   usernameCheck(uname:string)
//   {
//     this.userSer.usernameAvailibility(uname).subscribe((data:any[])=>{

//       console.log(data);

//       if(data.length==0)
//       {
//         this.msg = "Congrats Username Availible for You!!";

//         this.usernameAvail = true;
//       }
//       else {
//         this.msg = "Username Already Taken";
//         this.usernameAvail = false;
      

//     }, (error:any)=>{

//       console.log(error);

//     });
//   }
// }
