import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { RandySharedModule } from 'app/shared/shared.module';
import { HOME_ROUTE } from './home.route';
import { HomeComponent } from './home.component';

@NgModule({
  imports: [RandySharedModule, RouterModule.forChild([HOME_ROUTE])],
  declarations: [HomeComponent],
})
export class RandyHomeModule {}
