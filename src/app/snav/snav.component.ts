import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'snav',
  templateUrl: './snav.component.html',
  styleUrls: ['./snav.component.css']
})
export class SnavComponent {

  isHandset: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );

  constructor(private breakpointObserver: BreakpointObserver) {}

  toggleBack(): void {
    /**
    console.log('toggleBack');
    console.log('this.theState: ' + this.theState );
    this.theState = !this.theState;
    console.log('this.theState: ' + this.theState );

    console.log("hamburger: " + this.hamburger);
    console.log("back: " + this.back);
    this.back = !this.theState;
    this.hamburger = this.theState;
    */

    //this.backIcon = this.backIcon ? false : true;
    this.backIcon = !this.backIcon;
  }

  backIcon: boolean = false;
/**
  theState = true;

  back:boolean;
  hamburger:boolean = true;
*/
  //back = !this.theState;
  //hamburger = this.theState;

  }
