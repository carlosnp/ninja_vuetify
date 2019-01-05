<template>
    <nav>
        <v-toolbar flat app>
            
            <v-toolbar-side-icon class="grey--text" @click="drawer = !drawer"></v-toolbar-side-icon>
            <!-- Titulo de la barra de navegacion -->
            <v-toolbar-title class="text-uppercase grey--text">
                <span class="font-weight-light">
                    Todo
                </span>
                <span>Ninja</span>
            </v-toolbar-title>

            <v-spacer></v-spacer>
            <v-btn flat color="grey">
                <span>Sign Out</span>
                <v-icon right >exit_to_app</v-icon>
            </v-btn>

        </v-toolbar>
        <!-- acoorden de links -->
        <v-navigation-drawer v-model="drawer" app class="success">
            <v-layout column align-center>
              <v-flex class="mt-5">
                <v-avatar size="100">
                  <img src="/avatar-4.png" alt="">
                </v-avatar>
                <p class="white--text subheading mt-1">
                  Gouken Ninja
                </p>
              </v-flex>
            </v-layout>
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
export default {
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
        }
    }
}
</script>