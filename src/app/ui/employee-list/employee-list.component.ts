import {ChangeDetectionStrategy, Component, ViewEncapsulation} from '@angular/core';
import {Observable} from 'rxjs';
import {EmployeeService} from '../../services/employee.service';
import {PersonModel} from '../../model/person.model';

@Component({
  selector: 'employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['employee-list.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class EmployeeListComponent {

  constructor(private _employeeService: EmployeeService) {
  }

  data$: Observable<PersonModel[] | null> = this._employeeService.getAll();

  remove(id: string) {
    this._employeeService.delete(id).subscribe(_ => {
      alert(`User was successfully removed`)
    });
  }

  get() {
    this.data$.subscribe()
  }
}
