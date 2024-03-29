import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-popinfo',
  templateUrl: './popinfo.component.html',
  styleUrls: ['./popinfo.component.scss'],
})
export class PopinfoComponent implements OnInit {
  items = Array(40);

  constructor( private popoverController: PopoverController) { }

  ngOnInit() {}

  onClick(value: number){
    console.log('item:', value);
    this.popoverController.dismiss({ item: value});
  }
}
