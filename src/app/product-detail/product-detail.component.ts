import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GetDataService } from '../service/get-data.service';
import { DataStorageService } from '../service/data-storage.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit  {
  constructor(private route:ActivatedRoute,private getData:GetDataService,private dataStorage:DataStorageService,
    private router:Router){}

    getParamValue:any;
    getProductDetails:any;
    storeCartData:any=[];
    inCart:boolean=false;
  ngOnInit(): void {
    this.getParamValue = this.route.snapshot.paramMap.get('id');

    var getVal = this.dataStorage.getCartData()

    this.storeCartData = getVal ? getVal : [];

    this.getData.productData.filter((ele:any)=>{
      if(ele.pdId == this.getParamValue)
      {
          this.getProductDetails = ele;
      }
    });

    this.storeCartData.filter((ele:any)=>{
        if(ele.pdId == this.getParamValue)
        {
            this.inCart=true;
        }
    });


}

addCart(data:any)
{
      data['plusMinusCounter']=0;
      this.storeCartData.push(data);
      this.dataStorage.storeCartData(this.storeCartData);
      this.router.navigate(['/cart']);
}

}
    
  


