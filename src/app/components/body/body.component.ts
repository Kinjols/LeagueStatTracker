import { Component, OnInit } from '@angular/core';
import  {APIService} from '../../Services/api.service'

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

  constructor(private API: APIService) { }

  ngOnInit() {
    this.API.getChampsId().subscribe(
      Response => {
        console.log(Response)
      }
    )
    this.API.getSummoner("kinjo").subscribe(
      Response => {
        console.log(Response)
      }
    )
  }

}
