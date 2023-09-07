import { Component, Output, EventEmitter } from '@angular/core';
import { navbarData } from './nav-data';

interface EcoNavToggle{
  screenWidth: number;
  collapsed: boolean; 
}

@Component({
  selector: 'app-ecosolut',
  templateUrl: './ecosolut.component.html',
  styleUrls: ['./ecosolut.component.css']
})
export class EcosolutComponent {

  @Output() onToggleEcoNav : EventEmitter<EcoNavToggle> = new EventEmitter();
  collapsed = false;
  screenWidth = 0;
  navData = navbarData;

  toggleCollapse(): void{
    this.collapsed = !this.collapsed;
    this.onToggleEcoNav.emit({collapsed: this.collapsed, screenWidth: this.screenWidth});
  }

  closeEconav(): void{
    this.collapsed = false
    this.onToggleEcoNav.emit({collapsed: this.collapsed, screenWidth: this.screenWidth});
  }
}
