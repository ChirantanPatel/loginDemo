import { AppRoutingModule } from './app.routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from "@angular/flex-layout";


import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { CommonComponent } from './common/common.component';
import { MenuModule } from 'primeng/menu';
import { MenubarModule } from 'primeng/menubar';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { SidebarModule } from 'primeng/sidebar';
import { ListboxModule } from 'primeng/listbox';
import { RadioButtonModule } from 'primeng/radiobutton';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { DropdownModule } from 'primeng/dropdown';
import { CalendarModule } from 'primeng/calendar';
import { PasswordModule } from 'primeng/Password';
import { SplitButtonModule } from 'primeng/SplitButton';
import { DialogModule, } from 'primeng/Dialog';
import { PanelModule, } from 'primeng/Panel';
import { DataGridModule, } from 'primeng/DataGrid';
import { CarouselModule, } from 'primeng/Carousel';
import { OrderListModule, } from 'primeng/OrderList';
import { PickListModule, } from 'primeng/PickList';
import { PanelMenuModule, } from 'primeng/PanelMenu'
import { TreeModule, } from 'primeng/Tree'
import { TabViewModule, } from 'primeng/TabView'
import { CodeHighlighterModule } from 'primeng/CodeHighlighter'
import { AutoCompleteModule } from 'primeng/autocomplete';
import { CarserviceService } from './carservice.service';
import { TableListComponent } from './table-list/table-list.component';
import { InputFormComponent } from './input-form/input-form.component';
import { CountryService } from './country.service';
import { AppNavComponent } from './app-nav/app-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatInputModule, MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule, MatTableModule, MatPaginatorModule, MatSortModule } from '@angular/material';
import { AppTableComponent } from './app-table/app-table.component';


import { CdkTableModule } from "@angular/cdk/table";
import { MaterialFormComponent } from './material-form/material-form.component';
import { CardModule } from 'primeng/card';
import { MessagesModule } from 'primeng/messages';
import { MessageModule } from 'primeng/message';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';



@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LoginComponent,
    SideBarComponent,
    CommonComponent,
    TableListComponent,
    InputFormComponent,
    AppNavComponent,
    AppTableComponent,
    MaterialFormComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    HttpClientModule,
    AppRoutingModule,
    MenuModule,
    MenubarModule,
    InputTextModule,
    ButtonModule,
    TableModule,
    SidebarModule,
    ListboxModule,
    FormsModule,
    InputTextModule,
    InputTextareaModule,
    CalendarModule,
    AutoCompleteModule,
    SplitButtonModule,
    ButtonModule,
    PasswordModule,
    DropdownModule,
    ListboxModule,
    RadioButtonModule,
    DialogModule,
    PanelModule,
    TableModule,
    DataGridModule,
    CarouselModule,
    OrderListModule,
    PickListModule,
    MenuModule,
    PanelMenuModule,
    TreeModule,
    TabViewModule,
    CodeHighlighterModule,
    LayoutModule,
    MatToolbarModule,
    MatInputModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    CdkTableModule,
    CardModule,
    FlexLayoutModule,
    MessagesModule,
    MessageModule,
    ToastModule

  ],
  providers: [CarserviceService, CountryService, MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
