import { Component, OnInit } from '@angular/core';
import  {APIService} from '../../Services/api.service'

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {
  summonerId:string;
  isClicked:boolean=false;

  constructor(private API: APIService) { }

  ngOnInit() {
    //test to see if its able to communicate with the api by requesting weekly champions
    this.API.getChampsId().subscribe(
      Response => {
        console.log(Response)
      }
    )
  }

  //
  createSummonerCard(summonerName:string){
   this.API.getSummonerInfo(summonerName).subscribe(
     Response => {
      console.log(Response)
      this.summonerId=Response
       this.giveData(Response.id)
       this.isClicked = true;
     }  
   )   
  }

  giveData(name:string){
    console.log(name)
    this.summonerId=name
  }

}
