import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  accountStatus = "InActive";


  constructor(public http : HttpClient) {
    console.log("Service Instance Created");
   }

  
  
   modifyStatus()
   {
     this.accountStatus=(this.accountStatus=="InActive") ? "Active":"InActive";
   }
   
   
   getWeatherReport(city : string)
   {
     return this.http.get<any>("http://api.openweathermap.org/data/2.5/weather?q=" +city+ "&appid=3a3eb62e70b9745f96cb7c04245a9cb8");
   }
   


   getNews(newsCat : string)
    {
     console.log(newsCat);
     if(newsCat=="all"){
     return this.http.get<any>("https://newsapi.org/v2/top-headlines?country=in&apiKey=408b4153b994422d8638da72f2d3ac5b");
     }
     else
     {
      return this.http.get<any>("https://newsapi.org/v2/top-headlines?country=in&category="+newsCat+"&apiKey=408b4153b994422d8638da72f2d3ac5b");

     }
   }
  
}
