import { Injectable } from '@angular/core';

@Injectable()
export class CommonService {

  constructor() { }

  componentBGUpdate(componentName = "landing"){
    let body = document.getElementsByTagName('body')[0];
    if(componentName == "landing"){
      body.setAttribute('id',"page-top");
      let compomentClass = "landing-page";
      body.classList.add(compomentClass);
    }else if(componentName == "login"){
      body.removeAttribute('id');
      body.className = "";
      let compomentClass = "gray-bg";
      body.classList.add(compomentClass);
    }else{
      body.removeAttribute('id');
      body.className = "";
      let compomentClass = "gray-bg";
      body.classList.add(compomentClass);
    }
  }

}
