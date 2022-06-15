import { Injectable } from '@angular/core';
import { HttpClient  } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  url='http://localhost:3000/Resto/';
  firbaseurl= 'https://angular-crud-cdc07-default-rtdb.firebaseio.com/RestorantList.json/'
  private isLoading:BehaviorSubject<boolean>=new BehaviorSubject<boolean>(false);
  private restorants:BehaviorSubject<any>=new BehaviorSubject<any>(null);
 constructor( private http:HttpClient) {} 
  getApi(id?:any){
    if(id){
     return this.http.get(`${this.url}`+id)
   }else{
    return this.http.get(this.firbaseurl)
  } }
  postApi(data:any){
    // return this.http.post(this.url,data)
    return this.http.post(this.firbaseurl,data)
  }
  deleteApi(id:any){
    return this.http.delete<any>(`${this.url}`+id)
  }
  updateApi(data:any,id:any){
    return this.http.put<any>(`${this.url}`+id,data)
  }
  public get isloading$():Observable<boolean>{
    return this.isLoading.asObservable();
  }
}

