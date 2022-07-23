import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CibilServiceService } from 'app/module/shared/cibil-service.service';

@Component({
  selector: 'app-cibilscore',
  templateUrl: './cibilscore.component.html',
  styleUrls: ['./cibilscore.component.css']
})
export class CibilscoreComponent implements OnInit {

 
  constructor(public cs:CibilServiceService,private fb:FormBuilder,private r:ActivatedRoute) { }

  cibil:any;
  
  ngOnInit(): void {

  }
  checkCibilhidden:boolean=false;
  cibilform=this.fb.group({
    cibilId:[''],
    cibilStatus:[''],
    cibilScore:[''],
    cibilRemark:[''],
    enquiryform:this.fb.group({
      customerId:[''],
      title:[''],
      fullName:[''],
      gender:[''],
      mobileNo:[''],
      email:[''],
      pancardNo:[''],
      loanAmount:['']

    })

  })
  dataget()
  {
    this.cs.postData(this.cibilform.value).subscribe();
    window.location.reload();
  }

  addcibil()
  {
    this.checkCibilhidden=true;
     this.cs.getcibil().subscribe(data=>
      {
        this.cibil=data;
      })
  
  }


}
