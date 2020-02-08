import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

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

  ngOnInit(): void {
    setTimeout(() => {
      if (this.activatedRoute && this.activatedRoute.firstChild) {
        this.setActivatedTabIndex(this.activatedRoute.firstChild.snapshot.url[0].path);
      }
    }, 500);
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
