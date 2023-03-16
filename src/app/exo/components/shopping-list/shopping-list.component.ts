import {Component} from '@angular/core';
import {ShoppingListService} from "../../../services/shopping-list.service";
import {Item} from "../../../models/item";

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent {
  items : Item[] = this.service.items
  name = ''
  price = 0
  promo = false
  totalPrice : number = 0

  constructor(
    private readonly service: ShoppingListService
  ) {}

  private update() {
    this.items = this.service.items
    this.totalPrice = this.service.totalCartPrice
  }

  addItem() {
    this.service.addItem(this.name,this.price,this.promo)
    this.update()
    this.name = ''
    this.price = 0
    this.promo = false
  }

  addOne(item: Item) {
    item.addOne()
    this.update()
  }

  removeOne(item: Item) {
    this.service.removeOne(item)
    this.update()
  }

  deleteItem(item: Item) {
    this.service.deleteItem(item)
    this.update()
  }
}
