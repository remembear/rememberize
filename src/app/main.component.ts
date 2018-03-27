import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { StatusService } from './status.service';

import { Set } from './shared/types';
import { SETS } from './shared/consts';

@Component({
  templateUrl: './main.component.html'
})
export class MainComponent {

  private sets = SETS;

  constructor(private status: StatusService, public router: Router) {}

  async new(setIndex: number, dirIndex: number) {
    await this.status.startNewStudy(setIndex, dirIndex);
    this.router.navigate(['/study']);
  }

  async review(setIndex: number, dirIndex: number) {
    await this.status.startReviewStudy(setIndex, dirIndex);
    this.router.navigate(['/study']);
  }

}
