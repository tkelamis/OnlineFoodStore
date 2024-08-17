import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'
import { FoodService } from '../services/food/food.service'

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent implements OnInit {
  searchTerm: String = "";

  constructor(private route: ActivatedRoute, private router: Router, private foodService: FoodService ) { }

  ngOnInit(): void {

    this.route.params.subscribe(params => {
      if (params["searchTerm"]) {
        this.searchTerm = params["searchTerm"];
      }
    })
  }

  search(): void {
    if (this.searchTerm) {
      this.router.navigateByUrl('/search/' + this.searchTerm);
    }
    else {
      this.router.navigateByUrl('');
    }
  }
}
