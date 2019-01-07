<template>
    <nav>
      <!-- Aviso cuando se suben datos a la base de datos -->
      <v-snackbar v-model="snackbar" :timeout="4000" top color="info">
        <span>Awesome!!! Añadiste un nuevo proyecto</span>
        <v-btn flat color="white" @click="snackbar = false">Cerrar</v-btn>
      </v-snackbar>
      <!-- Aviso de eliminacion de proyecto -->
      <div @projectDeleted="snackbarDelete = true">
      <v-snackbar v-model="snackbar" :timeout="4000" top color="info">
        <span>Delete!!! Eliminaste un proyecto</span>
        <v-btn flat color="white" @click="snackbarDelete = false">Cerrar</v-btn>
      </v-snackbar>
      </div>
      <!-- Barra de navegacion -->
      <v-toolbar flat app>
        <!-- Icono hamburger -->
        <v-toolbar-side-icon class="grey--text" @click="drawer = !drawer"></v-toolbar-side-icon>
        <!-- Titulo de la barra de navegacion -->
        <v-toolbar-title class="text-uppercase grey--text">
            <span class="font-weight-light">
                Todo
            </span>
            <span>Ninja</span>
        </v-toolbar-title>
        <!-- Espacio entre elementos -->
        <v-spacer></v-spacer>
        <!-- Menu -->
        <v-menu offset-y>

          <v-btn flat color="grey" slot="activator">
            <span>Menu</span>
            <v-icon left>expand_more</v-icon>
          </v-btn>
          
          <v-list>
            <v-list-tile v-for="link in links" :key="link.text" router :to="link.route">
              <v-list-tile-title>{{ link.text }}</v-list-tile-title>
            </v-list-tile>
          </v-list>

        </v-menu>

        <!-- Boton sign out -->
        <v-btn flat color="grey">
            <span>Sign Out</span>
            <v-icon right >exit_to_app</v-icon>
        </v-btn>

      </v-toolbar>
        <!-- acoordeon de links -->
        <v-navigation-drawer v-model="drawer" app class="success">
          <!-- Avatar -->
            <v-layout column align-center>
              <v-flex class="mt-5">
                <v-avatar size="100">
                  <img src="/avatar-4.png" alt="">
                </v-avatar>
                <p class="white--text subheading mt-1">
                  Gouken Ninja
                </p>
              </v-flex>
              <!-- Popup -->
              <v-flex>
                <Popup @projectAdded="snackbar = true"></Popup>
              </v-flex>
            </v-layout>
            <!-- Lista de links -->
            <v-list>
                <v-list-tile v-for="link in links" :key="link.text" router :to="link.route">

                    <v-list-tile-action>
                        <v-icon class="white--text">{{ link.icon }}</v-icon>
                    </v-list-tile-action>

                    <v-list-tile-content>
                        <v-list-tile-title class="white--text">{{ link.text }}</v-list-tile-title>                
                    </v-list-tile-content>

                </v-list-tile>
            </v-list>
        </v-navigation-drawer>

    </nav>
</template>


<script>

import Popup from './Popup'

export default {
  components: { Popup },
  data() {
      return {
          drawer: false,
          links: [
              { icon: 'dashboard', text: 'Dashboard', route: '/' },
              { icon: 'folder', text: 'Mis Proyectos', route: '/projects' },
              { icon: 'person', text: 'Equipo', route: '/team' },
              { icon: 'gavel', text: 'Pruebas', route: '/pruebas' },
              { icon: 'build', text: 'Grid Test', route: '/grid' },
          ],
          snackbar: false,
          snackbarDelete: false,        
      }
  }
}
</script>