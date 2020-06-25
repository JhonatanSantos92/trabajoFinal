import { Component, OnInit } from '@angular/core';
import { NewReleasePresenter } from './new-releases.presenter';

@Component({
  selector: 'app-new-releases',
  templateUrl: './new-releases.view.html',
  styleUrls: ['./new-releases.view.scss'],
  providers: [ NewReleasePresenter ]
})
export class NewReleasesView implements OnInit {

  constructor(
    public presenter: NewReleasePresenter
  ) { }

  ngOnInit(): void {
    this.presenter.getNewReleases();
  }

}
