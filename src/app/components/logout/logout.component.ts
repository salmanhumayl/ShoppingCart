import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {AuthenticationService} from '../../services/authentication.service';
import {MessengerService} from 'src/app/services/messenger.service'
import { ProductService } from 'src/app/services/product.service';
@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private msg:MessengerService,private _itemService:ProductService,
    public auth: AuthenticationService,private router:Router) { }

  ngOnInit(): void {
    this.auth.removeRole();
    this.auth.removeToken();
    this._itemService.removeAllProductFromCart();
    this.msg.isLoggedIn.next(false);
    this.msg.updateCartCount(0);
    this.router.navigate(['/home']);

  }

}
