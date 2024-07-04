import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header1Component } from './components/header/header-1.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Header1Component],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'my-first-project';
}
