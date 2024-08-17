import { Component, OnInit } from '@angular/core';
import { FoodService } from '../services/food/food.service'
import { Food } from '../shared/models/Foods';
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  foods: Food[] = [];

  constructor(private foodService: FoodService, private route: ActivatedRoute){ }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      if (params["searchTerm"]) {
        this.foods = this.foodService.getFoodsBySearch(params["searchTerm"]);
      }
      else if (params["tag"]){
        this.foods = this.foodService.getFoodsByTag(params["tag"]);

        console.log(`yes,the tag is ${params["tag"]}`);
      }
      else
        this.foods = this.foodService.getAll();
    })
  }
}
