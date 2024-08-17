import { Component, Input } from '@angular/core';
import { Food } from '../shared/models/Foods';
import { FoodService } from '../services/food/food.service'
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from '../services/cart/cart.service';

@Component({
  selector: 'app-food',
  templateUrl: './food.component.html',
  styleUrl: './food.component.css'
})
export class FoodComponent {

  food!: Food;
  

  constructor(private foodService: FoodService,
    private route: ActivatedRoute,
    private cartService: CartService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      if (params["id"]) {
        const id = +params['id'];
        this.food = this.foodService.getFoodById(id);
      }
       
      console.log(`Food id is ${params["id"]}`);
    })
  }

  addToCart() {
    this.cartService.addToCart(this.food);
    this.router.navigateByUrl('/cart-page');
  }
}
