import { Component, OnInit, AfterViewInit, OnDestroy } from '@angular/core';
import { CommonService } from '../../service';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss']
})
export class PageComponent implements OnInit,AfterViewInit,OnDestroy {

  constructor(private _common:CommonService) { }

  ngOnInit() {

  }

  ngAfterViewInit(){
    console.log("Page Loaded..");
    this._common.componentBGUpdate('landing');
  }

  ngOnDestroy(){
    
  }
}
