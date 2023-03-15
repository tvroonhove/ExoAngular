import { Injectable } from '@angular/core';
import {Pizza} from "../models/pizza";

@Injectable()
export class PizzaService {
  private pizzas: Pizza[] = [
    new Pizza(1, 'margherita'),
    new Pizza(2, 'funghi')
  ]
  private currentId = 3

  constructor() { }

  addPizza(name: string) {
    this.pizzas.push(
      new Pizza(this.currentId++, name)
    )
  }

  deletePizza(id: number) {
    const index = this.pizzas.findIndex((pizza) => pizza.id === id)
    if(index != -1)
      this.pizzas.splice(index,1)
  }
}
