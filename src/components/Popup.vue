<template>
	<v-dialog max-width="600px">
    <!-- Boton -->
	<v-btn flat slot="activator" class="primary">Nuevo Proyecto</v-btn>
  <!-- tarjeta -->
	<v-card>
    <v-card-title>
      <h2>Nuevo Proyecto</h2>
    </v-card-title>
    <!-- Formulario -->
    <v-card-text>
      <v-form class="px-3">
        <!-- Campo para el titulo -->
        <v-text-field
          name="titulo"
          label="Titulo:"
          id="id" 
          v-model="title"
          prepend-icon="folder"></v-text-field>
        <!-- Campo para el contenido -->
        <v-textarea 
        name="content" 
        label="Contenido:" 
        v-model="content" 
        prepend-icon="edit"></v-textarea>
        <!-- Fecha -->
        <v-menu>
          <!-- Campo para seleccionar la Fecha -->
          <v-text-field :value="formattedDate" slot="activator" label="Fecha" prepend-icon="date_range">
          </v-text-field>
          <!-- Calendario -->
          <v-date-picker v-model="due"></v-date-picker>
        </v-menu>

        <v-spacer></v-spacer>
        <!-- Boton -->
        <v-btn flat @click="submit" class="primary mx-0 mt-3">Añadir Nuevo Proyecto</v-btn>
      </v-form>
    </v-card-text>
	</v-card>

	</v-dialog>
</template>

<script>

import format from 'date-fns/format'

export default {
  data() {
    return {
      title: "",
      content: "",
      due: null,
    }
  },
  methods: {
    submit() {
      console.log(this.title, this.content)
    }
  },
  computed: {
    formattedDate() {
      return this.due ? format(this.due, 'Do MMM YYYY') : ''
    }
  } 
}	
</script>