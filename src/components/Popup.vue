<template>
	<v-dialog max-width="600px" v-model="dialog">
    <!-- Boton -->
	<v-btn flat slot="activator" class="primary">Nuevo Proyecto</v-btn>
  <!-- tarjeta -->
	<v-card>
    <v-card-title>
      <h2>Nuevo Proyecto</h2>
    </v-card-title>
    <!-- Formulario -->
    <v-card-text>
      <v-form class="px-3" ref="form">
        <!-- Campo para el titulo -->
        <v-text-field
          name="titulo"
          label="Titulo:"
          id="id" 
          v-model="title"
          prepend-icon="folder" 
          :rules="inputRules"></v-text-field>
        <!-- Campo para el contenido -->
        <v-textarea 
        name="content" 
        label="Contenido:" 
        v-model="content" 
        prepend-icon="edit" 
        :rules="inputRules"></v-textarea>
        <!-- Fecha -->
        <v-menu>
          <!-- Campo para seleccionar la Fecha -->
          <v-text-field 
          :value="formattedDate" 
          slot="activator" 
          label="Fecha" 
          prepend-icon="date_range" 
          :rules="inputRules">
          </v-text-field>
          <!-- Calendario -->
          <v-date-picker v-model="due"></v-date-picker>
        </v-menu>

        <v-spacer></v-spacer>
        <!-- Boton -->
        <v-btn flat @click="submit" class="primary mx-0 mt-3" :loading="loading">Añadir Nuevo Proyecto</v-btn>
      </v-form>
    </v-card-text>
	</v-card>

	</v-dialog>
</template>

<script>

import format from 'date-fns/format'
import db from '@/fb'
export default {
  data() {
    return {
      title: "",
      content: "",
      due: null,
      inputRules: [
        v => v.length >= 3 || 'Este campo es requerido'
      ],
      loading: false,
      dialog: false,
    }
  },
  methods: {
    submit() {
      if(this.$refs.form.validate()) {
        this.loading = true;
        const project = {
          title: this.title,
          content: this.content,
          due: format(this.due, 'Do MMM YYYY'),
          person: 'The Net Ninja',
          status: 'ongoing'
        }
        db.collection('projects').add(project).then(() => {
          this.loading = false;
          this.dialog = false;
        })
      }
    }
  },
  computed: {
    formattedDate() {
      return this.due ? format(this.due, 'Do MMM YYYY') : ''
    }
  } 
}	
</script>