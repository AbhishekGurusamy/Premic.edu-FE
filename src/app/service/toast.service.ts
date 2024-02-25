import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class ToastService {

  constructor(private toast:ToastrService) { }

  success(msg:any, title?:any){
    this.toast.success(msg,title,{
          timeOut: 5000,
          closeButton: true,
          progressBar: true,
          progressAnimation: 'increasing'
        })
  }

  error(msg:any, title?:any){
    this.toast.error(msg,title,{
          timeOut: 5000,
          closeButton: true,
          progressBar: true,
          progressAnimation: 'increasing'
        })
  }

  warning(msg:any, title?:any){
    this.toast.info(msg,title,{
          timeOut: 5000,
          closeButton: true,
          progressBar: true,
          progressAnimation: 'increasing'
        })
  }
}
