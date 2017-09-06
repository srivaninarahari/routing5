import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 title:string;
  constructor(private route:ActivatedRoute) {
    
  } 

  ngOnInit() {
    this.route.data.forEach((data: any) => {
      this.title = data.message;
      });
     
  }


}
