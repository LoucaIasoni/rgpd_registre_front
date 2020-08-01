import { Component, OnInit, Input, HostListener, ElementRef } from '@angular/core';
import { AuthenticationService } from 'src/services/authentification.service';

@Component({
  selector: 'app-top-user-profile',
  templateUrl: './top-user-profile.component.html',
  styleUrls: ['./top-user-profile.component.css']
})
export class TopUserProfileComponent implements OnInit {

  opened = false;
  user: any

  constructor(
    private eRef: ElementRef,
    private authService: AuthenticationService
  ) { }

  async ngOnInit() {
    this.user = await this.authService.getMe().toPromise();
  }

  openDetails() {
    this.opened = !this.opened;
  }

  @HostListener('document:click', ['$event'])
  clickout(event) {
    if(this.eRef.nativeElement.contains(event.target)) {
    } else {
      this.opened = false;
    }
  }
}
