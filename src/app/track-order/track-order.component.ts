import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-track-order',
  templateUrl: './track-order.component.html',
  styleUrls: ['./track-order.component.css']
})
export class TrackOrderComponent implements OnInit {

  users : any[] = [];
  
  msg : string;
  constructor(public userSer: UsersService) { }

  ngOnInit(): void {

    // this.userSer.getAllUsers().subscribe((data:any[])=>{    ///change get all users

    //   console.log(data);
    //   this.users = data;
    // },(error:any)=>{

    //   console.log(error);
    //   this.msg = "Something went wrong!";
    // });
  }

  doSearch(search:string)
  {
    this.userSer.searchCourier(search).subscribe((data:any[])=>{
    
      console.log(data);

      this.users = data;
          
    },(error:any)=>{

      console.log(error);
    });
  }

}
