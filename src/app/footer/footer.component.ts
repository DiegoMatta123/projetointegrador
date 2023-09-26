import { Component } from '@angular/core';
import { HostListener } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {

  isFooterVisible = false;

  @HostListener('window:scroll', ['$event'])
  checkScroll() {
    const scrollPosition = window.pageYOffset;
    const windowHeight = window.innerHeight;
    const contentHeight = document.body.scrollHeight;

    if (scrollPosition + windowHeight >= contentHeight) {
      this.isFooterVisible = true;
    } else {
      this.isFooterVisible = false;
    }
  }
}
