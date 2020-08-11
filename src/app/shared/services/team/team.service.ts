import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class TeamService {
  constructor(private httpClient: HttpClient) {
  }

  getTeams(){
    return this.httpClient.get<any>("assets/data.json");
  }
}
