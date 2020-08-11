import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ActivityService {
  constructor(private httpClient: HttpClient) {
  }

  getActivity(){
    return this.httpClient.get<any>("assets/data.json");
  }
}
