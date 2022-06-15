import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-food-details',
  templateUrl: './food-details.component.html',
  styleUrls: ['./food-details.component.css']
})
export class FoodDetailsComponent implements OnInit {

  constructor() { }
  foods:any[]=[
    {
      id: 1,
      name: 'Pizza Peressions',
      cookTime: '10-15',
      price: 150,
      favorite: false,
      origine: ['Islamabad','Lahore'],
      star:4.5,
      imageUrl:'/assets/food1.jpg',
      tage: ['fastfood','Pizza','lunch']
     },
     {
      id: 2,
      name: 'Sandvich Burger',
      cookTime: '10-15',
      price: 150,
      favorite: true,
      origine: ['Lahore','Vehari'],
      star:4,
      imageUrl:'/assets/food2.jpg',
      tage: ['fastfood','lunch']
     },
     {
      id: 3,
      name: 'Spicy Food',
      cookTime: '10-15',
      price: 150,
      favorite: false,
      origine: ['Islamabad'],
      star:4.5,
      imageUrl:'/assets/food3.jpg',
      tage: ['lunch']
     },
     {
      id: 4,
      name: 'Vagitable Rools',
      cookTime: '20-15',
      price: 150,
      favorite: true,
      origine: ['Islamabad','burewala'],
      star:4.5,
      imageUrl:'/assets/food4.jpg',
      tage: ['fastfood','Pizza','lunch']
     },
     {
      id: 5,
      name: 'Checkan Food',
      cookTime: '20-25',
      price: 150,
      favorite: false,
      origine: ['Islamabad'],
      star:4.5,
      imageUrl:'/assets/food5.jpg',
      tage: ['fastfood','Pizza','lunch','brakfast']
     },
     {
      id: 6,
      name: 'Checken leg',
      cookTime: '30-35',
      price: 150,
      favorite: false,
      origine: ['Islamabad'],
      star:4.5,
      imageUrl:'/assets/food6.jpg',
      tage: ['fastfood','Pizza','lunch']
     },
     {
      id: 7,
      name: 'Beef Paida',
      cookTime: '20',
      price: 150,
      favorite: true,
      origine: ['Islamabad'],
      star:4.5,
      imageUrl:'/assets/food7.jpg',
      tage: ['fastfood','Pizza','lunch']
     },
     {
      id: 8,
      name: 'Pizza',
      cookTime: '10-15',
      price: 150,
      favorite: false,
      origine: ['Islamabad'],
      star:4.5,
      imageUrl:'/assets/food8.jpg',
      tage: ['fastfood','Pizza','lunch']
     }
  ]
  ngOnInit(): void {
  }

}
