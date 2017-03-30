import { Injectable } from '@angular/core';

@Injectable()
export class WidgetStorageService {

  private _storage = {};

  public set(key, value) {
    this._storage[key] = value;
  }

  public replace(value) {
    this._storage = value;
  }

  public assign(value) {
    Object.assign( this._storage, value );
  }

  public get() {
    return this._storage;
  }

  public getByKey(value) {
    return this._storage[value] || null;
  }

  constructor() {
    console.log('StorageInit')
  }

}
