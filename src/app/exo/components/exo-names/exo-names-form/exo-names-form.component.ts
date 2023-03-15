import {Component, EventEmitter, Output} from '@angular/core';
import {NameService} from "../../../../services/name.service";

@Component({
  selector: 'app-exo-names-form',
  templateUrl: './exo-names-form.component.html',
  styleUrls: ['./exo-names-form.component.scss']
})
export class ExoNamesFormComponent {
  name = ''

  constructor(
    private readonly nameService: NameService
  ) {
  }

  onClick() {
    this.nameService.addName(this.name)
    this.name = ''
  }
}
