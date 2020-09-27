import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HousingService } from 'src/app/services/housing.service';
import { IProperty } from '../IProperty.interface';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css'],
})
export class PropertyListComponent implements OnInit {
  properties: Array<IProperty>;
  SellRent = 1;
  constructor(private route: ActivatedRoute, private housingService:HousingService) {}

  ngOnInit(): void {
    if(this.route.snapshot.url.toString()){
      this.SellRent = 2;
    }
    this.housingService.getAllProperties(this.SellRent).subscribe(
        data=>{
          this.properties = data
        },
        error=> {
          console.log(error)
        }
    )
    // this.http.get('data/properties.json').subscribe(
    //   data=>{
    //     this.properties = data
    //   }
    // )
  }
}
