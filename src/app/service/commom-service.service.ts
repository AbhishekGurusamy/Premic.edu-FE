import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CommomServiceService {

  url = "http://127.0.0.1:8000"

  constructor(private http:HttpClient) { }

  loginApi(payload:any){
    let api_url = this.url + "/auth/login"
    return this.http.post(api_url,payload)
  }
}
