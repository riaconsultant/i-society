import { Injectable } from '@angular/core';
import { PreloadingStrategy,Route } from '@angular/router';
import { Observable } from 'rxjs';
//import 'rxjs/add/observable/of';

@Injectable()
export class RoutePreloadStrategyService implements PreloadingStrategy{

  constructor() { }

  preload(route:Route,load:Function):Observable<any>{
    if(route.data && route.data['preload']){
      return load();
    }
    //return Observable.of(null);
  }

}
