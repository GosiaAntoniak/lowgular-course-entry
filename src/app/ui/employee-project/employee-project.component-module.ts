import { NgModule } from '@angular/core';
import { EmployeeProjectComponent } from './employee-project.component';
import {CommonModule} from "@angular/common";

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [EmployeeProjectComponent],
  providers: [],
  exports: [EmployeeProjectComponent]
})
export class EmployeeProjectComponentModule {
}
