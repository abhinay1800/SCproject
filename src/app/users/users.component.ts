import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})

export class UsersComponent implements OnInit {

  users : any[] = []; //every data is stored in usermanagment is in users array

  msg : string;
  constructor(public userSer : UsersService) { }

  ngOnInit(): void {

    this.userSer.getAllUsers().subscribe((data:any[])=>{

      console.log(data);
      this.users = data;
    },(error:any)=>{

      console.log(error);
      this.msg = "Something went wrong!";
    });
  }

  deleteUser(userId:number)
  {
    if(confirm("Are you sure want to Delete this Record?"))
    {
      //consol.log("User Daleted with user id "+userId);

      this.userSer.deleteUserData(userId).subscribe((data:string)=>{

        this.msg = data;

        var index = this.users.findIndex((obj)=>{  //this to delete the data of users array in frontend;
          return obj._id == userId;                //----
        });                                        // ----

        this .users.splice(index, 1);              //----
      
      },(error:any)=>{
      
        console.log(error);
        this.msg = "Something Went Wrong";
      
      });
    }
  }

  doSearch(search:string)
  {
    this.userSer.searchUsers(search).subscribe((data:any[])=>{
    
      console.log(data);

      this.users = data;
          
    },(error:any)=>{

      console.log(error);
    });
  }

}
