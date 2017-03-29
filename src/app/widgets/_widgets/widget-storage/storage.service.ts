import { Injectable } from '@angular/core';

@Injectable()
export class StorageService {

  _id = 0;
  constructor() {
    this._id++;
    console.log(this._id);
  }

}
