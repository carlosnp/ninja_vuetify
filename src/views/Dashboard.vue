<template>
<div class="dashboard">

  <h1 class="subheading grey--text">Dashboard Page</h1>

  <v-container fluid class="my-5">

    <v-data-table 
      :headers="headers"
      :items="projects"
      class="elevation-1">
      <template slot="items" slot-scope="props">
        
          <td :class="`${props.item.status}`"> {{ props.item.id }} </td>
          <td> {{ props.item.title }} </td>
          <td> {{ props.item.person }} </td>
          <td class="caption grey--text"> {{ props.item.due }} </td>
          <td> 
            <v-chip small :class="`${props.item.status} white--text caption my-2`"> 
              {{ props.item.status }} 
            </v-chip> 
          </td>
          <td>
            <v-btn fab small dark>
              <v-icon @click="deleteItem(props.item.id)">delete_sweep</v-icon>
            </v-btn>
            <v-btn fab small dark>
              <v-icon>edit</v-icon>
            </v-btn>
          </td>
      </template>

      <!-- <template slot="expand" slot-scope="props">
        <v-card flat>
          <v-card-text> {{ props.item.content }} </v-card-text>
        </v-card>
      </template> -->

    </v-data-table>

  </v-container>

</div>
</template>

<script>

import db from '@/fb'

export default {
  data() {
    return {
      id:"",
      projects: [],
      headers: [
        {text: 'ID', align: 'left',value: 'id'},
        {text: 'Proyecto', align: 'left',value: 'title'},
        {text: 'Autor', align: 'left',value: 'person'},
        {text: 'Fecha', align: 'left',value: 'due'},
        {text: 'Status', align: 'left',value: 'status'},
        {text: 'Actions', align: 'left',value: 'id'},
      ],
    }
  },
  methods: {
    sortBy(prop){
      this.projects.sort((a,b) => a[prop] < b[prop] ? -1 : 1)
    },
    deleteItem(item) {
      // console.log(item);
      db.collection('projects').doc(item).delete().then(() => {
        // console.log("Se ha eliminado el proyecto!!!");
        this.$emit('projectDeleted');
      })
      // .catch(function(error) {
      //     // console.error("Error: ", error);
      // });
    },
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
  },
}
</script>

<style scoped>
.complete{
  border-left: 4px solid #3CD1C2;
}
.ongoing{
  border-left: 4px solid orange;
}
.overdue{
  border-left: 4px solid tomato;
}
td {
  padding-bottom: 5px;
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