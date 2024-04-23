import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { GameComponent } from './components/game/game.component';
import { ListMenuComponent } from './components/list-menu/list-menu.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, GameComponent, RouterLink, ListMenuComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'fun-for-nerds';
}
