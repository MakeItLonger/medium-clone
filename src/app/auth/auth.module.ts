import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthComponent } from './auth.component';
import { SharedModule } from '../shared';
import { AuthRoutingModule } from './auth-routing.module';

@NgModule({
  declarations: [AuthComponent],
  imports: [CommonModule, SharedModule, AuthRoutingModule],
})
export class AuthModule {}
