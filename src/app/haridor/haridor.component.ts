import { Component, inject } from '@angular/core';
import { ServService } from '../serv.service';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { TrimmerPipe } from '../trimmer.pipe';
import { CurrencyPipe } from '@angular/common';


@Component({
  selector: 'app-haridor',
  standalone: true,
  imports: [RouterLink, RouterOutlet, TrimmerPipe],
  templateUrl: './haridor.component.html',
  styleUrl: './haridor.component.css'
})
export class HaridorComponent {
  service = inject(ServService)
  router = inject(Router)
  ProductId = 0
  router_checker(id: number) {
    this.router.navigate(['/haridor', id]);

  }

  isLogin = true; // по умолчанию форма логина
  isLoginPage = false;
  toggleForm(login: boolean) {
    this.isLogin = login;
  }

  onLogin(event: Event) {
    event.preventDefault();
    // логика логина
    console.log('Logging in...');
  }

  onRegister(event: Event) {
    event.preventDefault();
    // логика регистрации
    console.log('Registering...');
  }

  changeLoginPage() {
    this.isLoginPage = !this.isLoginPage
  }


}
