import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-header-desktop',
  templateUrl: './header-desktop.component.html',
  styleUrls: ['./header-desktop.component.css']
})
export class HeaderDesktopComponent implements OnInit {

  @Input() role;
  @Input() actif;

  mainNav: any;
  navBarOldStudent = [
    {
      title: 'Carte'
    },
    {
      title: 'Évenements'
    },
    {
      title: 'Actualités'
    },
    {
      title: 'Offres'
    },
    {
      title: 'Profil'
    }
  ];

  constructor() {
  }

  async ngOnInit() {
    switch(this.role) {
      case 'old-student':
        this.mainNav = this.navBarOldStudent;
        break;
    }
  }


}
