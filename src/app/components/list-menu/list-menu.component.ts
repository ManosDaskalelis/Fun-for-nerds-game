import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { MenuItem } from 'src/app/shared/menu-item';

@Component({
  selector: 'app-list-menu',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './list-menu.component.html',
  styleUrl: './list-menu.component.css'
})
export class ListMenuComponent {
  menu: MenuItem[] = [
    {text: "Game Info", routerLink: "game-info"},
    {text: "Game", routerLink: "game"}
  ]
}
