<template>
<div class="dashboard">

  <h1 class="subheading grey--text">Dashboard Page</h1>

  <v-container fluid class="my-5">
    <!-- Botones para ordenar los proyectos segun el nombre o el titulo -->
    <v-layout row wrap class="mb-3">
      <!-- Ordena segun el titulo -->
      <v-tooltip top>
        <v-btn small flat color="grey" @click="sortBy('title')" slot="activator">
          <v-icon left small>folder</v-icon>
          <span class="caption text-lowercase"> por nombre del Proyecto </span>
        </v-btn>
        <span>Ordena los proyectos por nombre</span>
      </v-tooltip>
      <!-- Ordena segun el nombre -->
      <v-tooltip top>
        <v-btn small flat color="grey" @click="sortBy('person')" slot="activator">
          <v-icon left small>person</v-icon>
          <span class="caption text-lowercase"> por Persona </span>
        </v-btn>
        <span>Ordena los proyectos por persona</span>
      </v-tooltip>
    </v-layout>

    <!-- card 1 -->
    <v-card flat class="pa-1" v-for="project in projects" :key="project.title">
      <v-layout row wrap :class="`pa-3 project ${project.status}`">
        <v-flex xs12 md6>
          <div class="caption grey--text">Titulos del Proyecto</div>
          <div> {{ project.title }} </div>
        </v-flex>
        <v-flex xs6 sm4 md2>
          <div class="caption grey--text">Persona</div>
          <div> {{ project.person }} </div>
        </v-flex>
        <v-flex xs6 sm4 md2>
          <div class="caption grey--text">Realizado</div>
          <div> {{ project.due }} </div>
        </v-flex>
        <v-flex xs2 sm4 md2>
          <!-- <div class="caption grey--text">Estado</div> -->
          <!-- <div>{{ project.status }}</div> -->
          <div class="right">
            <v-chip small :class="`${project.status} white--text caption my-2`"> {{ project.status }} </v-chip>
          </div>
        </v-flex>
      </v-layout>
      <v-divider></v-divider>
    </v-card>

  </v-container>

</div>
</template>

<script>

import db from '@/fb'

export default {
  data() {
    return {
      projects: []
    }
  },
  methods: {
    sortBy(prop){
      this.projects.sort((a,b) => a[prop] < b[prop] ? -1 : 1)
    }
  },
  created() {
    db.collection('projects').onSnapshot(res => {
      const changes = res.docChanges();

      changes.forEach(change => {
        if (change.type === 'added') {
          this.projects.push({
            ...change.doc.data(),
            id: change.doc.id
          })
        }
      })
    })
  }
}
</script>

<style>

.project.complete{
  border-left: 4px solid #3CD1C2;
}
.project.ongoing{
  border-left: 4px solid orange;
}
.project.overdue{
  border-left: 4px solid tomato;
}

.v-chip.complete{
  background: #3cd1c2;
}
.v-chip.ongoing{
  background: #ffaa2c;
}
.v-chip.overdue{
  background: #f83e70;
}

</style>