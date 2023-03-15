import {Component, Input} from '@angular/core';
import {NameService} from "../../../../services/name.service";

@Component({
  selector: 'app-exo-names-list',
  templateUrl: './exo-names-list.component.html',
  styleUrls: ['./exo-names-list.component.scss']
})
export class ExoNamesListComponent {
  names: string[] = this.nameService.getAllNames()

  constructor(
    private readonly nameService: NameService
  ) {
  }
}
