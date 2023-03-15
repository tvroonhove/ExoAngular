import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-exo-io-form',
  templateUrl: './exo-io-form.component.html',
  styleUrls: ['./exo-io-form.component.scss']
})
export class ExoIoFormComponent {
  name = ''

  @Output('add')
  eventEmitter = new EventEmitter<string>()

  onClick() {
    this.eventEmitter.emit(this.name)
    this.name = ''
  }
}
