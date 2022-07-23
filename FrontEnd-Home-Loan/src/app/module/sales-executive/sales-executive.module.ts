import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerenquiryComponent } from './customerenquiry/customerenquiry.component';
import { EmailsendingComponent } from './emailsending/emailsending.component';
import { CustomerregistrationComponent } from './customerregistration/customerregistration.component';
import { DocumentuploadComponent } from './documentupload/documentupload.component';
import { ApplicantregistrationComponent } from './applicantregistration/applicantregistration.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

const salesexe : Routes = [
  { path: 'appregist', component: ApplicantregistrationComponent },
  { path: 'customerenq', component: CustomerenquiryComponent},
  { path: 'customerregist', component: CustomerregistrationComponent},
  { path: 'documentupload', component: DocumentuploadComponent},
  { path: 'emailsending', component: EmailsendingComponent},
];

@NgModule({
  declarations: [CustomerenquiryComponent, EmailsendingComponent, CustomerregistrationComponent, DocumentuploadComponent, ApplicantregistrationComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(salesexe)
    
  ]
})
export class SalesExecutiveModule { }
