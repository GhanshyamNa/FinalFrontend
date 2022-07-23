import { Component, OnInit } from '@angular/core';
import { Customer } from 'app/model/customer';
import { CommonServiceService } from 'app/module/shared/common-service.service';

@Component({
  selector: 'app-customerregistration',
  templateUrl: './customerregistration.component.html',
  styleUrls: ['./customerregistration.component.css']
})
export class CustomerregistrationComponent implements OnInit {

  constructor(public cs:CommonServiceService) { }
  std:Customer[];
  ngOnInit(): void {
    this.cs.getedata().subscribe((data:Customer[])=>{
      this.std=data;
      
    })
  }
  
}
