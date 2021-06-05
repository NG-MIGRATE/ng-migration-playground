import {Component, HostListener, OnInit} from '@angular/core';
import {DataService} from "../../services/data.service";
import {WindowRef} from "../../utils/WindowRef";
import {Location} from "@angular/common"
import {StateParams} from "../../utils/StateParams";
import {EventService} from "../../utils/EventService";

@Component({
  selector: 'app-test-component',
  templateUrl: './test-component.component.html',
  styleUrls: ['./test-component.component.css'],
  providers: [DataService, StateParams]
})
export class TestComponentComponent implements OnInit {

  public message: string = "Hello World";
  public keyPressed: string = "";
  infoReceived1: string[] = [];

  constructor(private dataService: DataService,
              private winRef: WindowRef,
              private eventService: EventService) {
  }

  private didScroll:boolean = false;

  ngOnInit(): void {
    this.message = "Hello World";
    this.eventService.subscribe("customEvent" , function () {
        console.log("customEvent received!");
    });
  }

  getInfoFromService1() {
    this.infoReceived1 = this.dataService.getInfo1();
    this.eventService.fireEvent("customEvent", this.infoReceived1 );
  }

  @HostListener('document:keyup', ['$event'])
  onKeyUp(ev: KeyboardEvent) {
    // do something meaningful with it
    this.keyPressed = "The user just pressed :: " + ev.key;
  }

  @HostListener('window:scroll', ['$event'])
  onScrollEvent(event: any){
    console.log(event);
    console.log("scrolling");
    this.didScroll = true;
    this.message = "Hello World - Has scrolled";
  }

}
