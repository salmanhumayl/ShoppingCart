import { Component, OnInit } from '@angular/core';
import {Router,ActivatedRoute } from '@angular/router';
import {AuthenticationService} from '../../services/authentication.service';
import {MessengerService} from 'src/app/services/messenger.service'
import {UserInfo} from '../../models/UserInfo';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  returnUrl: string;
  currentUser: UserInfo[]=[];

  constructor(private msg:MessengerService,public authService: AuthenticationService,
    private router:Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {

    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
   // alert(this.returnUrl);
   // alert(this.route.snapshot.queryParams['returnUrl'] || '/');
  //alert(this.returnUrl);
  }

  Login(){
     this.authService.removeToken();
      this.authService.storeToken("access_token");
      this.currentUser.push({
        FirstName:"Salman",
        LastName:"Mazhar",
        Mobile:"0501252897",
        EmailAddress:"dsadasads",
        Password:"123"
      })


      this.authService.StoreUserInfo(this.currentUser);

      this.msg.isLoggedIn$.next(true);


      if (this.returnUrl!=null)
      {

        this.router.navigateByUrl(this.returnUrl);
      }
      else
      {
        this.router.navigate(['login']);
      }




  }

  Register(){

    this.router.navigate(['register']);
  }
}
