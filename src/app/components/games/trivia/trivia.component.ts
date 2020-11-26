import { Component, OnInit } from '@angular/core';
import { UtilService } from 'src/app/services/util.service';

@Component({
  selector: 'app-trivia',
  templateUrl: './trivia.component.html',
  styleUrls: ['./trivia.component.scss']
})
export class TriviaComponent implements OnInit {


  listTrivia = [
    { id: 0, pregunta: "¿En qué año llegó el hombre a la Luna?", rv: "1969", rnv: "1967", rnv2: "1971" },
    { id: 1, pregunta: "¿Qué importante batalla tuvo lugar en 1815?", rv: "La batalla de Waterloo", rnv: "Batalla de Toulouse", rnv2: "Combate de Quechereguas" },
    { id: 2, pregunta: "¿En qué año se disolvió la Unión Soviética?", rv: "1991", rnv: "1993", rnv2: "1989" },
    { id: 3, pregunta: "¿Cómo se conocía la Primera Guerra Mundial antes de que estallara la segunda?", rv: "La Gran Guerra", rnv: "Guerra de Trincheras", rnv2: "Guerra de movimientos" },
    { id: 4, pregunta: "¿Cuál es el río más caudaloso del mundo?", rv: "El Amazonas", rnv: "El Nilo", rnv2: "Paraná" },
    { id: 5, pregunta: "¿Qué país está entre Perú y Colombia?", rv: "Ecuador", rnv: "Bolivia", rnv2: "Brasil" },
    { id: 6, pregunta: "¿En qué país se encuentra el río Po?", rv: "Italia", rnv: "España", rnv2: "Portugal" },
    { id: 7, pregunta: "¿A qué país pertenece la isla de Creta?", rv: "Grecia", rnv: "Croacia", rnv2: "Turquía" },
    { id: 8, pregunta: "¿En qué país se encuentra el pico Aconcagua?", rv: "Argentina", rnv: "Chile", rnv2: "Brasil" },
    { id: 9, pregunta: "¿Cuál es el país más visitado del mundo?", rv: "Francia", rnv: "EE.UU", rnv2: "China" },
    { id: 10, pregunta: "¿Cuál es la lengua más hablada del mundo?", rv: "Chino mandarín", rnv: "Inglés", rnv2: "Español" },
    { id: 11, pregunta: "¿En qué países se encuentra el Everest?", rv: "China y Nepal", rnv: "Nepal e India", rnv2: "China y Mongolia" },
    { id: 12, pregunta: "¿Quién pintó el “Guernica”?", rv: "Pablo Picasso", rnv: "Miguel Angel", rnv2: "Salvador Dalí" },
    { id: 13, pregunta: "¿Con qué nombre firmaba Van Gogh sus obras?", rv: "Vincent", rnv: "Van Gogh", rnv2: "Vincent VG" },
    { id: 14, pregunta: "¿Qué tipo de instrumento es una cítara?", rv: "De cuerda", rnv: "De viento", rnv2: "Percusión" },
    { id: 15, pregunta: "¿Qué filósofo creó “El mito de la caverna”?", rv: "Platón", rnv: "Aristóteles", rnv2: "Sócrates" },
    { id: 17, pregunta: "¿Qué animal mitológico da nombre a un libro de Thomas Hobbe?", rv: "Leviatán", rnv: "Kraken", rnv2: "Fénix" },
    { id: 18, pregunta: "¿En qué lado del cuerpo está el hígado?", rv: "En el derecho", rnv: "En el izquierdo", rnv2: "En el medio" },
    { id: 19, pregunta: "¿Qué número viene después del 14 en los decimales del Pi?", rv: "1", rnv: "5", rnv2: "3" },
    { id: 20, pregunta: "¿Cuántos elementos tiene la tabla periódica?", rv: "118", rnv: "120", rnv2: "116" },
    { id: 21, pregunta: "¿Qué gas de la atmósfera nos protege de la radiación ultravioleta?", rv: "El ozono", rnv: "El oxígeno", rnv2: "El nitrógeno" },
    { id: 22, pregunta: "¿Cuál es la velocidad de la luz?", rv: "300.000 km/s", rnv: "400.000 km/s", rnv2: "500.000 km/s" },
    { id: 23, pregunta: "De los cinco sentidos, ¿cuál es el que se desarrolla primero?", rv: "El olfato", rnv: "El tacto", rnv2: "El gusto" },
    { id: 24, pregunta: "¿Cómo se llama el proceso celular en el que una célula se divide para dar lugar a dos células hijas iguales?", rv: "Mitosis", rnv: "Meiosis ", rnv2: "Simbiosis" },
    { id: 25, pregunta: "¿Cuál es el único mes que puede tener menos de 4 fases lunares?", rv: "Febrero", rnv: "Abril", rnv2: "Junio" },
    { id: 26, pregunta: "¿Cuál es el elemento más abundante de la Tierra?", rv: "Hidrógeno", rnv: "Oxígeno", rnv2: "Carbono" },
    { id: 27, pregunta: "¿Qué banda publicó el álbum “Master of Puppets”?", rv: "Metallica", rnv: "Guns'n roses", rnv2: "Megadeth" },
    { id: 28, pregunta: "¿Cuál fue la primera película en ganar el Óscar a “Mejor película”?", rv: "Alas", rnv: "Casablanca", rnv2: "Psicosis" },
    { id: 29, pregunta: "¿Dónde se inventó el Ping-Pong?", rv: "Inglaterra", rnv: "China", rnv2: "Alemania" },
    { id: 30, pregunta: "¿Cómo se llamaba Muhammad Ali antes de adoptar este nombre?", rv: "Cassius Clay", rnv: "Cassius May", rnv2: "Cassius Cleen" },
    { id: 31, pregunta: "¿Quién es el máximo goleador histórico de los mundiales de fútbol?", rv: "Miroslav Klose", rnv: "Nazário Ronaldo", rnv2: "Pelé" },
    { id: 32, pregunta: "¿Cuál es el equipo de la NBA con más títulos?", rv: "Los Boston Celtics", rnv: "Chicago Bulls", rnv2: "Lakers" },
    { id: 33, pregunta: "¿En qué equipo jugaba David Beckham en el año 2007?", rv: "Angeles Galaxy", rnv: "Manchester United", rnv2: "PSG" },
    { id: 34, pregunta: "¿Cuántos rounds hay en un combate de boxeo olímpico?", rv: "3", rnv: "5", rnv2: "6" },
    { id: 35, pregunta: "¿Qué arte marcial se conoce como el “boxeo tailandés”?", rv: "Muay thai", rnv: "Kickboxing", rnv2: "Jiu-jitsu" },
    { id: 36, pregunta: "¿Quién fue el primer presidente de Estados Unidos?", rv: "George Washington", rnv: "Benjamin Franklin", rnv2: "Abraham Lincoln" },
    { id: 37, pregunta: "¿Cuánto duró la Guerra de los Cien Años?", rv: "116 años", rnv: "100 años", rnv2: "120 años" },
    { id: 38, pregunta: "¿En qué año se creó la Organización de las Naciones Unidas?", rv: "1945", rnv: "1940", rnv2: "1947" },
    { id: 39, pregunta: "¿Quién escribió la Ilíada y la Odisea?", rv: "Homero", rnv: "Platón", rnv2: "Aristóteles" },
    { id: 40, pregunta: "¿Qué gran artista es conocido por haber pintado la Capilla Sixtina?", rv: "Miguel Angel", rnv: "Leonardo Da Vinci", rnv2: "Donatello" },
    { id: 41, pregunta: "¿En que año se celebró la primera Copa Mundial de Fútbol?", rv: "1930", rnv: "1934", rnv2: "1928" },
    { id: 42, pregunta: "¿En qué franquicia de la NBA desarrolló toda su carrera profesional Kobe Bryant?", rv: "En Los Ángeles Lakers", rnv: "En Miami Heat", rnv2: "En Chicago Bulls" },
    { id: 43, pregunta: "¿Cuál es el tenista que ha ganado en más ocasiones el título de Roland Garros?", rv: "Rafael Nadal", rnv: "Roger Federer", rnv2: "Pete Sampras" },
    { id: 44, pregunta: "¿Quién pintó “la última cena”?", rv: "Leonardo da Vinci", rnv: "Miguel Angel", rnv2: "Pablo Picasso" },
    { id: 45, pregunta: "¿Cuál es el océano más grande?", rv: "El Océano Pacífico", rnv: "El Océano Atlantico", rnv2: "El Océano Índico" },
    { id: 46, pregunta: "¿Qué año llegó Cristóbal Colón a América?", rv: "1492", rnv: "1490", rnv2: "1495" },
    { id: 47, pregunta: "¿En qué año comenzó la II Guerra Mundial?", rv: "1939", rnv: "1937", rnv2: "1940" },
    { id: 48, pregunta: "¿Cuál fue el primer metal que empleó el hombre?", rv: "Cobre", rnv: "Aluminio", rnv2: "Zinc" },
    { id: 49, pregunta: "¿Cuál es la nacionalidad de Pablo Neruda?", rv: "Chilena", rnv: "Uruguaya", rnv2: "Argentina" },
    { id: 50, pregunta: "¿Cuál es el metal más caro del mundo?", rv: "Rodio", rnv: "Oro", rnv2: "Platino" },
    { id: 51, pregunta: "¿En que año empezó la Primera Guerra Mundial?", rv: "1914", rnv: "1912", rnv2: "1916" },
    { id: 52, pregunta: "¿En qué año se produce la Revolución Francesa?", rv: "1789", rnv: "1791", rnv2: "1793" },
    { id: 53, pregunta: "¿En qué año se inicia la Revolución Rusa?", rv: "1917", rnv: "1915", rnv2: "1913" },
    { id: 54, pregunta: "¿Quién fue el presidente estadounidense al inicio de la Segunda Guerra Mundial?", rv: "Franklin Roosevelt", rnv: "Herbert Hoover", rnv2: "Harry Truman" },
    { id: 55, pregunta: "¿En qué año cayó el muro de Berlín?", rv: "1989", rnv: "1991", rnv2: "1993" },
    { id: 56, pregunta: "¿Cuál es el “País del Sol Naciente”?", rv: "Japón", rnv: "China", rnv2: "Corea del Sur" },
    { id: 57, pregunta: "¿En que provincia nació el Gral. José de San Martín?", rv: "Corrientes", rnv: "Neuquen", rnv2: "Córdoba" },
    { id: 58, pregunta: "¿En que año falleció Manuel Belgrano", rv: "1820", rnv: "1816", rnv2: "1825" },
    { id: 59, pregunta: "¿En que año se creó la Constitución Nacional Argentina?", rv: "1853", rnv: "1860", rnv2: "1857" },
    { id: 60, pregunta: "¿En que año Jose de San Martín cruzó los Andes?", rv: "1817", rnv: "1815", rnv2: "1813" },

  ];

  pregunta;
  listAux = [];
  listResp;
  respValida;
  respSeleccionada;
  showPregunta: boolean = false;

  juegoStore = 'trivia';
  puntuacion = 0;

  constructor(private utilService: UtilService) { }

  ngOnInit(): void {
    this.utilService.getTopPlayer(this.juegoStore);
  }

  cargarPregunta() {
    this.listAux = this.listTrivia;
    let random = Math.floor(Math.random() * this.listAux.length);
    this.pregunta = this.listAux[random];

    this.cargarRespuestas();
    this.removeItem();
    this.showPregunta = true;
  }

  removeItem() {
    this.listAux = this.listAux.filter(item => item !== this.pregunta);
  }

  cargarRespuestas() {
    this.listResp = [];
    this.respValida = this.pregunta.rv;
    this.listResp.push(this.pregunta.rv);
    this.listResp.push(this.pregunta.rnv);
    this.listResp.push(this.pregunta.rnv2);
    this.mezclarRespuestas();
  }

  mezclarRespuestas() {
    let currentIndex = this.listResp.length;
    let temporaryValue;
    let randomIndex;

    while (currentIndex !== 0) {

      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      temporaryValue = this.listResp[currentIndex];
      this.listResp[currentIndex] = this.listResp[randomIndex];
      this.listResp[randomIndex] = temporaryValue;
    }
  }

  comparar() {
    if (this.respValida == this.respSeleccionada) {
      alert("Respuesta Correcta!!, siguiente pregunta:");
      this.cargarPregunta();
    }
    else {
      alert("Respuesta Incorrecta!!, seleccione nuevamente.");
    }
  }


}
