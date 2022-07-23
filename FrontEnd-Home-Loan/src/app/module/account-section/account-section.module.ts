import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LedgerFormComponent } from './ledger-form/ledger-form.component';
import { LedgerFormListComponent } from './ledger-form-list/ledger-form-list.component';
import { LoanApprovedListComponent } from './loan-approved-list/loan-approved-list.component';
import { LoanDisburseComponent } from './loan-disburse/loan-disburse.component';
import { RouterModule, Routes } from '@angular/router';

const account:Routes = [

  { path: 'ledgerform', component: LedgerFormComponent },
  { path: 'ledgerformlist', component: LedgerFormListComponent},
  { path: 'loanapprovelist', component: LoanApprovedListComponent},
  { path: 'loandisburse', component: LoanDisburseComponent},

]

@NgModule({
  declarations: [LedgerFormComponent, LedgerFormListComponent, LoanApprovedListComponent, LoanDisburseComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(account)
  ]
})
export class AccountSectionModule { }
