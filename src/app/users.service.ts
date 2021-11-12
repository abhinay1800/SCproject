import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(public http : HttpClient) { }

  userRegistration(data: any)
  {
    return this.http.post<string>("http://localhost:3000/register",data);
  }

  userLogin(data : any){

    return this.http.post<any[]>("http://localhost:3000/login", data);  // any[] means inside the array any kind of data can be stored
  }

  isLoggedIn()
  {
    return !!localStorage.getItem("loggeduser"); //if there anything in loggeduser then it will give tru otherwise it will return false
  }

  getAllUsers()
  {
    return this.http.get<any[]>("http://localhost:3000/allusers");
  }

  usernameAvailibility(uname:string)
  {
    return this.http.get<any[]>("http://localhost:3000/usernamecheck/"+uname);
  }

  getSingleUserData(userId:string)
  {
    
    return this.http.get<any[]>("http://localhost:3000/getuser/"+userId);

  }

  editSingleUserData(data:any)
  {
    return this.http.put<string>("http://localhost:3000/updateuser", data);
  }

  deleteUserData(userId:number)
  {
    return this.http.delete<string>("http://localhost:3000/deleteuser/"+userId);
  }

  searchUsers(search:string)
  {
    return this.http.get<any[]>("http://localhost:3000/search/"+search);
  }

  searchCourier(search:string){
    return this.http.get<any[]>("http://localhost:3000/searchCourier/"+search);
  }
}

