<template>
<div class="team">
	<h1 class="subheading grey--text">Team Page</h1>
	<v-container fluid class="my-5">
		<!-- Fila de elementos -->
		<v-layout row wrap>
			<v-flex xs12 sm6 md4 lg3 v-for="person in team" :key="person.name">
				<v-card flat class="text-xs-center ma-3">
					<v-responsive class="pt-4">
						imagen
					</v-responsive>
					<!-- Card con el nombre y el rol de cada persona -->
					<v-card-text>
						<div class="subheading">{{ person.name }}</div>
						<div class="grey--text">{{ person.role }}</div>
					</v-card-text>
					<!-- Card para botones -->
					<v-card-actions>
						<v-btn flat color="grey">
							<v-icon small left>message</v-icon>
							<span>Mensaje</span>
						</v-btn>
					</v-card-actions>
				</v-card>
			</v-flex>
		</v-layout>
	</v-container>


</div>
</template>

<script>
  

export default {
	data() {
		return {
			team: [
				{ name: 'The Net Ninja', role: 'Web developer' },
				{ name: 'Ryu', role: 'Graphic designer' },
				{ name: 'Chun Li', role: 'Web developer' },
				{ name: 'Gouken', role: 'Social media maverick' },
				{ name: 'Yoshi', role: 'Sales guru'}
			]
		}
	}
}
</script>