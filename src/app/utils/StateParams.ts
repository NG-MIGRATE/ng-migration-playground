import { Injectable } from '@angular/core';
import {Router, ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class StateParams {

  constructor(private activatedRoute: ActivatedRoute,
              private router: Router) {
  }

  public getParamMap():Map<string, any> {
    let queryMap = new Map();
    this.router.routerState.snapshot.root.queryParamMap.keys.forEach(key => {
      queryMap.set(key, this.router.routerState.snapshot.root.queryParamMap.get(key));
    });
    return queryMap;
  }

  public getParam(paramName:string):any {
    let rValue:any = null;
    this.router.routerState.snapshot.root.queryParamMap.keys.forEach(key => {
      if (key == paramName) {
        rValue = this.router.routerState.snapshot.root.queryParamMap.get(key);
      }
    });
    return rValue;
  }
}
