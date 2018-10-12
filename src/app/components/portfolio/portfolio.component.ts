import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { NgbdModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit , AfterViewInit {

  @ViewChild(NgbdModalComponent) modal: NgbdModalComponent;

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
  }

  openModal(event, nam, pat) {
    event.preventDefault();
    event.stopPropagation();

    this.modal.name = nam;
    this.modal.imagePath = pat;

    this.modal.open();
  }

}
