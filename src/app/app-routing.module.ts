import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RulesCreationComponent } from './rules-creation/rules-creation.component';
import { ReportsComponent } from './reports/reports.component';
import { MasterDataManagementComponent } from './master-data-management/master-data-management.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'rule-creation', component: RulesCreationComponent },
  { path: 'reports', component: ReportsComponent },
  { path: 'master-data-management', component: MasterDataManagementComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
