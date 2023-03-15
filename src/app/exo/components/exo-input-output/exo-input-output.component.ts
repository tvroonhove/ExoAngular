import { Component } from '@angular/core';

@Component({
  selector: 'app-exo-input-output',
  templateUrl: './exo-input-output.component.html',
  styleUrls: ['./exo-input-output.component.scss']
})
export class ExoInputOutputComponent {
  names: Array<string> = []

  onAdd(name: string) {
    this.names.push(name)
  }
}
