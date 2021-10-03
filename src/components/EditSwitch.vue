<template>
	<div class="container">
		<div v-for="category in switchCategories" :key="category.id">
			<h2>{{ category.name }}</h2>
			<SwitchField
					v-for="field in category.fields"
					:key="field.id"
					:field="field"
					@value-change="fieldValueChange" />
		</div>
		<button type="submit" class="btn btn-primary" @click.stop.prevent="editSwitch">Save Edits</button>
	</div>
</template>

<script>
import SwitchField from './SwitchField.vue'

export default {
  name: 'App',
  components: {
    SwitchField
  },
	data() {
		return {
			switchCategories: []
		}
	},
	methods: {
		fieldValueChange(fieldName, value, reference) {
			var field;
			for(const category of this.switchCategories) {
				field = category.fields.find(field => field.name === fieldName);
				if(field) break;
			}
			console.log('updating field ""' + fieldName + '""');
			field.value = value;
			if(reference) {
				console.log('updating reference');
				field.reference = reference;
			}
		},
		editSwitch() {
			var self = this;
			fetch('http://localhost:8081/api/switch', {
				method: 'PUT',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({
					switchData: JSON.stringify(self.switchCategories),
					userId: 'ampp33'
				})
			})
			.then(res => {
				console.log('attempted to create switch, response: ' + res.status);
				if(res.status === 200) {
					// redirect to main switch list
					self.$router.push('/search');
				}
			});
		}
	},
	beforeMount() {
		const self = this;
		const switchId = this.$route.query.switch_id;
		var searchUrl = 'http://localhost:8081/api/search?switch_id=' + switchId;
		console.log(searchUrl);
		fetch(searchUrl)
		.then(res => res.json())
		.then(data => {
			self.switchCategories = data[0].switchCategories;
		});
	}
}
</script>

<style>
.container {
	margin-left: 5px;
}
</style>
