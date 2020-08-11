import { Component, OnInit } from '@angular/core';
import { UserService } from '../../shared/services/user/user.service';
import { User } from '../../shared/models/user.model';


@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css']
})
export class TopbarComponent implements OnInit {
  user: User;
  constructor(private userSerivce: UserService) {
    this.user = new User();
   }

  ngOnInit() {
    this.userSerivce.getCurrentUser().subscribe(user =>{
      this.user = user.current_user;
    })
  }
}
