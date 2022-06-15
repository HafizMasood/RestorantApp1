import { isNgTemplate } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../services/api.service';
import { RestrantModale } from './Resto.modal';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  modalTitle:string='Edit Restrant';
  modalBtn:string='update';
  addbtn:boolean=false;
  updatebtn:boolean=false
  restorantlist:any;
  RestorantModal:RestrantModale=new RestrantModale
  Restorantform!:FormGroup;
  constructor( private servic:ApiService, private router:Router) { 
  }
   
  ngOnInit(): void {
    this.Restorantform=new FormGroup({
      name:new FormControl(''),
      email:new FormControl(''),
      contact:new FormControl(''),
      address:new FormControl(''),
      service:new FormControl('')
     })

    this.getList()
  }

  addRestorantRecord(){
    this.RestorantModal.name=this.Restorantform.value.name;
    this.RestorantModal.email=this.Restorantform.value.email;
    this.RestorantModal.contact=this.Restorantform.value.contact;
    this.RestorantModal.address=this.Restorantform.value.address;
    this.RestorantModal.service=this.Restorantform.value.service;

    this.servic.postApi(this.RestorantModal).subscribe((res)=>{
    alert("@Record has been added Successfully@")
    console.log("result",res)
    this.Restorantform.reset()
    this.getList();
    })
    
  }
  getList(){
    this.servic.getApi().subscribe((res)=>{
      this.restorantlist=res;
      console.log(this.restorantlist)
    })
  }
  onEdit(data:any){
    this.Restorantform.patchValue(data)
    // this.RestorantModal.id=data.id;
   this.addbtn=false
     this.updatebtn=true
  }


  updateRestorant(){

    this.RestorantModal.name=this.Restorantform.value.name;
    this.RestorantModal.email=this.Restorantform.value.email;
    this.RestorantModal.contact=this.Restorantform.value.contact;
    this.RestorantModal.address=this.Restorantform.value.address;
    this.RestorantModal.service=this.Restorantform.value.service;

 
  //  this.servic.updateApi(this.RestorantModal,this.RestorantModal.id).subscribe((res)=>{
  //    console.log(res)
  //   alert("@This Record has been updated Successfully@")
  //   this.Restorantform.reset();
  //   this.getList();
  //  })
  // }
  // deleteItem(data:any){
  //  this.servic.deleteApi(data.id).subscribe((res:any)=>{
  //   alert("@Are you sure to delete this record@")
  //   this.getList()
  //  })
  

  }

  modalBtnChange(){
     this.modalTitle='Add Restorant'
     this.modalBtn='Save Record'
     this.addbtn=true
     this.updatebtn=false
}
close(){
  this.Restorantform.reset()
}
gotoDetails(){
  this.router.navigate(['foodDetails'])
}

}
