import { Component, OnInit } from '@angular/core';
import { PortalPresenter } from './portal.presenter';

@Component({
  selector: 'app-portal',
  templateUrl: './portal.component.html',
  styleUrls: ['./portal.component.scss'],
  providers: [ PortalPresenter ]
})
export class PortalComponent implements OnInit {

  constructor(public presenter: PortalPresenter) { }

  ngOnInit(): void {
  }

}