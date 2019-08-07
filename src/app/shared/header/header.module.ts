import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { NavbarModule } from '../navbar/navbar.module';
import { SignInPopupComponent } from './sign-in-popup/sign-in-popup.component';

@NgModule({
  declarations: [HeaderComponent, SignInPopupComponent],
  imports: [
    CommonModule,
    NavbarModule
  ],
  exports: [HeaderComponent, SignInPopupComponent]
})
export class HeaderModule { }
