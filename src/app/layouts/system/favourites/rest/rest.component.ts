import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {IRest} from "../../../../Shared/Models/rest.interface";
import {RestService} from "../../../../Shared/Services/rest.service";

@Component({
  selector: 'app-rest',
  templateUrl: './rest.component.html',
  styleUrls: ['./rest.component.css']
})
export class RestComponent {

  constructor(private service: RestService) {
  }

  @Input() restaurant!: IRest;
  @Output() someEvent = new EventEmitter
  visible: boolean = true;
  newComm!: string;
  switch(){
    this.visible = !this.visible;
  }
  ngOnInit(): void {
  }

  async addNewComm(){
    const response = await this.service.editItem({...this.restaurant, comment: this.newComm})
    this.switch()
    this.restaurant = response
  }

  async delRest(){
    const response = await this.service.delItem(this.restaurant.id)
    this.someEvent.emit(null)
  }

}
