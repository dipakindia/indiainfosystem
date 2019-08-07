import { Component, OnInit } from '@angular/core';
export interface RouteInfo {
  path: string;
  title: string;
  sub: any[]
}

export const ROUTES: RouteInfo[] = [
  { path: '', title: 'Home', sub:[]
  }, 
  { path: 'about-us', title: 'About us', sub: [
    { path: 'who-we-are', title: 'Who we are',  class: '' },
    { path: 'why-choose-us', title: 'Why choose us',  class: '' },
    { path: 'blog', title: 'Blog',  class: '' }
  ] },
  { path: 'services', title: 'Services', sub:   [
    { path: 'wordpress-developement', title: 'Wordpress Developement',  icon: 'ti-panel'}, 
    { path: 'custom-application', title: 'Custom Application' },
    { path: 'website-designing', title: 'Website Designing' },
    { path: 'mobile-application', title: 'Mobile Application'},
    { path: 'ecommerce-application', title: 'E-commerce Application'},
    { path: 'api-dev-integration', title: 'Api Dev & Integration'}
  ] },
  { path: 'careers', title: 'Careers',  sub: [] },
  { path: 'portfolio', title: 'Portfolio',  sub: [] },
  { path: 'our-work', title: 'Our work',  sub: [] },
  { path: 'contact', title: 'Contact us',  sub: [] },
 /*  { path: 'ite-wise-report', title: 'ITE wise report' }, */
];

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.sass']
})
export class NavbarComponent implements OnInit {

  public menuItems: any[];
  ngOnInit() {
      this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
/*   isNotMobileMenu(){
      if($(window).width() > 991){
          return false;
      }
      return true;
  } */

}
