import { Component } from '@angular/core';
import {PizzaService} from "../../../services/pizza.service";

@Component({
  selector: 'app-pizza',
  templateUrl: './pizza.component.html',
  styleUrls: ['./pizza.component.scss']
})
export class PizzaComponent {
  readonly pizzas = this.pizzaService.pizzas
  value = ''

  constructor(
    private readonly pizzaService: PizzaService
  ) {}

  addPizza() {
    this.pizzaService.addPizza(this.value)
    this.value = ''
  }

  deletePizza(id: number) {
    this.pizzaService.deletePizza(id)
  }
}
