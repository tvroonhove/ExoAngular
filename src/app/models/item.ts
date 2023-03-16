export class Item {
  private _quantity = 1

  constructor(
    private _name: string,
    private _price: number,
    private _promo: boolean
  ) {
  }

  get name(): string {
    return this._name
  }

  get price(): number {
    return this._price
  }

  get quantity(): number {
    return this._quantity
  }

  get promo(): boolean {
    return this._promo
  }

  get totalPrice(): number {
    return this._price * this._quantity
  }

  addOne() {
    this._quantity++
  }

  removeOne() : number {
    if(this._quantity > 0)
      return --this._quantity
    else return 0
  }
}
