import { Injectable } from '@angular/core';
import { Resolve,ActivatedRouteSnapshot, RouterStateSnapshot  } from '@angular/router';
import { Observable } from 'rxjs';
import { ProfileService } from './profile.service';
//import 'rxjs/add/observable/of';

@Injectable()
export class UserResolverService implements Resolve<any>{

  constructor(private profile:ProfileService) { }
  resolve(route:ActivatedRouteSnapshot,routeState:RouterStateSnapshot):Observable<any>{
    let userId= +route.params['id'];
    if(userId){
      return this.profile.getUsers(userId);
    }else{
      //Observable.of(null);
    }
  }

}
