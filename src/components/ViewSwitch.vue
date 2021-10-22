<template>
	<div class="container">
		<h1>{{ getValue('Manufacturer') }} {{ getValue('Name') }}</h1>
		<div>description here</div>
		<div class="container">
			<div class="row">
				<div class="col-3">
					<img v-if="hasImage" :src="imgUrl" height=300 />
				</div>
				<div class="col-9">
					<ul class="nav nav-tabs" id="myTab" role="tablist">
						<li class="nav-item" role="presentation">
							<button class="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">Details</button>
						</li>
						<li class="nav-item" role="presentation">
							<button class="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">Profile</button>
						</li>
						<li class="nav-item" role="presentation">
							<button class="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact" type="button" role="tab" aria-controls="contact" aria-selected="false">Contact</button>
						</li>
					</ul>
					<div class="tab-content" id="myTabContent">
						<div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">1</div>
						<div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">2</div>
						<div class="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">3</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>

export default {
	name: 'App',
	data() {
		return {
			switchCategories: [],
			allFields: [],
			isPlunged: false,
			prePlungeOffest: 0
		}
	},
	inject: ['baseImgUrl'],
	methods: {
		getValue: function(fieldName, capitalize = true) {
			// have to do this check because the fetch done in beforeMount
			// is async, and thus this data won't be available right away
			if(this.allFields.length > 0) {
				var value = (this.allFields.find(field => field.name === fieldName)).value;
				if(value && value.length > 0 && capitalize) {
					return value.charAt(0).toUpperCase() + value.slice(1);
				} else {
					return value;
				}
			}
			return '-';
		},
		simplifySwitchFields(switchCategories) {
			var result = [];
			for(const cat of switchCategories) {
				for(const field of cat.fields) {
					result.push({
						field_id: field.field_id,
						name: field.name,
						value: field.value
					});
				}
			}
			return result;
		},
	},
	computed: {
		hasImage() {
			return this.getValue('Image') && this.getValue('Image') != '-';
		},
		imgUrl() {
			var images = require.context('@/assets/images/')
			return images('./' + this.getValue('Image', false));
		}
	},
	beforeMount() {
		const self = this;
		const switchId = this.$route.query.switch_id;
		var searchUrl = 'http://localhost:8081/api/search?switch_id=' + switchId;
		fetch(searchUrl)
		.then(res => res.json())
		.then(data => {
			self.switchCategories = data[0].switchCategories;
			self.allFields = self.simplifySwitchFields(data[0].switchCategories);
		});
	}
}
</script>

<style>
	.container {
		margin-left: 5px;
	}
	#switch-diagram {
		margin-left: 0px;
	}
	#switch {

	}
	#switch-stem {
		width: 70px;
		/* 0.58823529411764705882352941176471 */
	}
	#switch-top {
		width: 147px;
		margin-top: -59px;
		margin-left: -38px;
	}
	#switch-bottom {
		width: 157px;
		margin-top: -49.5px;
		margin-left: -43px;
	}
	#switch-leaf {
		width: 74px;
		margin-top: -41.5px;
		margin-left: -7.5px;
	}
	#side-stem-color {
		fill: #008533;
	}
	#side-top-color {
		fill: #E64A03;
	}
	#side-bottom-color {
		fill: #E64A03;
	}
	#side-leaf-color {
		fill: #BA7E58;
	}
	.svg-container {
			position: relative;
			padding-bottom: 100px;
			vertical-align: top;
			overflow: hidden;
	}
	.svg-content {
			display: inline-block;
			position: absolute;
			top: 0;
			left: 0;
	}
</style>
