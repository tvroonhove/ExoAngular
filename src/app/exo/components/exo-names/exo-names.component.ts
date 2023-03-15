import { Component } from '@angular/core';

@Component({
  selector: 'app-exo-input-output',
  templateUrl: './exo-names.component.html',
  styleUrls: ['./exo-names.component.scss']
})
export class ExoNamesComponent {
  names: string[] = []

  onAdd(name: string) {
    this.names.push(name)
  }
}
