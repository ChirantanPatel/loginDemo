import { CommonComponent } from './common/common.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule, CanActivate } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TableListComponent } from './table-list/table-list.component';
import { InputFormComponent } from './input-form/input-form.component';
import { AppNavComponent } from './app-nav/app-nav.component';
import { AppTableComponent } from './app-table/app-table.component';
import { MaterialFormComponent } from './material-form/material-form.component';



const appRoutes: Routes = [
    { path: "", redirectTo: "login", pathMatch: "full" },
    { path: 'login', component: LoginComponent },

    {
        path: '', component: CommonComponent, children: [
            { path: "", redirectTo: "tablelist", pathMatch: "full" },
            { path: 'home', component: DashboardComponent },
            { path: 'tablelist', component: TableListComponent },
            { path: 'inputform', component: InputFormComponent },
        ]
    },
    {
        path: "material", component: AppNavComponent, children: [
            { path: "", redirectTo: "table", pathMatch: "full" },
            { path: "table", component: AppTableComponent },
            { path: "form", component: MaterialFormComponent }
        ]
    },
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    {
        path: '**',
        redirectTo: 'login'
    }];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes, {useHash: true})
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule { }

