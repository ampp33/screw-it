<template>
	<h1>Create Switch</h1>
	<form>
			<div class="container">
				<div class="row">
					<div class="col-md-auto">
						<label class="mb-3 img-upload">
							<input class="hidden" type="file" accept="image/png, image/jpeg" @change="fileSpecified">
							<div class="img-upload-icon" v-if="!image">
								<svg width="100%" fill="#0d6efd" viewBox="0 0 16 16">
									<path d="M6.002 5.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/>
									<path d="M1.5 2A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-13zm13 1a.5.5 0 0 1 .5.5v6l-3.775-1.947a.5.5 0 0 0-.577.093l-3.71 3.71-2.66-1.772a.5.5 0 0 0-.63.062L1.002 12v.54A.505.505 0 0 1 1 12.5v-9a.5.5 0 0 1 .5-.5h13z"/>
								</svg>
								<div class="img-upload-text">
									Upload Image
								</div>
							</div>
							<img v-else height="300" width="300" :src="image" />
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
										<label for="name" class="col-form-label">Name</label>
										<input type="text" class="form-control" id="name" v-model="switchData.name">
									</div>
									<div class="input-group">
										<label for="series" class="col-form-label">Series</label>
										<input type="text" class="form-control" id="series" v-model="switchData.series">
									</div>
									<div class="input-group">
										<label for="manufacturer" class="col-form-label">Manufacturer</label>
										<input type="text" class="form-control" id="manufacturer" v-model="switchData.manufacturer">
									</div>
									<div class="input-group">
										<label for="type" class="col-form-label">Type</label>
										<select class="form-select" id="type" v-model="switchData.type">
											<option>Linear</option>
											<option>Tactile</option>
											<option>Clicky</option>
										</select>
									</div>
									<div class="input-group">
										<label for="mount" class="col-form-label">Mount</label>
										<select class="form-select" id="mount" v-model="switchData.mount">
											<option>Plate (3-pin)</option>
											<option>PCB (5-pin)</option>
										</select>
									</div>
								</div>
								<div class="input-column">
									<div class="input-group">
										<label for="slient" class="col-form-label">Silent</label>
										<input type="checkbox" class="form-check-input" aria-describedby="slient" v-model="switchData.is_silent">
									</div>
									<div class="input-group">
										<label for="operating" class="col-form-label">Operating Force</label>
										<input type="number" class="form-control" aria-describedby="operating" v-model="switchData.actuation_weight">
										<span class="input-group-text" id="operating">g</span>
									</div>
									<div class="input-group">
										<label for="bottom" class="col-form-label">Bottom Force</label>
										<input type="number" class="form-control" aria-describedby="bottom" v-model="switchData.bottom_out_weight">
										<span class="input-group-text" id="bottom">g</span>
									</div>
									<div class="input-group">
										<label for="actuation" class="col-form-label">Actuation</label>
										<input type="number" class="form-control" aria-describedby="actuation" v-model="switchData.pre_travel">
										<span class="input-group-text" id="actuation">mm</span>
									</div>
									<div class="input-group">
										<label for="totaltravel" class="col-form-label">Total Travel</label>
										<input type="number" class="form-control" aria-describedby="totaltravel" v-model="switchData.total_travel">
										<span class="input-group-text" id="totaltravel">mm</span>
									</div>
								</div>
							</div>
							<div class="tab-pane fade" id="materials" role="tabpanel" aria-labelledby="materials-tab">
								<div class="input-column">
									<div class="input-group">
										<label for="topmaterial" class="col-form-label">Top Material</label>
										<select class="form-select" id="topmaterial" v-model="switchData.top_material">
											<option v-for="mat in plasticMaterials" :key="mat">{{ mat }}</option>
										</select>
										<input type="color" class="form-control" aria-describedby="topcolor" v-model="switchData.top_color">
									</div>
									<div class="input-group">
										<label for="bottommaterial" class="col-form-label">Bottom Material</label>
										<select class="form-select" id="bottommaterial" v-model="switchData.bottom_material">
											<option v-for="mat in plasticMaterials" :key="mat">{{ mat }}</option>
										</select>
										<input type="color" class="form-control" aria-describedby="bottomcolor" v-model="switchData.bottom_color">
									</div>
									<div class="input-group">
										<label for="stemmaterial" class="col-form-label">Stem Material</label>
										<select class="form-select" id="stemmaterial" v-model="switchData.stem_material">
											<option v-for="mat in plasticMaterials" :key="mat">{{ mat }}</option>
										</select>
										<input type="color" class="form-control" aria-describedby="stemcolor" v-model="switchData.stem_color">
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
	</form>
</template>

<script>
export default {
	name: 'App',
	components: {
	},
	data() {
		return {
			switchData: {
				// set initial color values
				top_color: '#000000',
				bottom_color: '#000000',
				stem_color: '#000000',
			},
			image: false,
			plasticMaterials: [
				'ABS',
				'Polycarbonate (PC)',
				'POM',
				'UHMWPE',
				'Blend',
				'Proprietary',
				'Other'
			]
		}
	},
	methods: {
		fileSpecified(event) {
			var files = event.target.files || event.dataTransfer.files;
			if (!files.length)
				return;
			var reader = new FileReader();

			const self = this;
			reader.onload = (e) => {
				self.image = e.target.result;
			};
			reader.readAsDataURL(files[0]);
		},
		getPurchasingDataAsArray() {
			var output = [];
			if(this.switchData.listings) {
				var listingItems = this.switchData.listings.split(/\n/);
				for(const item of listingItems) {
					var tokens = item.split(/\|/);
					var url = tokens[0];
					var price = '';
					if(tokens.length > 1) {
						price = tokens[1];
					}
					output.push({
						url: url,
						price: price
					});
				}
			}
			return output;
		},
		doStuff() {
			this.getPurchasingDataAsArray(this.switchData);
		},
		createSwitch() {
			var fullSwitchData = {};
			// copy all properties over to the new object we'll submit to the API
			Object.assign(fullSwitchData, this.switchData);
			// convert the purchasing data to a list
			fullSwitchData.listings = this.getPurchasingDataAsArray(fullSwitchData);
			// convert the references to a list
			if(fullSwitchData.references) {
				fullSwitchData.references = fullSwitchData.references.split(/\n/);
			}
			// attach an image to the switch object
			fullSwitchData.images = [
				{
					data: this.image,
					// TODO replace this with the actual file name (because we need the ext)
					file_name: 'blah.jpg',
					is_primary: 1
				}
			];

			var self = this;
			fetch('http://localhost:8081/api/switch', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({
					switchData: fullSwitchData,
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
