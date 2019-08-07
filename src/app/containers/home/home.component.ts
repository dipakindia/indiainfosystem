import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {
  public services = [
    { id: 1, name: 'Web Design', icon: 'pe-7s-medal', description: 'Id mea congue dictas, nec et summo mazim impedit. Vim te audiam impetus interpretaris, cum no alii option, cu sit mazim libris. '},
    { id: 2, name: 'Web Developement', icon: 'pe-7s-help2', description: 'Id mea congue dictas, nec et summo mazim impedit. Vim te audiam impetus interpretaris, cum no alii option, cu sit mazim libris. '},
    { id: 3, name: 'SEO and SMO', icon: 'pe-7s-culture', description: 'Id mea congue dictas, nec et summo mazim impedit. Vim te audiam impetus interpretaris, cum no alii option, cu sit mazim libris. '},
    { id: 4, name: 'Wordpress Developement', icon: 'pe-7s-headphones', description: 'Id mea congue dictas, nec et summo mazim impedit. Vim te audiam impetus interpretaris, cum no alii option, cu sit mazim libris. '},
    { id: 5, name: 'E-commerce Application', icon: 'pe-7s-credit', description: 'Id mea congue dictas, nec et summo mazim impedit. Vim te audiam impetus interpretaris, cum no alii option, cu sit mazim libris. '},
    { id: 6, name: 'Api Dev & integration', icon: 'pe-7s-chat', description: 'Id mea congue dictas, nec et summo mazim impedit. Vim te audiam impetus interpretaris, cum no alii option, cu sit mazim libris. '}
  ]
  constructor() { }

  ngOnInit() {
  }

}
