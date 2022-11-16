import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {EmployeeModel} from "../../model/employee.model";

@Component({
  selector: 'app-employees-faces',
  templateUrl: './employees-faces.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EmployeesFacesComponent {
  constructor(private _client: HttpClient) {}
  data$: Observable<EmployeeModel[] | null> = this._client.get<EmployeeModel[]>( 'assets/data/employees.json');
}


