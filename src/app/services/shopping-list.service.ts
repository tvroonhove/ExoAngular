import { Injectable } from '@angular/core';
import {Item} from "../models/item";

@Injectable()
export class ShoppingListService {
  private _items: Item[] = [
    new Item('Pomme',0.89, false)
  ]
  constructor() { }

  addItem(name: string, price: number, promo: boolean) {
    this._items.push( new Item(name,price,promo) )
  }

  deleteItem(item: Item) {
    const index = this._items.findIndex(i => i === item)
    if(index != -1)
      this._items.splice(index, 1)
  }

  removeOne(item: Item) {
    if(!item.removeOne())
      this.deleteItem(item)
  }

  get items() : Item[] {
    return this._items
  }

  get totalCartPrice() : number {
    return this._items.reduce((sum,current) => sum + current.totalPrice, 0)
  }
}
