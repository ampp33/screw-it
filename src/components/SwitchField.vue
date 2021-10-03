<template>
	<div class="row">
		<div class="container">
			<div class="row">
				<div class="col-2">
					<label class="{ 'col-form-label' : !readOnly }">{{ field.name }}:</label>
				</div>
				<!-- read-only elements for viewing switch values only -->
				<div class="col-2" v-if="readOnly">
					<div v-if="isText || isSelect">{{ value }}</div>
					<input class="form-range" v-if="isSlider" type="range" v-model="value" disabled="true" />
					<input type="color" class="form-control form-control-color" v-if="isColor" v-model="value" disabled="true" >
				</div>
				<!-- non-read-only elements for editing switch values -->
				<div class="col-2" v-if="!readOnly">
					<select class="form-select" v-if="isSelect" v-model="value" @change="propagateChanges">
						<option v-for="choice in field.options" :key="choice">{{choice}}</option>
					</select>
					<input type="color" class="form-control form-control-color" v-if="isColor" v-model="value" @change="propagateChanges" >
					<input class="form-control" v-if="isText" :type="inputType" v-model="value" @change="propagateChanges" />
					<input class="form-range" v-if="isSlider" type="range" v-model="value" @change="propagateChanges" />
				</div>
				<div class="col-1">
					<button type="button" class="btn btn-secondary" @click="toggleReferences" aria-label="Mute">
						<i class="bi-journal-check"></i>
					</button>
				</div>
			</div>
			<div class="row" v-if="editReferences">
				<h5>References</h5>
				<div class="row" v-for="(reference, index) in references" :key="index">
					<div class="col-auto">
						<label class="col-form-label">{{ index + 1 }}</label>
					</div>
					<div class="col-8">
						<input type="text" class="form-control" v-model="references[index]" @change="propagateChanges" />
					</div>
					<div class="col-auto">
						<button type="button" class="btn btn-danger" v-if="!isFirstReference(index)" @click="deleteReference(index)">X</button>
						<button type="button" class="btn btn-primary" v-if="isLastReference(index)" @click="addReference">+</button>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	props: [ 'field', 'readOnly' ],
	data() {
		return {
			value: '',
			references: [],
			editReferences: false
		}
	},
	created() {
		this.value = this.field.value;
		this.references = this.field.references;
	},
	computed: {
		isSelect() {
			return this.field.type === 'select';
		},
		isColor() {
			return this.field.type === 'color';
		},
		isText() {
			return this.field.type === 'text' || (!this.isSelect && !this.isColor && !this.isSlider);
		},
		isSlider() {
			return this.field.type === 'slider';
		},
		inputType() {
			if(this.field.type) return this.field.type;
			return 'text';
		}
	},
	methods: {
		propagateChanges() {
			this.$emit('value-change', this.field.name, this.value, this.references);
		},
		isFirstReference(index) {
			return index === 0;
		},
		isLastReference(index) {
			return index + 1 === this.references.length;
		},
		toggleReferences() {
			this.editReferences = !this.editReferences;
			this.addReference();
		},
		addReference() {
			if(!this.references) this.references = [];
			// don't add a new reference if the last item in the list is still empty/not filled in
			if(this.references[this.references.length - 1] === '') return;
			this.references.push('');
		},
		deleteReference(index) {
			this.references.splice(index, 1);
		}
	}
}
</script>

<style>
.row {
	padding: 5px;
}
</style>
