import { Component, Output, EventEmitter, OnInit, HostListener } from '@angular/core';
import { navbarData } from './nav-data';
import { animate, keyframes, style, transition, trigger } from '@angular/animations';

interface EcoNavToggle{
  screenWidth: number;
  collapsed: boolean; 
}

@Component({
  selector: 'app-ecosolut',
  templateUrl: './ecosolut.component.html',
  styleUrls: ['./ecosolut.component.css'],
  animations: [
    trigger('fadeInOut',[
      transition(':enter',[
          style({opacity:0}),
        animate('350ms',
          style({opacity:1})
        )
      ]),
      transition(':leave',[
        style({opacity:1}),
      animate('350ms',
        style({opacity:0})
        )
      ])
    ]),
    trigger('rotate',[
      transition(':enter',[
        animate('1000ms',
          keyframes([
            style({transform: 'rotate(0deg)', offset: '0'}),
            style({transform: 'rotate(2turn)', offset: '1'})
          ])
        )
      ])
    ])
  ]
})
export class EcosolutComponent implements OnInit {

  @Output() onToggleEcoNav : EventEmitter<EcoNavToggle> = new EventEmitter();
  collapsed = false;
  screenWidth = 0;
  navData = navbarData;

  @HostListener('window: resize', ['$event'])
  onResize(event: any){
    this.screenWidth = window.innerWidth;

    if(this.screenWidth <= 768) {
      this.collapsed = false;
      this.onToggleEcoNav.emit({collapsed: this.collapsed, screenWidth: this.screenWidth});
    }
  }

  ngOnInit(): void {
      this.screenWidth = window.innerWidth;
  }

  toggleCollapse(): void{
    this.collapsed = !this.collapsed;
    this.onToggleEcoNav.emit({collapsed: this.collapsed, screenWidth: this.screenWidth});
  }

  closeEconav(): void{
    this.collapsed = false
    this.onToggleEcoNav.emit({collapsed: this.collapsed, screenWidth: this.screenWidth});
  }
}
