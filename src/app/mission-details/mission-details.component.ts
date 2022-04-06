import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { Mission } from '../models/mission';



@Component({
  selector: 'app-mission-details',
  styleUrls: ['./mission-details.component.css'],
  templateUrl: './mission-details.component.html'
  
})
export class MissionDetailsComponent implements OnInit {
  mission: Mission;

  constructor(private router: Router, private route: ActivatedRoute) { 
    this.mission = this.router.getCurrentNavigation()?.extras?.state?.['mission'];
    if (!this.mission) {
      router.navigate(['/'])
    }
  }

  ngOnInit(): void {}
  
  ngOnDestroy() {
  }

}
