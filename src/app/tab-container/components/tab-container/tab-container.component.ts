import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { Subscription } from 'rxjs';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-tab-container',
  templateUrl: './tab-container.component.html',
  styleUrls: ['./tab-container.component.scss']
})
export class TabContainerComponent implements OnInit {
  activatedTabIndex: number = 0;
  tabList: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  @Input() tabConfiguration: any;
  @Input() selectedIndex: number;
  subscription: Subscription;

  ngOnInit(): void {
    setTimeout(() => {
      if (this.activatedRoute && this.activatedRoute.firstChild) {
        this.setActivatedTabIndex(this.activatedRoute.firstChild.snapshot.url[0].path);
      }
    }, 500);

    this.subscription = this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd)
        , map(() => this.activatedRoute))
      .subscribe((event) => {
        if (event.firstChild) {
          this.setActivatedTabIndex(event.firstChild.snapshot.url[0].path);
        }
      });
  }

  setActivatedTabIndex(path: string) {
    this.activatedTabIndex = this.tabConfiguration.
      map(function (e) { return e.path; })
      .indexOf(path);
    this.tabConfiguration.map((item, key) => {
      item.isDisable = false;
      if (key === this.activatedTabIndex) item.isDisable = true;
    });
    this.tabList = this.tabConfiguration;
  }

}
