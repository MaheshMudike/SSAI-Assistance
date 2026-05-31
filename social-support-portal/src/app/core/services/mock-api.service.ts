import { Injectable } from '@angular/core';
import { delay, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MockApiService {

  constructor() { }

  submit(data: any) {
    // Mock API call
    console.log('Submitting data:', data);
    return of({ success: true, message: 'Application submitted successfully' }).pipe(delay(500));
  }

}