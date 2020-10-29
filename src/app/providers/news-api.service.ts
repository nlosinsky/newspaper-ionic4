import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { Article, ArticlesResp } from '../models';

@Injectable({providedIn: 'root'})
export class NewsApiService {
  readonly baseUrl = environment.baseUrl;
  readonly apiKey = environment.apiKey;

  constructor(
    private http: HttpClient
  ) {
  }

  getTopHeadlines(countryCode: string, category: string): Observable<Article[]> {
    const params = {
      country: countryCode,
      apiKey: this.apiKey
    };

    if (category !== 'all') {
      params['category'] = category;
    }
    // todo: remove !
    const data = {
      "status": "ok",
      "totalResults": 34,
      "articles": [{
        "source": {"id": "la-nacion", "name": "La Nacion"},
        "author": "Martín Boerr",
        "title": "Un país aparte, la provincia donde solo rigen las leyes de Gildo Insfrán - LA NACION",
        "description": "",
        "url": "https://www.lanacion.com.ar/politica/varados-formosa-cazan-pescan-duermen-intemperie-brutal-nid2488555",
        "urlToImage": "//bucket2.glanacion.com/anexos/fotos/43/3267443.jpg",
        "publishedAt": "2020-10-25T07:43:00Z",
        "content": "Gildo Insfrán junto al presidente Alberto Fernández\r\n Fuente: Télam\r\nPOSADAS.- La pandemia ha transformado al territorio de Formosa en un \"país aparte\", donde rigen reglas distintas a las del resto d… [+11260 chars]"
      }, {
        "source": {"id": "la-nacion", "name": "La Nacion"},
        "author": "Redacción LA NACION",
        "title": "Pronóstico del tiempo: rige una alerta por tormentas fuertes para la ciudad y varias provincias del país - LA NACION",
        "description": "",
        "url": "https://www.lanacion.com.ar/sociedad/pronostico-del-tiempo-rige-alerta-tormentas-fuertes-nid2488685",
        "urlToImage": "//bucket2.glanacion.com/anexos/fotos/53/3454653.jpg",
        "publishedAt": "2020-10-25T07:00:00Z",
        "content": "El Servicio Meteorológico Nacional (SMN) dio aviso de una abundante caída de agua, fuerte ráfagas de viento y posible granizo en las próximas horas\r\n Fuente: Archivo\r\nEl Servicio Meteorológico Nacion… [+1761 chars]"
      }, {
        "source": {"id": "infobae", "name": "Infobae"},
        "author": "anónimo",
        "title": "Murió el presidente de Samsung, Lee Kun-hee a los 78 años, siendo el hombre más rico de Corea del Sur - infobae",
        "description": "El grupo tecnológico anunció la muerte del empresario quien llevaba hospitalizado en un centro médico de Seúl desde 2014 a causa de un infarto que le dejó incapacitado",
        "url": "https://www.infobae.com/america/mundo/2020/10/25/murio-el-presidente-de-samsung-lee-kun-hee-a-los-78-anos-siendo-el-hombre-mas-rico-de-corea-del-sur/",
        "urlToImage": "https://www.infobae.com/new-resizer/MO7a8HlJgKRpgzgo65jg6Xywq8I=/1200x628/filters:format(jpg):quality(85)//arc-anglerfish-arc2-prod-infobae.s3.amazonaws.com/public/FXDOFHPL25CTXLXKAPXFG3P7DU",
        "publishedAt": "2020-10-25T06:56:15Z",
        "content": "Lee Kun-hee quien era el presidente del grupo Samsung \r\nEl grupo Samsung, el mayor conglomerado empresarial de Corea del Sur, anunció la muerte a los 78 años de su presidente, Lee Kun-hee, el hombre … [+2317 chars]"
      }, {
        "source": {"id": null, "name": "Clarín"},
        "author": "Clarín.com",
        "title": "Investigan la desaparición de 28 mil municiones para FAL en un batallón del Ejército en Neuquén - Clarín",
        "description": "La Justicia federal y autoridades militares investigan el faltante de casi 30 mil municiones en el Batallón de Ingenieros M6, a la vera de la ruta nacional 22, en Neuquén.\"Están allanando el Batallón de Ingenieros M6 del Ejército en Neuquén porque faltan 30.0…",
        "url": "https://www.clarin.com/politica/investigan-desaparicion-28-mil-municiones-fal-batallon-ejercito-neuquen_0_8G5FCOfLZ.html",
        "urlToImage": "https://images.clarin.com/2020/10/25/faltan-casi-30-mil-municiones___LMgAWTck__1200x630__1.jpg",
        "publishedAt": "2020-10-25T04:26:25Z",
        "content": "La Justicia federal y autoridades militares investigan el faltante de casi 30 mil municiones en el Batallón de Ingenieros M6, a la vera de la ruta nacional 22, en Neuquén.\r\n\"Están allanando el Batall… [+2171 chars]"
      }, {
        "source": {"id": null, "name": "Diario Panorama de Santiago del Estero"},
        "author": "Diario Panorama",
        "title": "Coronavirus en Santiago: siete fallecidos y 311 casos positivos - Diario Panorama de Santiago del Estero",
        "description": "El Ministerio de Salud de la provincia también informó la recuperación de 231 afectados.",
        "url": "https://www.diariopanorama.com/noticia/364536/coronavirus-santiago-siete-fallecidos-311-casos-positivos",
        "urlToImage": "https://www.diariopanorama.com/fotos/notas/2020/08/02/20200802192306.jpg",
        "publishedAt": "2020-10-25T03:39:59Z",
        "content": "24/10/2020 - El Ministerio de Salud de la provincia dio a conocer este sábado un nuevo parte en donde se informó que se recuperaron 231 casos confirmados, por lo que son 2.881 los casos recuperados e… [+1512 chars]"
      }, {
        "source": {"id": null, "name": "Página 12"},
        "author": "Marta Dillon",
        "title": "El caso Etchevehere: Tierra, trabajo y lazos de sangre bajo amenaza de los patrones rurales - Página 12",
        "description": "Mientras Luis Etchevehere y sus hermanos incumplen las restricciones judiciales y convocan a un banderazo \"por la propiedad privada\", detrás de la tranquera Dolores Etchevehere, trabajadores excluidos e integrantes de organizaciones sociales ponen en marcha e…",
        "url": "https://www.pagina12.com.ar/301500-el-caso-etchevehere-tierra-trabajo-y-lazos-de-sangre-bajo-am",
        "urlToImage": "https://images.pagina12.com.ar/styles/focal_16_9_960x540/public/2020-10/115877-indexvvv_0.jpg?itok=u1Xcup6m",
        "publishedAt": "2020-10-25T03:27:48Z",
        "content": "La galería inglesa, su piso en damero, la espléndida vista del campo que ondula hacia el este, son un resguardo a la hora de la siesta. El calor es apabullante. Dolores Etchevehere no lo nota o no lo… [+14698 chars]"
      }, {
        "source": {"id": "la-nacion", "name": "La Nacion"},
        "author": null,
        "title": "Lionel Messi: ser capitán no es sólo ir al sorteo o protestarle al árbitro, sino también dar la cara - LA NACION",
        "description": "",
        "url": "https://www.lanacion.com.ar/deportes/futbol/lionel-messi-ser-capitan-no-es-solo-nid2488672",
        "urlToImage": "//bucket2.glanacion.com/anexos/fotos/65/3454665.jpg",
        "publishedAt": "2020-10-25T02:59:00Z",
        "content": "Lionel Messi se fue sin hablar tras la derrota con Real Madrid: el que puso la cara fue el debutante Dest\r\n Crédito: AFP\r\nJueves 16 de julio de 2020. Roberto Torres Morales anota para el entusiasta O… [+3267 chars]"
      }, {
        "source": {"id": "infobae", "name": "Infobae"},
        "author": "anónimo",
        "title": "Axel Kicillof: “La mayoría de los barrios privados son prácticamente ocupaciones de tierra” - infobae",
        "description": "En medio de las tensiones por la usurpación de predios en diferentes regiones del país, el gobernador bonaerense pidió “regularizar” la situación de estos complejos",
        "url": "https://www.infobae.com/politica/2020/10/25/axel-kicillof-la-mayoria-de-los-barrios-privados-son-practicamente-ocupaciones-de-tierra/",
        "urlToImage": "https://www.infobae.com/new-resizer/lnHMD17_tFAjqMfCdOIW7FAv1Dw=/1200x628/filters:format(jpg):quality(85)//cloudfront-us-east-1.images.arcpublishing.com/infobae/PKQO4PJKQJDWDGUSOI5FZU2XHY.jpg",
        "publishedAt": "2020-10-25T02:51:57Z",
        "content": "(Télam: Eva Cabrera)\r\nEn medio de las recientes polémicas por las usurpaciones de propiedades en varias regiones del país, el gobernador bonaerense, Axel Kicillof, se quejó por la falta de disponibil… [+4078 chars]"
      }, {
        "source": {"id": null, "name": "Paparazzi.com.ar"},
        "author": "Redacción Paparazzi",
        "title": "¡Frente a frente! Por primera vez, Flor Vigna y Mica Viciconte hablaron de su histórica rivalidad: ̶ ... - Paparazzi",
        "description": "Mica Viciconte y Flor Vigna comenzaron su paso por los medios gracias a Combate, el programa de canal Nueve que era furor entre los jóvenes por sus competencias. Ambas eran las líderes de sus equipos y desde allí se generó una histórica rivalidad que se mantu…",
        "url": "https://www.paparazzi.com.ar/teve/frente-a-frente-por-primera-vez-flor-vigna-y-mica-viciconte-hablaron-de-su-historica-rivalidad-me-ayudo-a-superarme/",
        "urlToImage": "https://www.paparazzi.com.ar/wp-content/uploads/2020/10/mica-viciconte-y-flor-vigna.jpg",
        "publishedAt": "2020-10-25T02:45:08Z",
        "content": "Mica Viciconte y Flor Vigna comenzaron su paso por los medios gracias a Combate, el programa de canal Nueve que era furor entre los jóvenes por sus competencias. Ambas eran las líderes de sus equipos… [+1182 chars]"
      }, {
        "source": {"id": null, "name": "Cadena 3"},
        "author": "Cadena 3 Argentina",
        "title": "Obama, a Trump: Ni siquiera puede protegerse a sí mismo - Cadena 3",
        "description": "El expresidente de Estados Unidos cuestionó con dureza al mandatario republicano por su gestión de la pandemia del coronavirus en el país, en vísperas de la elección presidencial.",
        "url": "https://www.cadena3.com/noticia/internacionales/obama-a-trump-ni-siquiera-puede-protegerse-a-si-mismo_273794",
        "urlToImage": "https://www.cadena3.com/admin/playerswf/fotos/ARCHI_792883.jpg",
        "publishedAt": "2020-10-25T02:18:57Z",
        "content": "El expresidente de Estados Unidos, Barack Obama, cuestionó este sábado con dureza al mandatario republicano y candidato a la reelección, Donald Trump, por su gestión de la pandemia de coronavirus en … [+2350 chars]"
      }, {
        "source": {"id": null, "name": "Clarín"},
        "author": "Santiago Fioriti",
        "title": "La presión del Círculo Rojo y el ultimátum de Alberto Fernández a Martín Guzmán: \"Arreglá esto\" - Clarín",
        "description": "Desde hace cinco semanas, por lo menos, el Círculo Rojo se pregunta cuál es el dólar de pánico en la Argentina. Hasta qué punto la devaluación abrupta del peso podrá evitarse con un mercado al rojo vivo. Para Alberto Fernández, el termómetro pareció llegar a …",
        "url": "https://www.clarin.com/politica/presion-circulo-rojo-ultimatum-alberto-fernandez-martin-guzman-arregla-_0_U-7r1xrS4.html",
        "urlToImage": "https://images.clarin.com/2020/10/24/alberto-fernandez-en-un-abrazo___My5eh9Ak3_1200x630__1.jpg",
        "publishedAt": "2020-10-25T01:31:24Z",
        "content": "Desde hace cinco semanas, por lo menos, el Círculo Rojo se pregunta cuál es el dólar de pánico en la Argentina. Hasta qué punto la devaluación abrupta del peso podrá evitarse con un mercado al rojo v… [+7230 chars]"
      }, {
        "source": {"id": "infobae", "name": "Infobae"},
        "author": "anónimo",
        "title": "Casi diez meses después, lo que sabemos sobre el COVID-19 y las preguntas que aún quedan sin responder - infobae",
        "description": "Desde síntomas hasta vacunas y tratamientos, lo que sabemos y lo que no sobre el virus que tiene en vilo al mundo",
        "url": "https://www.infobae.com/salud/2020/10/25/casi-diez-meses-despues-lo-que-sabemos-sobre-el-covid-19-y-las-preguntas-que-aun-quedan-sin-responder/",
        "urlToImage": "https://www.infobae.com/new-resizer/lGRR-NyjB4KQNsFKGfJyJAXrHfE=/1200x628/filters:format(jpg):quality(85)//cloudfront-us-east-1.images.arcpublishing.com/infobae/JZVSH654T56GRGJ3NG4RZPN3BU.jpg",
        "publishedAt": "2020-10-25T01:30:49Z",
        "content": "¿Puede haber reinfección?; ¿cuándo estará lista una vacuna?; ¿cuánto virus se necesita para infectarse? son las preguntas que, contra reloj, buscan contestar los especialistas (REUTERS)\r\nParece que l… [+25032 chars]"
      }, {
        "source": {"id": null, "name": "Cienradios.com"},
        "author": "wpapi",
        "title": "Horóscopo para este domingo 25 de octubre - Radio Mitre",
        "description": "",
        "url": "https://radiomitre.cienradios.com/horoscopo-para-este-domingo-25-de-octubre/",
        "urlToImage": "https://cdn.cienradios.com/wp-content/uploads/sites/3/2019/01/2-3.jpg",
        "publishedAt": "2020-10-25T01:03:10Z",
        "content": "Aries\r\n Nacidos del 21 de marzo al 20 de abrilSentirás que las cosas pasan porque tienen que pasar. Estarás sin incentivo alguno. Busca actividades que te hagan reencontrar contigo mismo.\r\nAmor: Usa … [+6762 chars]"
      }, {
        "source": {"id": null, "name": "Cadena 3"},
        "author": "Cadena 3 Argentina",
        "title": "Schwartzman ganó y juega la final este domingo en Alemania - Cadena 3",
        "description": "El argentino se impuso con parciales de 6-4, 5-7 y 6-4, y definirá el título ante el alemán Alexander Zverev. El Peque afianza su lugar entre los mejores nueve tenistas del mundo.",
        "url": "https://www.cadena3.com/noticia/tenis/schwartzman-gano-y-juega-la-final-este-domingo-en-alemania_273791",
        "urlToImage": "https://www.cadena3.com/admin/playerswf/fotos/ARCHI_792880.jpg",
        "publishedAt": "2020-10-25T01:01:08Z",
        "content": "El argentino Diego Schwartzman se clasificó este sábado a la final del torneo ATP 250 de Colonia, en Alemania, tras batallar duro para vencer al canadiense Felix Auger-Aliassime, número 22 del mundo.… [+1779 chars]"
      }, {
        "source": {"id": null, "name": "MDZ Online"},
        "author": "MDZ Deportes",
        "title": "El picante mensaje de Cristiano Ronaldo luego de la victoria de Real Madrid - MDZ Online",
        "description": "El crack de la Juventus, que se recupera del coronavirus, compartió una particular imagen suya con un breve pero contundente comentario tras la victoria del Merengue en el Camp Nou",
        "url": "https://www.mdzol.com/deportes/2020/10/24/el-picante-mensaje-de-cristiano-ronaldo-luego-de-la-victoria-de-real-madrid-114032.html",
        "urlToImage": "https://www.mdzol.com/u/fotografias/m/2020/10/14/f1280x720-968997_1100672_5050.jpg",
        "publishedAt": "2020-10-25T00:38:02Z",
        "content": "Mientras se recupera tras haber dado por segunda vez consecutiva positivo de coronavirus, Cristiano Ronaldo fue protagonista por subir un sugestivo posteo luego de la victoria del Real Madrid ante Ba… [+743 chars]"
      }, {
        "source": {"id": null, "name": "Télam"},
        "author": null,
        "title": "Otras 275 personas murieron y 11.968 fueron diagnosticadas con coronavirus en el país - Télam",
        "description": "Con las cifras de este s�bado el total de fallecidos asciende a 28.613 y son 1.081.336 los casos positivos.",
        "url": "https://www.telam.com.ar/notas/202010/528393-coronavirus-pandemia-argentina-casos-muertes-reporte-ministerio-de-salud.html",
        "urlToImage": "https://www.telam.com.ar/advf/imagenes/2020/09/5f4f6d01775ca_800x450.jpg",
        "publishedAt": "2020-10-25T00:30:19Z",
        "content": "Otras 275 personas murieron y 11.968 fueron reportadas con coronavirus en las últimas 24 horas en la Argentina, mientras el Gobierno anunció que en los próximo días comenzará con experiencias piloto … [+4633 chars]"
      }, {
        "source": {"id": null, "name": "Página 12"},
        "author": "Página 12",
        "title": "Un plebiscito en modo covid-19 - Página 12",
        "description": "",
        "url": "https://www.pagina12.com.ar/301470-un-plebiscito-en-modo-covid-19",
        "urlToImage": "https://images.pagina12.com.ar/styles/focal_16_9_960x540/public/2020-10/115786-whatsapp-20image-202020-10-24-20at-2018-48-17.jpeg?itok=FnNrVRwL",
        "publishedAt": "2020-10-24T23:25:01Z",
        "content": "Desde Chile.\r\nEste domingo Chile decidirá cambiar o mantener la Constitución de 1980, elaborada entre cuatro paredes por la dictadura de Pinochet y que benefició al empresariado en desmedro de los de… [+3008 chars]"
      }, {
        "source": {"id": null, "name": "Clarín"},
        "author": "Clarín.com",
        "title": "ClipDrop, la app para móviles que permite \"copiar y pegar\" objetos reales a tu computadora - Clarín.com",
        "description": "ClipDrop es una nueva aplicación para celulares y computadoras que a través de la cámara del 'smartphone' permite a los usuarios hacer 'copiar y pegar' objetos del mundo real y trasladarlos a otra parte en Realidad Aumentada.La aplicación, que está disponible…",
        "url": "https://www.clarin.com/tecnologia/clipdrop-app-moviles-permite-hacer-copiar-pegar-objetos-reales-computadora_0__1M-xd-6b.html",
        "urlToImage": "https://images.clarin.com/2020/10/24/clipdrop___aPJFQOM9O_1200x630__1.jpg",
        "publishedAt": "2020-10-24T22:06:39Z",
        "content": "ClipDrop es una nueva aplicación para celulares y computadoras que a través de la cámara del 'smartphone' permite a los usuarios hacer 'copiar y pegar' objetos del mundo real y trasladarlos a otra pa… [+1229 chars]"
      }, {
        "source": {"id": null, "name": "Lacapital.com.ar"},
        "author": null,
        "title": "Coronavirus: Rosario notificó 676 casos de los 1.923 que registró la provincia - La Capital (Rosario)",
        "description": "Con estos números, los infectados en la ciudad desde el comienzo de la pandemia ascendieron a 43.962, al tiempo que a nivel provincial son 93.096.",
        "url": "https://www.lacapital.com.ar/la-ciudad/coronavirus-rosario-notifico-676-casos-los-1923-que-registro-la-provincia-n2618828.html",
        "urlToImage": "https://media.lacapital.com.ar/p/dc44e055261b61c7442c5e713caf4f12/adjuntos/203/imagenes/028/968/0028968863/los-casos-coronavirus-que-se-confirman-diario-rosario-tienen-al-limite-al-sistema-sanitario.jpg",
        "publishedAt": "2020-10-24T21:42:32Z",
        "content": "De los 7.897 casos activos en Rosario, hay 385 contagios que se dieron por contacto estrecho, mientras que 2.878 fueron por circulación comunitaria. También cabe destacar que 129 de esos contagios pe… [+3093 chars]"
      }, {
        "source": {"id": null, "name": "ámbito.com"},
        "author": "ámbito.com",
        "title": "Coronavirus: el mundo llegó a un nuevo máximo de positivos por tercer día consecutivo - ámbito.com",
        "description": "La Organización Mundial de la Salud (OMS) reportó más de 465.000 infecciones, de los cuales 218.237 se presentaron en el Viejo Continente.",
        "url": "https://www.ambito.com/mundo/coronavirus/el-llego-un-nuevo-maximo-positivos-tercer-dia-consecutivo-n5142854",
        "urlToImage": "https://media.ambito.com/adjuntos/239/imagenes/038/180/0038180231.jpg",
        "publishedAt": "2020-10-24T20:25:00Z",
        "content": "Estos números aún se mantienen alejados de los 19,3 millones de casos de América, pero superan las 8,8 millones infecciones del sudeste de Asia.\r\nLa entidad precisó que la segunda ola de la enfermeda… [+1335 chars]"
      }]
    };
    // return this.http.get<ArticlesResp>(this.baseUrl + '/top-headlines', {params})
    return of(data)
      .pipe(
        map(resp => resp.articles)
      );
  }

  getPublisherTopHeadlines(publisherCode: string): Observable<Article[]> {
    return this.http.get<ArticlesResp>(this.baseUrl + '/top-headlines', {
      params: {
        sources: publisherCode,
        apiKey: this.apiKey
      }
    })
      .pipe(
        map(resp => resp.articles)
      );
  }
}
