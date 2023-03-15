import { Injectable } from '@angular/core';

@Injectable()
export class NameService {
  private names: string[] = []
  constructor() { }

  addName(name: string) {
    this.names.push(name)
  }

  getAllNames(): string[] {
    return this.names
  }
}
