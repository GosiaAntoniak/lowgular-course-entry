import {HttpClientModule} from '@angular/common/http';
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {EmployeeListComponentModule} from "./ui/employee-list/employee-list.component-module";
import {EmployeesFacesComponentModule} from "./ui/employees-faces/employees-faces.component-module";
import {EmployeeServiceModule} from "./services/employee.service-module";
import {EmployeeProjectComponentModule} from "./ui/employee-project/employee-project.component-module";
import {ProjectModelServiceModule} from "./services/project-model.service-module";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    EmployeeServiceModule,
    EmployeeListComponentModule,
    EmployeesFacesComponentModule,
    EmployeeProjectComponentModule,
    ProjectModelServiceModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
}
