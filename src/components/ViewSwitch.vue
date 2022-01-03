<template>
	<h1>Create Switch</h1>
		<div class="container">
			<div class="row">
				<div class="col-md-auto">
					<label class="mb-3 img-upload">
						<img height="300" width="300" :src="derp" />
					</label>
				</div>
				<div class="col">
					<ul class="nav nav-tabs" id="myTab" role="tablist">
						<li class="nav-item" role="presentation">
							<button class="nav-link active" id="details-tab" data-bs-toggle="tab" data-bs-target="#details" type="button" role="tab" aria-controls="details" aria-selected="true">Details</button>
						</li>
						<li class="nav-item" role="presentation">
							<button class="nav-link" id="materials-tab" data-bs-toggle="tab" data-bs-target="#materials" type="button" role="tab" aria-controls="materials" aria-selected="false">Materials</button>
						</li>
						<li class="nav-item" role="presentation">
							<button class="nav-link" id="purchasing-tab" data-bs-toggle="tab" data-bs-target="#purchasing" type="button" role="tab" aria-controls="purchasing" aria-selected="false">Purchasing</button>
						</li>
						<li class="nav-item" role="presentation">
							<button class="nav-link" id="references-tab" data-bs-toggle="tab" data-bs-target="#references" type="button" role="tab" aria-controls="references" aria-selected="false">References</button>
						</li>
					</ul>
					<div class="tab-content" id="myTabContent">
						<div class="tab-pane fade show active" id="details" role="tabpanel" aria-labelledby="details-tab">
							<div class="input-column">
								<div class="input-group">
									<label class="fw-bold">Name:</label>
									<label>{{switchData.name}}</label>
								</div>
								<div class="input-group">
									<label class="fw-bold">Series:</label>
									<label>{{switchData.series}}</label>
								</div>
								<div class="input-group">
									<label class="fw-bold">Manufacturer:</label>
									<label>{{switchData.manufacturer}}</label>
								</div>
								<div class="input-group">
									<label class="fw-bold">Type:</label>
									<label>{{switchData.type}}</label>
								</div>
								<div class="input-group">
									<label class="fw-bold">Mount:</label>
									<label>{{switchData.mount}}</label>
								</div>
							</div>
							<div class="input-column">
								<div class="input-group">
									<label class="fw-bold">Silent:</label>
									<input type="checkbox" aria-describedby="slient" v-model="switchData.is_silent" disabled>
								</div>
								<div class="input-group">
									<label class="fw-bold">Operating Force:</label>
									<label>{{switchData.actuation_weight}}g</label>
								</div>
								<div class="input-group">
									<label class="fw-bold">Bottom Force:</label>
									<label>{{switchData.bottom_out_weight}}g</label>
								</div>
								<div class="input-group">
									<label class="fw-bold">Actuation:</label>
									<label>{{switchData.pre_travel}}g</label>
								</div>
								<div class="input-group">
									<label class="fw-bold">Total Travel:</label>
									<label>{{switchData.total_travel}}g</label>
								</div>
							</div>
						</div>
						<div class="tab-pane fade" id="materials" role="tabpanel" aria-labelledby="materials-tab">
							<div class="input-column">
								<div class="input-group">
									<label class="fw-bold">Top Material:</label>
									<label>{{switchData.top_material}}</label>
									<div v-bind:style="{ border: '1px solid black', height: '25px', width: '200px', backgroundColor: '#' + switchData.top_color }"></div>
								</div>
								<div class="input-group">
									<label class="fw-bold">Bottom Material:</label>
									<label>{{switchData.bottom_material}}</label>
									<div v-bind:style="{ border: '1px solid black', height: '25px', width: '200px', backgroundColor: '#' + switchData.bottom_color }"></div>
								</div>
								<div class="input-group">
									<label class="fw-bold">Stem Material:</label>
									<label>{{switchData.stem_material}}</label>
									<div v-bind:style="{ border: '1px solid black', height: '25px', width: '200px', backgroundColor: '#' + switchData.stem_color }"></div>
								</div>
							</div>
						</div>
						<div class="tab-pane fade" id="purchasing" role="tabpanel" aria-labelledby="purchasing-tab">
							<label for="sitesandprices" class="form-label">Seller Sites</label>
							<p style="font-size: small">Specify the site URL and price (<b>per switch</b>) on each line, separating values with a pipe: |</p>
							<p style="font-size: small"><b>Example:</b> http://www.google.com|0.35</p>
							<textarea class="form-control" id="sitesandprices" rows="8" v-model="switchData.listings"></textarea>
						</div>
						<div class="tab-pane fade" id="references" role="tabpanel" aria-labelledby="references-tab">
							<label for="referencestext" class="form-label">References</label>
							<p style="font-size: small">Specify URLs where information on this switch can be found, separting each URL by a newline</p>
							<textarea class="form-control" id="referencestext" rows="8" v-model="switchData.references"></textarea>
						</div>
					</div>
				</div>
			</div>
			<button type="submit" class="btn btn-primary" @click.stop.prevent="createSwitch">Create</button>
			<button type="submit" class="btn btn-warning" @click.stop.prevent="doStuff">Stuff</button>
		</div>
</template>

<script>
export default {
	name: 'App',
	components: {
	},
	data() {
		return {
			switchData: {},
			purchasingData: {}
		}
	},
	methods: {
		parsePurchasingData() {
			console.log(this.switchData);
			//this.switchData.
		}
	},
	beforeMount() {
		const self = this;
		const switchId = this.$route.query.switch_id;
		var searchUrl = 'http://localhost:8081/api/search?switch_id=' + switchId;
		fetch(searchUrl)
		.then(res => res.json())
		.then(data => {
			console.log('loading!');
			self.switchData = data[0];
			this.parsePurchasingData();
		});
	}
}
</script>

<style>
	.hidden {
		display: none;
	}

	.container {
		margin-left: 5px;
	}

	.tab-pane {
		padding: 20px;
	}

	.img-upload {
		width: 300px;
		height: 300px;
		border: 1px solid #000;
		text-align: center;
	}

	.img-upload img {
		object-fit: cover;
	}

	.img-upload-icon {
		margin: 10px 20px 20px 20px;
	}

	.img-upload-text {
		margin-top: -15px;
	}

	.input-group {
		margin-top: 8px;
	}

	.input-group * {
		flex: none !important;
	}

	.input-group label {
		width: 130px !important;
	}

	.input-group input[type='text'], select {
		width: 180px !important;
	}

	.input-group input[type='number'] {
		width: 100px !important;
	}

	.input-group input[type='checkbox'] {
		margin-top: 11px;
	}

	.input-group input[type='color'] {
		width: 50px !important;
		height: 38px;
	}

	.input-column {
		width: 45%;
		float: left;
	}

</style>
