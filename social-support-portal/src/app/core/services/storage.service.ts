import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  save(data: any) {
    localStorage.setItem('social-support-form', JSON.stringify(data));
    
  }

  load() {
    const data = localStorage.getItem('social-support-form');
    return data ? JSON.parse(data) : null;
  }

  clear() {
    localStorage.removeItem('social-support-form');
  }

}