import { Component, OnInit } from '@angular/core';
import { gsap } from 'gsap';

@Component({
  selector: 'app-splash',
  templateUrl: './splash.component.html',
  styleUrls: ['./splash.component.scss'],
})
export class SplashComponent implements OnInit {

  ngOnInit(): void {

  }

  toggleTeam(index: number) {
    document.querySelector(`.team-container-${index}`)?.classList.toggle('team-container-expanded')
  }
}
