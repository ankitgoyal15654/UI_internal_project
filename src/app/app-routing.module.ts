import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RulesCreationComponent } from './rules-creation/rules-creation.component';
import { ReportsComponent } from './reports/reports.component';
import { MasterDataManagementComponent } from './master-data-management/master-data-management.component';
import { LoginComponent } from './login/login.component';
import { RouteGuardService } from './services/route-guard.service';


const routes: Routes = [
  { path: '', component: LoginComponent,  pathMatch: 'full' },
  { path: 'home', component: HomeComponent, canActivate: [RouteGuardService]  },
  { path: 'rule-creation', component: RulesCreationComponent, canActivate: [RouteGuardService] },
  { path: 'reports', component: ReportsComponent, canActivate: [RouteGuardService] },
  { path: 'master-data-management', component: MasterDataManagementComponent, canActivate: [RouteGuardService] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
