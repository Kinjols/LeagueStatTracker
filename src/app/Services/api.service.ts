import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable, observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class APIService {

  key:string="?api_key=RGAPI-de32cf6f-4291-4795-991a-09f747fb67c5"

  constructor(private http: HttpClient) { }

  getChampsId(){
    return this.http.get<any[]>('https://cors-anywhere.herokuapp.com/https://euw1.api.riotgames.com/lol/platform/v3/champion-rotations'+ this.key);
  }

  getSummonerInfo(summonerName:string){
    return this.http.get<any>('https://cors-anywhere.herokuapp.com/https://euw1.api.riotgames.com/lol/summoner/v4/summoners/by-name/'+ summonerName + this.key);
  }

  getSummonerCreds(summonerId:string){
    return this.http.get<any>('https://cors-anywhere.herokuapp.com/https://euw1.api.riotgames.com/lol/league/v4/entries/by-summoner/'+ summonerId + this.key);
  }
  
}
