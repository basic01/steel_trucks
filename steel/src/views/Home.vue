 <style> 
.red{
  border-radius: 40px;
  width: 100%;
  height: inherit;
  
} 
tot:hover{
  background: #ff8;
  color: black;
}
form:focus-within {
  background: lightyellow;
}
:root {
    --block-sup-h: 100px;
    --block-bot-h: 100px;
    --block-border-r: 22px;
    --block-bg: white;
    --main-color: #ff5722;
}


.card {
    width: 250px;
    border-radius: var(--block-border-r);
    display: flex;
    flex-flow: column;
    align-items: center;
    box-shadow: 10px 10px 10px #00000040;
    position: relative;
    border: 2px;
}

.div-imagen {
  display:inline-block;
  position:relative;
}

.div-imagen > div {
  position:absolute;
  top:0;
  left:0;
  z-index:-1;
  padding:10px;
  margin:0;
}

.desvanecer:hover {
  opacity: 0.05;
  -webkit-transition: opacity 500ms;
  -moz-transition: opacity 500ms;
  -o-transition: opacity 500ms;
  -ms-transition: opacity 500ms;
  transition: opacity 500ms;
}

</style>
  
<template>
  <div class="container-fluid px-3 px-md-5">
    <div class="row">
      <div class="swiper mx-auto mb-5">
        <h1 class="main-header mb-5 px-3">
          
        </h1>
      <!--
        id="know
          class="w-100"
          style="object-fit: cover"
          src="@/assets/videos/know.mp4"
         controls 
        -->
        <video autoplay  loop muted class="red" preload="metadata"  poster=@/assets/logo_stamping.png>
          <source src="@/assets/videos/know.mp4" type="Video/mp4"> 
        </video> 
      </div>
    </div>
    <div class="row">
      <div class="col-12 col-md-6 mb-5 mb-md-0">
        <div class="home-servicios prototipos">
          <h2 class="second-header">Desarrollo de Prototipos</h2>
          <p class="main-text" style="padding-bottom: 1.4em">
            Contamos con un servicio para diseñar y fabricar piezas a la medida
            de acuerdo a las necesidades específicas de nuestros clientes.
          </p>
          <button herf="www.youtube.com" class="btn-general float-right">Saber más...</button>
        </div>
      </div>
      <div class="col-12 col-md-6 my-3 my-md-0">
        <div class="home-servicios prototipos">
          <h2 class="second-header">Ensambles Complejos</h2>
          <p class="main-text">
            La sinergia con la que cuenta nuestros departamentos de ingeniería y
            producción hace posible la elaboración de ensambles complejos en
            nuestras instalaciones.
          </p>
          <button class="btn-general float-right">Saber más...</button>
        </div>
      </div>
    </div>

    <div class="row">
      <div class="col-12">
        <h1 class="main-header" style="text-align: center;">Steel & Trucks</h1>
        <p class="main-text mb-4" style="text-align: center;">
          Contamos con un servicio para diseñar y fabricar piezas a la medida de
          acuerdo a las necesidades específicas de nuestros clientes sin importar el área en la que se desempeñe.
        </p>
        <!--Carousel-->

        <div id="carouselExampleControls" class="carousel slide" data-ride="carousel" style="width: 23.7%; margin-left: 38.15%;">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img class="d-block w-100" src="@/assets/img/home/sector_automotriz.png" alt="automotriz">
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="@/assets/img/home/sector_otros.png" alt="otros">
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="@/assets/img/home/sector_aeroespacial.png" alt="aeroespacial">
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="@/assets/img/home/sector_salud.png" alt="salud">
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>
<!--Carousel-->

<!--Test-->


<h1 class="main-header" style="text-align: center;">Nuestros logros</h1>
        <p class="main-text mb-4" style="text-align: center;">
          Estamos orgullosos del largo camino que hemos recorrido, sabemos que
            la confianza es el cimiento de cualquier relación comercial en el
            sector industrial por eso dejamos que nuestros logros hablen por
            nosotros.
        </p>
        <div class="row">
      <div class="col-12">
        <ul class="logros">

          <li class="main-text">
            Nos encontramos certificados por la norma IATF 16949-2016.
          </li>
          <li class="main-text">
            Premio a la Innovación en Tecnología: Somos dueños de patentes en
            nuestra maquinaria y hemos recibido el premio nacional de innovación
            en tecnología en varias ocasiones.
          </li>
          <li class="main-text">
            Empresa Socialmente Responsable: Somos conscientes de que todos
            podemos aportar un grano de arena a nuestra sociedad y siempre
            tratamos de ser los mejores en ello.
          </li>
          <li class="main-text">
            Premio a la Innovación en Sustentabilidad: La conversación y cuidado
            al medio ambiente es un pilar importante en nuestra empresa, es por
            eso que aplicamos las normas y técnicas necesarias para reducir
            nuestra huella en el mundo.
          </li>
          <li class="main-text">
            30 años de experiencia en el mercado nos ha dado el Know-How
            necesario para fabricar productos funcionales y brindar el mejor
            servicio.
          </li>
          <li class="main-text">
            Al día de hoy contamos con más de 300 componentes para diferentes
            aplicaciones desde el sector industrial, aeroespacial, automotriz y
            muchos otros.
          </li>
          <li class="main-text">
            Fabricamos un promedio de un millón de piezas el mes, lo que nos
            permite abastecer las necesidades de clientes de todos los tamaños.
          </li>
        </ul>
      </div>
    </div>
<div style="margin-top: 100px;">
<div class="card" style="width: 15%; float: left; margin-left: 8%;">
  <img class="card-img-top" src="@/assets/img/home/LegendTrophy.png" alt="Card image cap" style="width: 35%; heigth: 35%;">
  <div class="card-body">
    <h5 class="card-title"> Premio de calidad </h5>
    <p class="card-text"> Premio estatal de 1996</p>
      </div>
</div>

<div class="card" style="width: 15%; float: left; margin-left: 8%;">
  <img class="card-img-top" src="@/assets/img/home/LegendTrophy.png" alt="Card image cap" style="width: 35%; heigth: 35%;">
  <div class="card-body">
    <h5 class="card-title">Certificación Arvin</h5>
    <p class="card-text">Internacional en el sistema de calidad ATQPS</p>
      </div>
</div>

<div class="card" style="width: 15%; float: left; margin-left: 8%;">
  <img class="card-img-top" src="@/assets/img/home/LegendTrophy.png" alt="Card image cap" style="width: 35%; heigth: 35%;">
  <div class="card-body">
    <h5 class="card-title">Mejores practicas</h5>
    <p class="card-text">Otorgada por Arvin Meritor 2002.</p>
      </div>
</div>

<div class="card" style="width: 15%; float: left; margin-left: 8%;">
  <img class="card-img-top" src="@/assets/img/home/LegendTrophy.png" alt="Card image cap" style="width: 35%; heigth: 35%;">
  <div class="card-body">
    <h5 class="card-title">Proveedor del año </h5>
    <p class="card-text">Otorgado por ArvinMeritor 2002.</p>
      </div>
</div>
</div>
<div style="margin-top: 500px;">
<div class="card" style="width: 15%; float: left; margin-left: 8%;">
  <img class="card-img-top" src="@/assets/img/home/LegendTrophy.png" alt="Card image cap" style="width: 35%; heigth: 35%;">
  <div class="card-body">
    <h5 class="card-title">ArvinMeritor 2002</h5>
    <p class="card-text">Otorgado por  por Magna Formex 2003.</p>
      </div>
</div>

<div class="card" style="width: 15%; float: left; margin-left: 8%;">
  <img class="card-img-top" src="@/assets/img/home/LegendTrophy.png" alt="Card image cap" style="width: 35%; heigth: 35%;">
  <div class="card-body">
    <h5 class="card-title">Certificación ISO-TS16949-2002</h5>
    <p class="card-text">Otorgado por por la compañía certificadora DNV en el 2003.</p>
      </div>
</div>

<div class="card" style="width: 15%; float: left; margin-left: 8%;">
  <img class="card-img-top" src="@/assets/img/home/LegendTrophy.png" alt="Card image cap" style="width: 35%; heigth: 35%;">
  <div class="card-body">
    <h5 class="card-title">Certificación QS9000</h5>
    <p class="card-text">Otorgada por la compañía certificadora Perry Johnson .</p>
      </div>
</div>

<div class="card" style="width: 15%; float: left; margin-left: 8%;">
  <img class="card-img-top" src="@/assets/img/home/LegendTrophy.png" alt="Card image cap" style="width: 35%; heigth: 35%;">
  <div class="card-body">
    <h5 class="card-title">Mejores prácticas de manufactura</h5>
    <p class="card-text">Participación en las mejores prácticas de manufactura de Indianapolis USA del grupo ArvinMeritor 2001.</p>
      </div>
</div>
</div>

<div style="margin-top: 900px;">
<div class="card" style="width: 15%; float: left; margin-left: 8%;">
  <img class="card-img-top" src="@/assets/img/home/LegendTrophy.png" alt="Card image cap" style="width: 35%; heigth: 35%;">
  <div class="card-body">
    <h5 class="card-title">Premio nacional de tecnología </h5>
    <p class="card-text">Finalista en el premio nacional de tecnología 2004 y 2006 .</p>
      </div>
</div>

<div class="card" style="width: 15%; float: left; margin-left: 8%;">
  <img class="card-img-top" src="@/assets/img/home/LegendTrophy.png" alt="Card image cap" style="width: 35%; heigth: 35%;">
  <div class="card-body">
    <h5 class="card-title">Recertificación ISO-TS16949-2002</h5>
    <p class="card-text">Otorgada por la compañía certificadora DNV en el 2006.</p>
      </div>
</div>

<div class="card" style="width: 15%; float: left; margin-left: 8%;">
  <img class="card-img-top" src="@/assets/img/home/LegendTrophy.png" alt="Card image cap" style="width: 35%; heigth: 35%;">
  <div class="card-body">
    <h5 class="card-title">Premio nacional de tecnología</h5>
    <p class="card-text"> 2009.</p>
      </div>
</div>

<div class="card" style="width: 15%; float: left; margin-left: 8%;">
  <img class="card-img-top" src="@/assets/img/home/LegendTrophy.png" alt="Card image cap" style="width: 35%; heigth: 35%;">
  <div class="card-body">
    <h5 class="card-title">Premio de Competitividad</h5>
    <p class="card-text"> Mención especial en el Premio de Competitividad Empresarial de Querétaro 2011.</p>
      </div>
</div>
</div>
<div style="margin-top: 1300px;">
<div class="card" style="width: 15%; float: left; margin-left: 8%;">
  <img class="card-img-top" src="@/assets/img/home/LegendTrophy.png" alt="Card image cap" style="width: 35%; heigth: 35%;">
  <div class="card-body">
    <h5 class="card-title">Empresa Socialmente Responsable </h5>
    <p class="card-text">Reconocida como empresa Socialmente Responsable en 2012 .</p>
      </div>
</div>

<div class="card" style="width: 15%; float: left; margin-left: 8%;">
  <img class="card-img-top" src="@/assets/img/home/LegendTrophy.png" alt="Card image cap" style="width: 35%; heigth: 35%;">
  <div class="card-body">
    <h5 class="card-title">Premio nacional de tecnología</h5>
    <p class="card-text">Galardonada con el premio nacional de tecnología en 2014.</p>
      </div>
</div>

<div class="card" style="width: 15%; float: left; margin-left: 8%;">
  <img class="card-img-top" src="@/assets/img/home/LegendTrophy.png" alt="Card image cap" style="width: 35%; heigth: 35%;">
  <div class="card-body">
    <h5 class="card-title">Premio a la Innovación y Liderazgo en Sustentabilidad</h5>
    <p class="card-text">Reconocida con el premio a la Innovación y Liderazgo en Sustentabilidad en 2016</p>
      </div>
</div>

<div class="card" style="width: 15%; float: left; margin-left: 8%;">
  <img class="card-img-top" src="@/assets/img/home/LegendTrophy.png" alt="Card image cap" style="width: 35%; heigth: 35%;">
  <div class="card-body">
    <h5 class="card-title">programa de Autogestión PASST</h5>
    <p class="card-text">Inscritos en el programa de Autogestión PASST de la STPS.</p>
      </div>
</div>
</div>
<div style="margin-top: 1700px;">
<div class="card" style="width: 15%; float: left; margin-left: 8%;">
  <img class="card-img-top" src="@/assets/img/home/LegendTrophy.png" alt="Card image cap" style="width: 35%; heigth: 35%;">
  <div class="card-body">
    <h5 class="card-title">RENIECYT</h5>
    <p class="card-text">• Inscritos en el RENIECYT.</p>
      </div>
</div>

<div class="card" style="width: 15%; float: left; margin-left: 8%;">
  <img class="card-img-top" src="@/assets/img/home/LegendTrophy.png" alt="Card image cap" style="width: 35%; heigth: 35%;">
  <div class="card-body"> 
    <h5 class="card-title">Patente </h5>
    <p class="card-text">Contamos con una patente inscrita en el IMPI</p>
      </div>
</div>

<div class="card" style="width: 15%; float: left; margin-left: 8%;">
  <img class="card-img-top" src="@/assets/img/home/LegendTrophy.png" alt="Card image cap" style="width: 35%; heigth: 35%;">
  <div class="card-body">
    <h5 class="card-title">ISO 9001:2015</h5>
    <p class="card-text"> Contamos con la Certificación ISO 9001 obtenida en el 2015.</p>
      </div>
</div>

<div class="card" style="width: 15%; float: left; margin-left: 8%;">
  <img class="card-img-top" src="@/assets/img/home/LegendTrophy.png" alt="Card image cap" style="width: 35%; heigth: 35%;">
  <div class="card-body">
    <h5 class="card-title">IATF:16949-2016</h5>
    <p class="card-text">Contamos con la Certificación IATF:16949.2016 obtenida en el 2016.</p>
      </div>
</div>
</div>

      </div>
    </div>


    <div class="row">
      <div class="col-12 mb-4">
        <h1 class="main-header">Nuestra Filosofía</h1>
        <div class="filosofia-detalle mt-4 mision">
          <h3 class="text-center">Misión</h3>
          <p class="text-justify main-text">
            Participar en la creación y desarrollo de negocios garantizado el
            equilibrio de las partes interesadas mediante estrategias tanto
            ecológicas como administrativas para establecer relaciones
            comerciales duraderas con nuestros clientes al igual que asegurar
            nuestra permanencia en el mercado automotriz.
          </p>
        </div>
        <div class="filosofia-detalle mt-4 mision">
          <h3 class="text-center">Visión</h3>
          <p class="text-justify main-text mb-5">
            Ser una organización líder en el mercado nacional con presencia
            mundial en la fabricación de componentes automotrices para sistemas
            de escape y chasis pero manteniendo la búsqeuda constante de nuevos
            mercados al igual que estar al día con las tendencias de desarrollo
            tecnológico en nuestros procesos para asegurar nuestra permanencia
            en el mercado global a mediano y largo plazo.
          </p>
        </div>
        <div class="row">
          <div class="col-12 col-sm-4">
            <div class="filosofia-valores mt-3">
                <div class="div-imagen" style="width: 100%;">
              <div>
               <h3 class="text-center" style="margin-top: 40%">Unir talento y esfuerzos enfocados a nuestros objetivos.</h3>
              </div>
              <img class="desvanecer"
                width="100%"
                src="@/assets/img/home/filosofia_Trabajo_en_equipo.jpg"
                alt="img_filosofia_Trabajo_en_equipo"
              />
               </div>
            </div>
          </div>
          <div class="col-12 col-sm-4">
            <div class="filosofia-valores mt-3">
              <div class="div-imagen" style="width: 100%;">
              <div>
                 <h3 class="text-center" style="margin-top: 60%;">Nunca comprometer nuestra ética. </h3>
              </div>
              <img class="desvanecer"
                width="100%"
                style="object-fit: cover"
                src="@/assets/img/home/filosofia_honestidad.jpg"
                alt="img_filosofia_honestidad"
              />
               </div>
            </div>
          </div>
          <div class="col-12 col-sm-4">
            <div class="filosofia-valores mt-3">
              <div class="div-imagen" style="width: 100%;">
              <div>
                <h3 class="text-center" style="margin-top: 40%">Aceptar los resultados de nuestras acciones.</h3>
              </div>
              <img class="desvanecer"
                width="100%"
                style="object-fit: cover"
                src="@/assets/img/home/filosofia_responsabilidad.jpg"
                alt="img_filosofia_responsabilidad"
              />
               </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-12 mb-4">
        <h1 class="main-header">Pilares</h1>
        <div class="row">
          <div class="col-12 col-sm-4 mt-4">
            <div class="filosofia-pilares">
              <div class="div-imagen" style="width: 100%;">
              <div>
               <h3 class="text-center" style="margin-top: 40%">Promover la integración y participación</h3>
              </div>
              <img class="desvanecer"
                width="100%"
                style="object-fit: cover"
                src="@/assets/img/home/pilares_familia.jpg"
                alt="img_pilares_familia"
              />
               </div>
            </div>
          </div>
          <div class="col-12 col-sm-4 mt-4">
            <div class="filosofia-pilares">
              <div class="div-imagen" style="width: 100%;">
              <div>
                <h3 class="text-center" style="margin-top: 40%">Responsabilidad social y altruista</h3>
              </div>
              <img class="desvanecer"
                width="100%"
                style="object-fit: cover"
                src="@/assets/img/home/pilar_comunidad.jpg"
                alt="img_pilar_comunidad"
              />
               </div>
            </div>
          </div>
          <div class="col-12 col-sm-4 mt-4">
            <div class="filosofia-pilares">
              <div class="div-imagen" style="width: 100%;">
              <div>
               <h3 class="text-center" style="margin-top: 40%">Apoyar actividades deportivas. </h3>         
              </div>
              <img class="desvanecer"
                width="100%"
                style="object-fit: cover"
                src="@/assets/img/home/pilar_deporte.jpg"
                alt="img_pilar_deporte"
              /> 
              </div>
            </div>
          </div>
          <div class="col-12 col-sm-4 mt-4">
            <div class="filosofia-pilares">
              <div class="div-imagen" style="width: 100%;">
              <div>
                <h3 class="text-center" style="margin-top: 40%">Promover actividades culturales.</h3>
              </div>
              <img class="desvanecer"
                width="100%"
                style="object-fit: cover"
                src="@/assets/img/home/pilar_cultura.jpg"
                alt="img_pilar_cultura"
              />
            </div>
             </div>
          </div>
          <div class="col-12 col-sm-4 mt-4">
            <div class="filosofia-pilares">
              <div class="div-imagen" style="width: 100%;">
              <div>
                <h3 class="text-center" style="margin-top: 40%">Promover, concientizar, propiciar, capacitar y cumplir con las normas de Seguridad e Higiene.</h3>
              </div>
              <img class="desvanecer"
                width="100%"
                style="object-fit: cover"
                src="@/assets/img/home/pilar_seguridad.jpg"
                alt="img_pilar_seguridad"
              />
               </div>
            </div>
          </div>
          <div class="col-12 col-sm-4 mt-4">
            <div class="filosofia-pilares">
              <div class="div-imagen" style="width: 100%;">
              <div>
                <h3 class="text-center" style="margin-top: 40%">Participar en la comunidad y el entorno con acciones que garanticen la permanencia armoniosa a largo plazo.</h3>
              </div>
              <img class="desvanecer"
                width="100%"
                style="object-fit: cover"
                src="@/assets/img/home/pilar_sustentable.jpg"
                alt="img_pilar_sustentable"
              />
               </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-12">
        <h1 class="main-header">Políticas</h1>
        <div class="politicas-detail">
          <h2 class="second-header mt-4">Calidad</h2>
          <p class="main-text">
            Nuestra política de calidad se basa en brindar productos y servicios
            que cubran las necesidades de nuestros clientes pero sobre todo que
            supere sus expectativas gracias a nuestro sistema de gestión eficaz
            desde la calidad, oportunidad, confiabilidad y precio, además de:
          </p>
          <ul>
            <li>
              Contar con medio de participación de todo el personal en un
              sistema de mejora continua en nuestros procesos de fabricación y
              servicios.
            </li>
            <li>
              Hemos establecido sistemas óptimos de capacitación que contribuyen
              al desarrollo íntegro de nuestro personal.
            </li>
            <li>
              Estamos dispuestos a mantener recursos humanos, recursos
              materiales y financiero permanentes para cubrir requerimientos
              actuales y futuros de nuestros clientes y otras partes
              interesadas.
            </li>
            <li>
              Buscamos y establecemos alianzas estratégicas con clientes y
              proveedores compettivos a nivel global.
            </li>
            <li>
              Fomentamos el desarrollo tecnológico en todas nuestras áreas, esto
              con el fin de responder la demanda constante de nuestros clientes
              en estos tiempos de competencia mundial.
            </li>
            <li>
              Optimizamos los costos e incrementamos los niveles de
              productividad global.
            </li>
          </ul>
        </div>
        <div class="politicas-detail">
          <h2 class="second-header mt-4">Ambiental</h2>
          <p class="main-text">
            Somos una empresa comprometida y responsable con el medio ambiente
          </p>
          <ul>
            <li>
              Nuestros desarrollos, procesos de fabricación de soportes
              automotrices y su distribución son constantemente evaluados para
              garantizar la reducción, control y tratamiento adecuado de
              nuestros residuos peligrosos y uso eficiente de los recursos, con
              el único fin de prevenir la contaminación, proteger nuestro medio
              ambiente, promover el desarrollo humano y un trabajo con seguridad
              e higiene para nuestro personal.
            </li>
            <li>
              Alcanzar nuestras metas, objetivos, cumpliendo con los requisitos
              legales, normas y reglamentos gubernamentales.
            </li>
            <li>
              Es preocupación de todo nuestro personal por lo que es necesaria
              la involucración, capacitación y compromiso de todos incluyendo a
              todos nuestros proveedores y clientes. Comprometiéndonos en
              alcanzar la mejroa continua.
            </li>
          </ul>
        </div>
        <div class="politicas-detail">
          <h2 class="second-header mt-4">Ética Empresarial</h2>
          <p class="main-text">Declaración Minerales en Conflicto</p>
          <ul>
            <li>
              "Minerales en Conflicto", generadors en la República Democrática
              del Congo y países vecinos, son los derivados de la explotación
              bajo uso de violencia para financiar grupos armados de la región.
              Estos minerales en conflicto son los establecidos bajo la Reforma
              Financiera 4173 sección 1502 de los Estados Unidos de
              Norteamérica; los caules considera: Tungsteno, Tantalio, Estaño y
              Oro.
            </li>
            <li>
              En Stell & Trucks nos aseguramos que todos nuestros productos
              están libres del uso de minerales desde el inicio de la cadena de
              suministro preocupándonos por fomentar a nuestros proveedores y
              colaboradores la importancia el impacto que tiene el uso de éstos
              minerales.
            </li>
          </ul>
        </div>
        <div class="row">
          <div class="mx-auto mt-4 mb-5">
            <router-link class="btn-general" :to="{ name: 'contact' }"
              ><span>Contacto</span></router-link
            >
            <!-- <button class="btn-general">Contacto</button> -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
};
</script>

<style>
.logros li {
  margin-left: 1em;
  margin-top: 1em;
  font-size: 1.1em;
}

.politicas-detail li {
  margin-left: 1em;
  color: #072654;
  font-size: 1em;
}

.filosofia-detalle h3 {
  font-weight: bold;
  color: #072654;
}

</style>
