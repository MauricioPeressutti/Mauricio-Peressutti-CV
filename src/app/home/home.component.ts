import { Component, OnInit } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { ProgressSpinnerMode } from '@angular/material/progress-spinner';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  ngOnInit(): void {
  }

  constructor(
    private router:Router
  ) { }

  color: ThemePalette = 'primary';
  mode: ProgressSpinnerMode = 'determinate';
  value = 80;
  value1 = 65;
  value2 = 50;
  title = 'CV Mauricio Peressutti';

  goToAngular(){
    // this.router. ('https://angular.io/')
  }
  goToLN(){
    this.router.navigateByUrl('')
  }
  goToIG(){
    this.router.navigateByUrl('')
  }

}
