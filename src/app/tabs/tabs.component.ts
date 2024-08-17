import { Component, OnInit, Input } from '@angular/core';
import { FoodService } from '../services/food/food.service'
import { Food } from '../shared/models/Foods';
import { ActivatedRoute, Router } from '@angular/router'
import { Tab } from '../shared/models/Tabs'


@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrl: './tabs.component.css'
})
export class TabsComponent implements OnInit {

  @Input()
  listOfTabsPerFood?: string[];

  listOfTabs: Tab[] = [];

  constructor(private foodService: FoodService) { };

  ngOnInit(): void {
    if (!this.listOfTabsPerFood) {
    this.listOfTabs = this.foodService.getAllTabs();
    }
  }
}
