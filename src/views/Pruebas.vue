<template>
<div class="pruebas">
  <h1>Pruebas</h1>

  <h2>Buttons</h2>
  <v-btn class="pink white--text">click me</v-btn>
  <v-btn depressed dark color="pink">click me 2</v-btn>
  <v-btn flat color="pink">click me 3</v-btn>

  <v-btn depressed class="pink white--text">
    <v-icon left>email</v-icon>
    <span>email me</span>
  </v-btn>

  <v-btn depressed small class="pink white--text">
    <v-icon left small>email</v-icon>
    <span>email me</span>
  </v-btn>

  <v-btn depressed large class="pink white--text">
    <span>email me</span>
    <v-icon right large>email</v-icon>
  </v-btn>

  <v-btn fab depressed small dark color="purple">
    <v-icon>favorite</v-icon>
  </v-btn>

  <p>botones que aparecen o desaparecen segun el tamaño de la pantalla</p>
  <v-btn class="hidden-md-and-down">click me large view</v-btn>
  <v-btn class="hidden-md-and-up">click me 2 small view</v-btn>
  <v-btn class="hidden-sm-and-only">click me 3 olways</v-btn>
  
  <h2>Texto</h2>
  <p class="red white--text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati cum magni non repellat. Error pariatur culpa iste quia. Ullam impedit excepturi tempora architecto. Necessitatibus nesciunt, blanditiis asperiores atque perspiciatis cumque.</p>
  <p class="pink lighten-4 red--text text--darken-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum alias sed nesciunt iusto saepe voluptatem tempore nostrum in sapiente reiciendis labore magni, maiores blanditiis explicabo nemo minus incidunt consectetur! Molestiae.</p>
  <h1 class="display-4">Gran display</h1>
  <h4 class="display-1">Samall display</h4>
  <p class="headline font-weight-regular font-italic"> headline</p>
  <p class="subheading font-weight-bold">subheading</p>
  <p class="caption text-uppercase">caption</p>

</div>
</template>

<script>
  

export default {
}
</script>
