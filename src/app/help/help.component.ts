import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-help',
  templateUrl: './help.component.html',
  styleUrls: ['./help.component.scss']
})
export class HelpComponent implements OnInit {

  constructor(private route : ActivatedRoute) {
  		this.route.params.subscribe(res=>console.log(res.id));
   }

  ngOnInit() {
  }

}
