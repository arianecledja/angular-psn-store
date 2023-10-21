import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  institutional: string[] = [
    "Suporte",
    "Política de privacidade",
    "Termos de uso do site",
    "Mapa do site",
    "PlayStation Studios",
    "Legal",
    "Sobre a SIE"
  ]
  socialMedia: string[] = [
    "Facebook",
    "Twitter",
    "YouTube",
    "Instagram",
    "Aplicativo para Android",
    "Aplicativo para iOS"
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
