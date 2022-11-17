import {ChangeDetectionStrategy, Component, ViewEncapsulation} from '@angular/core';
import {Observable} from 'rxjs';
import {ProjectService} from "../../services/project.service";
import {ProjectModel} from "../../model/project.model";

@Component({
  selector: 'app-employee-project',
  templateUrl: './employee-project.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EmployeeProjectComponent {
  constructor(private _projectService: ProjectService) {
  }

  data$: Observable<ProjectModel[] | null> = this._projectService.getAll();
}
