<template>
	<div>
		<h1>Switches</h1>
		<table class="table table-hover">
			<thead>
				<tr>
					<th></th>
					<th v-for="colName in displayColumns" :key="colName" scope="col">{{ colName }}</th>
				</tr>
			</thead>
		<tbody>
			<tr v-for="s in switches" :key="s.switch_id">
				<td><a :href="'/view?switch_id=' + s.switch_id"><i class="bi-box-arrow-in-left"></i></a></td>
				<td v-for="colName in displayColumns" :key="s.switch_id + ':' + colName" scope="col">
					{{ getValue(s, colName) }}
				</td>
			</tr>
		</tbody>
		</table>
	</div>
</template>

<script>
export default {
	data() {
		return {
			displayColumns: [
				'Manufacturer',
				'Name',
				'Type',
				'Mount',
				'Top Material',
				'Bottom Material',
				'Stem Material',
				'Operating (g)',
				'Actuation (mm)',
				'Total Travel (mm)'
			],
			switches: []
		}
	},
	methods: {
		getValue: function(s, fieldName) {
			return (s.fields.find(field => field.name === fieldName)).value;
		},
		simplifySwitchList(switchData) {
			var result = [];
			for(const s of switchData) {
				const currentSwitch = {
					switch_id: s.switch_id,
					fields: []
				};
				result.push(currentSwitch);
				for(const cat of s.switchCategories) {
					for(const field of cat.fields) {
						currentSwitch.fields.push({
							field_id: field.field_id,
							name: field.name,
							value: field.value
						});
					}
				}
			}
			return result;
		}
	},
	beforeMount() {
		const self = this;
		fetch('http://localhost:8081/api/search')
		.then(res => res.json())
		.then(data => {
			self.switches = self.simplifySwitchList(data);
		});
	}
}
</script>

<style>

</style>
