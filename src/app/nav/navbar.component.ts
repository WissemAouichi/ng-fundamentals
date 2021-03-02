import { Component } from '@angular/core'
import { templateJitUrl } from '@angular/compiler';

@Component ({
    selector: 'nav-bar',
    templateUrl: './nav-bar.component.html',
    styles: [`
    .nav.navbar-nav{font-size: 15px}
    #searchForm {margin-right: 100px}
    @media (max-width: 1200px) {#searchForm {display:none}}
    li > a.active { color: #F97924; }
    `]
})

export class NavBarComponent {

}