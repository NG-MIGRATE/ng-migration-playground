import {EventEmitter, Injectable, OnDestroy} from '@angular/core';
import {Observable, Subscription} from "rxjs";


@Injectable()
export class EventService implements OnDestroy {
  constructor() {
  }

  private eventEmitters: Map<string, EventEmitter<any>> = new Map();

  public fireEvent(key: string, payload: any) {
    let eventEmitter = this.eventEmitters.get(key);
    if (!eventEmitter) {
      eventEmitter = new EventEmitter<any>(true)
      this.eventEmitters.set(key, eventEmitter);
    }
    eventEmitter.emit(payload);
    //console.log(":: event emit :: "+eventEmitter.observers.length);
  }

  public subscribe(key: string, fn: any) {
    let eventEmitter = this.eventEmitters.get(key);
    if (!eventEmitter) {
      eventEmitter = new EventEmitter<any>(true)
      this.eventEmitters.set(key, eventEmitter);
      //console.log("event emitters :: " +this.eventEmitters.size);
    }
    return eventEmitter.asObservable().subscribe(fn);
  }

  ngOnDestroy(): void {
    this.eventEmitters.forEach(function (p1: EventEmitter<any>, p2: string,
                                         p3: Map<string, EventEmitter<any>>)
    {
      p1.complete();
    }, undefined)
  }

}
