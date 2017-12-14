import { Component } from '@angular/core';

@Component({
  selector: 'ngx-one-column-layout',
  styleUrls: ['./one-column.layout.scss'],
  template: `
    <layout-page>
      <layout-header fixed>
        <ngx-header></ngx-header>
      </layout-header>

      <sidebar-layout class="menu-sidebar" tag="menu-sidebar" responsive>
        <sidebar-header>
          <a href="#" class="btn btn-hero-success main-btn">
            <i class="ion ion-social-github"></i> <span>Support Us</span>
          </a>
        </sidebar-header>
        <ng-content select="nb-menu"></ng-content>
      </sidebar-layout>

      <layout-column>
        <ng-content select="router-outlet"></ng-content>
      </layout-column>

      <layout-footer fixed>
        <ngx-footer></ngx-footer>
      </layout-footer>
    </layout-page>
  `,
})
export class OneColumnLayoutComponent {
}
