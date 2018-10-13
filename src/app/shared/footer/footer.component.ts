import { Component, OnInit } from '@angular/core';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
    test : Date = new Date();

    constructor(public location: Location) { }

    ngOnInit() {}

    isErrorPage() {
        let titlee = this.location.prepareExternalUrl(this.location.path());
        if( titlee === '/not-found' ) {
            return true;
        }
        else {
            return false;
        }
    }
}
