import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HaridorComponent } from "./haridor/haridor.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HaridorComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'e-commerce';

  show = true
  show_func() {
    this.show = !this.show
  }
}
