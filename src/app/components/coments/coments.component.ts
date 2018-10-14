import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-coments',
  templateUrl: './coments.component.html',
  styleUrls: ['./coments.component.scss']
})
export class ComentsComponent implements OnInit {

  data: any[] = [];
  constructor() { }

  ngOnInit() {
    this.numQuotes();
  }

  // Mocks
  numQuotes() {
    const num = Math.floor(Math.random() * 10) + 1;

    for (let index = 0; index < num; index++) {
      let element = {
        name: this.randomNames(),
        position: 'Senior Developer on Indra',
        text: this.randomTexts(),
        url: Math.floor(Math.random() * 10) + 1,
        img: './assets/img/faces/erik-lucatero-2.jpg'
      };

      this.data.push(element);

    }

  }

  randomNames() {
    const num = Math.floor(Math.random() * 10);
    const arrayNames = [
      'Paco Fernandez',
      'Alfonso Nieto',
      'Pepito Perez',
      'Tomas Turbado',
      'Mariano el del bombo',
      'Pablo Motos',
      'Miguel Delives',
      'Antonio Padilla',
      'Javier Dolores',
      'Benito Camela'
    ];

    return arrayNames[num];
  }

  randomTexts() {
    const num = Math.floor(Math.random() * 4);
    const arrayText = [
      'Tener a Eloy en el equipo es un valor seguro. Se implica con total ilusión y esfuerzo. Gran trabajador, responsable y profesional. Ha sido un pilar fuerte en el proyecto y sin lugar a dudas contaría con él. Sus aportaciones han sido de gran ayuda y en varias ocasiones han mejorado el funcionamiento, ya que su visión aportaba claridad y las soluciones propuestas siempre han sido bien vistas por el cliente.',
      'Haber trabajado con Eloy, ha sido todo un placer, tanto por las ganas de aprender, implicación y profesionalidad hasta en la mas mínima tarea, como por su personalidad y la capacidad de trabajo en equipo. Con personas como Eloy, da gusto ir a trabajar. A pesar de tener buenos conocimientos en lo que a maquetación se refiere, sigue mejorando continuamente y esto es un valor añadido que no todo el mundo posee. Muy buen trabajador, profesional, comprometido, capaz, inteligente y responsable',
      'Tener a Eloy en el equipo es una decisión muy acertada, por su implicación y entusiasmo a la hora de abordar diferentes problemas en el día a día.Es muy responsable y un gran profesional, además de aportar grandes conocimientos de Frontend.',
      'Persona trabajadora responsable y comprometida con su trabajo.'
    ];

    return arrayText[num];
  }

}
