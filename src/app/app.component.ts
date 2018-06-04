import { Component,OnInit,AfterViewInit, OnDestroy } from '@angular/core';
import { BreakpointObserver,BreakpointState, Breakpoints, MediaMatcher } from "@angular/cdk/layout";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit,OnDestroy{
  title = 'app';
  matcher: MediaQueryList;
  constructor(public breakpointObserver:BreakpointObserver, public mediaMatcher:MediaMatcher){

  }
  ngOnInit(){
    // MediaMatcher
    this.matcher = this.mediaMatcher.matchMedia('(min-width:500px)');
    this.matcher.addListener(this.myListener);

    if (this.breakpointObserver.isMatched('(min-height: 40rem)')) {
      console.log('Enough room!');
    }
    this.breakpointObserver
        .observe([Breakpoints.Small,Breakpoints.HandsetPortrait])
        //.observe(['(min-width:500px)'])

        .subscribe((state:BreakpointState)=>{
          if(state.matches){
            //console.log("Viewport is 500px or Over !");
            console.log('Matches small viewport or handset in portrait mode');
          }else{
            console.log("Viewport is getting smaller");
          }
        });
  }

  myListener(event){
    console.log("event",event.matches ? 'match': 'no-matches');
  }
  ngOnDestroy(){
    this.matcher.removeListener(this.myListener);
  }

}
