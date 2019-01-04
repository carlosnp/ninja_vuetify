<template>
<div class="gridtest">

  <h1 class="subheading grey--text">Grid Page</h1>

  <v-container fluid class="my-5">
    <!-- card 1 -->
    <v-card flat class="pa3">
      <v-layout row wrap>
        <v-flex xs12 md6>
          <div class="caption grey--text">Titulos del Proyecto</div>
          <div>Crea un Nuevo Sitio Web</div>
        </v-flex>
        <v-flex xs6 sm4 md2>
          <div class="caption grey--text">Persona</div>
          <div>Ninjako</div>
        </v-flex>
        <v-flex xs6 sm4 md2>
          <div class="caption grey--text">Realizado</div>
          <div>Enero 2019</div>
        </v-flex>
        <v-flex xs2 sm4 md2>
          <div class="caption grey--text">Estado</div>
          <div>Doing</div>
        </v-flex>
      </v-layout>
    </v-card>
    <!-- Fila 1 -->
    <v-layout row wrap>
      <v-flex xs12 md6>
        <v-btn outline block class="primary"> 1 </v-btn>
      </v-flex>
      <v-flex xs12 md6>
        <v-btn outline block class="primary"> 2 </v-btn>
      </v-flex>
    </v-layout>
    <!-- fila 2 -->
    <v-layout row wrap>
      <v-flex xs12 md6>
        <v-btn outline block class="info"> 3 </v-btn>
      </v-flex>
      <v-flex xs4 md2>
        <v-btn outline block class="info"> 4 </v-btn>
      </v-flex>
      <v-flex xs4 md2>
        <v-btn outline block class="info"> 5 </v-btn>
      </v-flex>
      <v-flex xs4 md2>
        <v-btn outline block class="info"> 6 </v-btn>
      </v-flex>
    </v-layout>
    <!-- fila 3 -->
    <v-layout row wrap justify-space-around>
      <v-flex xs4 md3>
        <v-btn outline block class="success"> 7 </v-btn>
      </v-flex>
      <v-flex xs4 md3>
        <v-btn outline block class="success"> 8 </v-btn>
      </v-flex>
    </v-layout>
    

  </v-container>

</div>
</template>