import { Component } from '@angular/core';

interface EcoNavToggle{

  screenWidth: number;
  collapsed: boolean;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'front';

  isEcoNavCollapsed = false;
  screenWidth = 0;

  onToggleEcoNav(data: EcoNavToggle) : void{
    this.screenWidth = data.screenWidth;
    this.isEcoNavCollapsed = data.collapsed;
  }
}
