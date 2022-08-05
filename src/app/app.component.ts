import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ThemePalette } from '@angular/material/core';
import { ProgressSpinnerMode } from '@angular/material/progress-spinner';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
 
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
