import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable, observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class APIService {

  key:string="?api_key=RGAPI-ac80c7ea-bba5-42a9-a238-5142fefef24a"

  constructor(private http: HttpClient) { }

  getChampsId(){
    return this.http.get<any[]>('https://cors-anywhere.herokuapp.com/https://euw1.api.riotgames.com/lol/platform/v3/champion-rotations'+ this.key);
  }

  getSummoner(summonerName:string){
    return this.http.get<any>('https://cors-anywhere.herokuapp.com/https://euw1.api.riotgames.com/lol/summoner/v4/summoners/by-name/'+ summonerName + this.key);

  }
}
