import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-primer-dia',
  standalone: true,
  imports: [],
  templateUrl: './primer-dia.component.html',
  styleUrl: './primer-dia.component.scss'
})
export class PrimerDiaComponent {
  @Input() ejemplo:String = ''
  @Input() ejemplo2: String= '';
  card = {
    tittle:'Carta de tu padre',
    description: "te acarreo en bedwars.",
    }
}
