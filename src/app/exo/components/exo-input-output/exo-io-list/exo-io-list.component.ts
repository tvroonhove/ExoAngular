import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-exo-io-list',
  templateUrl: './exo-io-list.component.html',
  styleUrls: ['./exo-io-list.component.scss']
})
export class ExoIoListComponent {
  @Input()
  name!: string
}
