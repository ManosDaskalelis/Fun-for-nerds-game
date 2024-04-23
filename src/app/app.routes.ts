import { Routes } from '@angular/router';
import { InfoComponent } from './components/info/info.component';
import { GameComponent } from './components/game/game.component';

export const routes: Routes = [
    {path: "game-info", component: InfoComponent},
    {path: "game", component: GameComponent}
];
