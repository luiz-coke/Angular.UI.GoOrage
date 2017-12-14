import { Component } from '@angular/core';

// TODO: move layouts into the framework
@Component({
  selector: 'ngx-three-columns-layout',
  styleUrls: ['./three-columns.layout.scss'],
  template: `
    <layout-page>
      <layout-header fixed>
        <ngx-header></ngx-header>
      </layout-header>

      <sidebar-layout class="menu-sidebar" tag="menu-sidebar" responsive >
        <sidebar-header>
          <a href="#" class="btn btn-hero-success main-btn">
            <i class="ion ion-social-github"></i> <span>Support Us</span>
          </a>
        </sidebar-header>
        <ng-content select="menu-layout"></ng-content>
      </sidebar-layout>

      <layout-column class="small">
      </layout-column>

      <layout-column right>
        <ng-content select="router-outlet"></ng-content>
      </layout-column>

      <layout-column class="small">
      </layout-column>

      <layout-footer fixed>
        <ngx-footer></ngx-footer>
      </layout-footer>
    </layout-page>
  `,
})
export class ThreeColumnsLayoutComponent {
}
