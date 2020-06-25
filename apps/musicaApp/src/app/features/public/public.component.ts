import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-public',
  templateUrl: './public.component.html',
  styleUrls: ['./public.component.scss']
})
export class PublicComponent implements OnInit {
  header = {
    brandUrl: '/',
    brand: 'Music App',
    logo: 'assets/logo.png',
    options: [
      { title: 'Premium', url: '/premium' },
      { title: 'Ayuda', url: '/help' },
      { title: 'Iniciar Sesión', url: '/login' },
    ]
  };

  constructor() { }

  ngOnInit(): void {
  }

}
