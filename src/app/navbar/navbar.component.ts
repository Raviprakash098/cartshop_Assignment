import { Component, Input, OnInit } from '@angular/core';
import { DataStorageService } from '../service/data-storage.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  constructor(private dataStorage:DataStorageService){
    
  }

  @Input() cartCount:number=0;
  
  ngOnInit(): void {
  this.cartCount=this.dataStorage.getCartData().length;  
  }

}
