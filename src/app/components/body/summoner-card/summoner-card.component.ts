import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { APIService } from 'src/app/Services/api.service';

@Component({
  selector: 'app-summoner-card',
  templateUrl: './summoner-card.component.html',
  styleUrls: ['./summoner-card.component.css']
})
export class SummonerCardComponent implements OnInit {
  @Input() searchedSummonerId: any;

  sumonnerId:string;
  sumonnerName:string;
  summonerTier:string;
  summonerRank:string;
  summonerIconId:number;
  summonerIcon:string;
  summonerLP:number;
  constructor(private API: APIService) { }

  ngOnInit() {

  }

  ngOnChanges(changes: SimpleChanges): void {
    this.putDataInCard();
  }

  putDataInCard(){
    this.API.getSummonerCreds(this.searchedSummonerId.id).subscribe(
      Response =>{
        this.fillSummonerStatistics(Response[0])
      }
    )
  }

  fillSummonerStatistics(summonerStatistics){
    console.log(summonerStatistics)
    this.sumonnerName = summonerStatistics.summonerName 
    this.summonerTier = summonerStatistics.tier 
    this.summonerRank = summonerStatistics.rank 
    this.summonerLP = summonerStatistics.leaguePoints
    this.summonerIconId = this.searchedSummonerId.profileIconId;

    this.summonerIcon = (  "https://ddragon.leagueoflegends.com/cdn/10.18.1/img/profileicon/"+  this.summonerIconId + ".png")

    console.log(summonerStatistics.profileIconId)
  }
 

}
