import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { APIService } from 'src/app/Services/api.service';

@Component({
  selector: 'app-summoner-card',
  templateUrl: './summoner-card.component.html',
  styleUrls: ['./summoner-card.component.css']
})
export class SummonerCardComponent implements OnInit {
  @Input() searchedSummoner: any;

  sumonnerId:string;
  sumonnerName:string;
  summonerTier:string;
  summonerRank:string;
  summonerIconId:number;
  summonerIcon:string;
  summonerLP:number;
  summonerLvl:number

  constructor(private API: APIService) { }

  ngOnInit() {

  }

  ngOnChanges(changes: SimpleChanges): void {
    this.putDataInCard();
  } 

  putDataInCard(){
    this.summonerLvl = this.searchedSummoner.summonerLevel;
    this.sumonnerName = this.searchedSummoner.name 
    this.summonerIconId = this.searchedSummoner.profileIconId;
    this.summonerIcon = (  "https://ddragon.leagueoflegends.com/cdn/10.18.1/img/profileicon/"+  this.summonerIconId + ".png")
  
    if(this.summonerLvl>30){
    this.API.getSummonerCreds(this.searchedSummoner.id).subscribe(
      Response =>{this.fillSummonerStatistics(Response[0])})
    } else{
      this.summonerTier="UNRANKED";
      this.summonerRank="";
      this.summonerLP = 0;
    }
    
}

  fillSummonerStatistics(summonerStatistics){
    console.log(this.searchedSummoner.summonerLevel)
    
    if(this.searchedSummoner.summonerLevel>30){
    this.summonerTier = summonerStatistics.tier 
    this.summonerRank = summonerStatistics.rank 
    this.summonerLP = summonerStatistics.leaguePoints
    }
  }
 

}
