import {
  BreakpointObserver,
  Breakpoints
} from '@angular/cdk/layout';
import {
  AfterContentInit,
  Component,
  OnInit,
  ViewChild
} from '@angular/core';
import { MatSidenav } from '@angular/material';
import {
  fadeInOutMedium,
  fadeInOutSmall
} from '../_animations/fade-in-out';
import { zoomInOutMedium, } from '../_animations/zoom-in-out';
import { TemplateComponent } from './template.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  animations: [
    fadeInOutSmall,
    fadeInOutMedium,
    zoomInOutMedium
  ]
})
export class DashboardComponent implements OnInit, AfterContentInit {

  @ViewChild('snav') sidenav: MatSidenav;
  @ViewChild(TemplateComponent) template: TemplateComponent;

  gridListCols = 4;
  handset = false;
  tablet = false;
  web = false;

  sidebarType = 'simple';
  loaded = false;

  constructor(breakpointObserver: BreakpointObserver) {
    breakpointObserver.observe(Breakpoints.Handset).subscribe(result => {
      if (result.matches) {
        setTimeout(() => {
          this.handset = true;

          this.gridListCols = 1;
        });
      }
    });

    breakpointObserver.observe(Breakpoints.Tablet).subscribe(result => {
      if (result.matches) {
        setTimeout(() => {
          this.tablet = true;

          this.gridListCols = 2;
        });
      }
    });

    breakpointObserver.observe(Breakpoints.Web).subscribe(result => {
      if (result.matches) {
        setTimeout(() => {
          this.web = true;

          this.gridListCols = 4;
        });
      }
    });
  }

  ngOnInit() {
    setTimeout(() => {

    }, 2000);
  }

  ngAfterContentInit() {
    this.loaded = true;
  }

  /**
   * TODO: create service to control de sidenav
   *
   * @param type
   */
  changeSidebarType(type) {
    if (this.sidebarType !== type) {
      this.sidenav.close();
      setTimeout(() => {
        this.sidebarType = type;
        setTimeout(() => {
          this.sidenav.open();
        }, 200);
      }, 500);
    }
  }

}
