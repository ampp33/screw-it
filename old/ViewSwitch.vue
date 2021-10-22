<template>
	<div class="container">
		<h1>{{ getValue('Manufacturer') }} {{ getValue('Name') }}</h1>
		<h4>{{ getValue('Type') }}</h4>

		<div id="switch-diagram">
			<div id="switch" @mouseover="plunge" @mouseleave="unplunge">
				<div id="switch-stem" class="svg-container">
					<svg version="1.0" class="svg-content" preserveAspectRatio="xMinYMin meet" x="0px" y="0px" viewBox="0 0 119.257 71.217007" enable-background="new 0 0 841.89 595.28" xml:space="preserve" sodipodi:docname="side-stem.svg" inkscape:version="1.1.1 (3bf5ae0d25, 2021-09-20)" xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape" xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd" xmlns="http://www.w3.org/2000/svg" xmlns:svg="http://www.w3.org/2000/svg">
						<defs id="defs4145"/>
						<g id="g4140" transform="translate(-164.95399,-140.34599)">
							<g id="g2750">
								<g id="side_stem">
									<path style="stroke:#000000;stroke-width:1px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1;fill-opacity:1" d="M 190.49699,146.75 V 202.2 H 169.586 l -4.13201,8.863 H 283.711 L 279.57901,202.2 H 258.668 v -55.45 l -3.40801,-5.90401 h -61.35398 l -3.40902,5.90401" id="side-stem-color"/>
									<line fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2" x1="193.05499" y1="145.959" x2="193.05499" y2="202.2" id="line2280"/>
									<line fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2" x1="198.16499" y1="148.51401" x2="198.16499" y2="202.2" id="line2282"/>
									<line fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2" x1="215.29401" y1="202.2" x2="215.29401" y2="154.48" id="line2304"/>
									<line fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2" x1="233.871" y1="202.2" x2="233.871" y2="154.48" id="line2326"/>
									<line fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2" x1="251" y1="202.2" x2="251" y2="148.51401" id="line2340"/>
									<line fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2" x1="256.10999" y1="202.2" x2="256.10999" y2="145.959" id="line2350"/>
									<line fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2" x1="215.29401" y1="174.93201" x2="233.871" y2="174.93201" id="line2394"/>
									<line fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2" x1="215.29401" y1="154.48" x2="233.871" y2="154.48" id="line2400"/>
									<line fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2" x1="251" y1="148.51401" x2="233.871" y2="148.51401" id="line2402"/>
									<line fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2" x1="215.29401" y1="148.51401" x2="198.16499" y2="148.51401" id="line2404"/>
									<path fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2" d="m 230.548,163.854 c 0,-3.294 -2.671,-5.965 -5.965,-5.965 -3.294,0 -5.965,2.671 -5.965,5.965 0,3.294 2.671,5.965 5.965,5.965 3.294,0 5.965,-2.671 5.965,-5.965" id="path2518"/>
									<line fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2" x1="193.90601" y1="140.84599" x2="190.49699" y2="146.75" id="line2536"/>
									<line fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2" x1="215.29401" y1="146.75" x2="218.703" y2="140.84599" id="line2538"/>
									<line fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2" x1="190.49699" y1="202.2" x2="190.49699" y2="146.75" id="line2548"/>
									<line fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2" x1="215.29401" y1="154.48" x2="215.29401" y2="146.75" id="line2554"/>
									<line fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2" x1="233.871" y1="154.48" x2="233.871" y2="146.75" id="line2556"/>
									<line fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2" x1="258.668" y1="202.2" x2="258.668" y2="146.75" id="line2558"/>
									<line fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2" x1="233.871" y1="146.75" x2="230.46201" y2="140.84599" id="line2564"/>
									<line fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2" x1="258.668" y1="146.75" x2="255.25999" y2="140.84599" id="line2566"/>
									<line fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2" x1="215.29401" y1="146.75" x2="233.871" y2="146.75" id="line2572"/>
									<line fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2" x1="253.55499" y1="143.40401" x2="231.939" y2="143.40401" id="line2574"/>
									<line fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2" x1="217.226" y1="143.40401" x2="195.61" y2="143.40401" id="line2576"/>
									<line fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2" x1="193.90601" y1="140.84599" x2="255.25999" y2="140.84599" id="line2578"/>
									<polyline fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2" points="		251,148.514 251.146,148.39 251.421,148.093 251.842,147.67 252.36,147.154 252.926,146.57 253.555,145.959	 " id="polyline2590"/>
									<line fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2" x1="165.45399" y1="211.063" x2="169.586" y2="202.2" id="line2596"/>
									<line fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2" x1="168.543" y1="211.063" x2="172.675" y2="202.2" id="line2598"/>
									<line fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2" x1="251" y1="148.51401" x2="253.55499" y2="145.959" id="line2600"/>
									<line fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2" x1="195.61" y1="145.959" x2="195.61" y2="143.40401" id="line2626"/>
									<line fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2" x1="253.55499" y1="145.959" x2="253.55499" y2="143.40401" id="line2634"/>
									<polyline fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2" points="		198.165,148.514 198.041,148.368 197.744,148.093 197.321,147.672 196.805,147.154 196.221,146.589 195.61,145.959	 " id="polyline2658"/>
									<line fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2" x1="169.586" y1="202.2" x2="279.57901" y2="202.2" id="line2666"/>
									<line fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2" x1="198.16499" y1="148.51401" x2="195.61" y2="145.959" id="line2668"/>
									<line fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2" x1="280.62201" y1="211.063" x2="276.48999" y2="202.2" id="line2670"/>
									<line fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2" x1="283.711" y1="211.063" x2="279.57901" y2="202.2" id="line2672"/>
									<line fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2" x1="195.61" y1="145.959" x2="193.05499" y2="145.959" id="line2680"/>
									<line fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2" x1="253.55499" y1="145.959" x2="256.10999" y2="145.959" id="line2682"/>
									<path fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2" d="m 195.61,143.404 c -1.411,0 -2.555,1.144 -2.555,2.555" id="path2702"/>
									<path fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2" d="m 256.11,145.959 c 0,-1.411 -1.144,-2.555 -2.555,-2.555" id="path2722"/>
								</g>
								<path style="fill:none;stroke:#000000;stroke-width:1px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1" d="M 165.45399,211.063 H 283.711" id="path2475"/>
							</g>
						</g>
					</svg>
				</div>
				<div id="switch-top" class="svg-container">
					<svg version="1.0" class="svg-content" preserveAspectRatio="xMinYMin meet" x="0px" y="0px" viewBox="0 0 249.82499 87.06599" enable-background="new 0 0 841.89 595.28" xml:space="preserve" sodipodi:docname="side-top.svg" inkscape:version="1.1.1 (3bf5ae0d25, 2021-09-20)" xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape" xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd" xmlns="http://www.w3.org/2000/svg" xmlns:svg="http://www.w3.org/2000/svg">
						<defs id="defs4145"/>
						<g id="g4140" transform="translate(-99.669998,-210.563)">
							<g id="g2750">
								<g id="side_top">
									<path style="stroke:#000000;stroke-width:1px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1;fill-opacity:1" d="m 142.392,211.099 h 164.381 c 2.67937,0.7688 5.52756,1.07336 7.02699,5.087 L 348.995,297.129 H 100.17 l 35.195,-80.943 c 1.18586,-2.85214 3.69469,-4.38131 7.027,-5.087" id="side-top-color" sodipodi:nodetypes="ccccccc"/>
									<line fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2" x1="168.547" y1="273.26901" x2="168.547" y2="271.565" id="line2232"/>
									<line fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2" x1="170.535" y1="273.26901" x2="170.535" y2="271.565" id="line2236"/>
									<line fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2" x1="172.78799" y1="273.26901" x2="172.78799" y2="271.565" id="line2248"/>
									<line fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2" x1="183.12399" y1="273.26901" x2="183.12399" y2="271.565" id="line2258"/>
									<line fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2" x1="185.377" y1="273.26901" x2="185.377" y2="271.565" id="line2270"/>
									<line fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2" x1="187.364" y1="273.26901" x2="187.364" y2="271.565" id="line2274"/>
									<line fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2" x1="207.53999" y1="288.60699" x2="207.53999" y2="281.47" id="line2292"/>
									<line fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2" x1="324.79401" y1="297.129" x2="271.38699" y2="297.129" id="line2328"/>
									<line fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2" x1="177.778" y1="297.129" x2="124.371" y2="297.129" id="line2330"/>
									<line fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2" x1="241.625" y1="288.60699" x2="207.53999" y2="288.60699" id="line2332"/>
									<line fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2" x1="241.625" y1="288.60699" x2="241.625" y2="281.47" id="line2336"/>
									<line fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2" x1="332.80399" y1="273.26901" x2="325.987" y2="273.26901" id="line2342"/>
									<line fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2" x1="123.178" y1="273.26901" x2="116.361" y2="273.26901" id="line2344"/>
									<line fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2" x1="168.547" y1="271.565" x2="187.364" y2="271.565" id="line2346"/>
									<polyline fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2" points="		245.716,276.903 245.582,277.079 245.316,277.422 245.048,277.761 244.778,278.094 244.73,278.152 244.457,278.48		 244.183,278.802 243.906,279.119 243.627,279.431 243.346,279.738 243.064,280.04 242.779,280.336 242.493,280.627		 242.205,280.913 241.916,281.194 241.625,281.47	 " id="polyline2420"/>
									<polyline fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2" points="		207.54,281.47 207.249,281.194 206.959,280.913 206.672,280.627 206.43,280.382 206.146,280.086 205.863,279.786 205.582,279.48		 205.303,279.168 205.026,278.852 204.751,278.531 204.477,278.204 204.206,277.872 203.937,277.535 203.671,277.193		 203.449,276.903	 " id="polyline2422"/>
									<line fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2" x1="283.41901" y1="276.90302" x2="245.716" y2="276.90302" id="line2476"/>
									<line fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2" x1="203.44901" y1="276.90302" x2="165.746" y2="276.90302" id="line2478"/>
									<line fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2" x1="197.815" y1="273.26901" x2="165.492" y2="273.26901" id="line2480"/>
									<line fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2" x1="251.35001" y1="273.26901" x2="283.673" y2="273.26901" id="line2482"/>
									<line fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2" x1="258.668" y1="273.26901" x2="258.668" y2="269.85999" id="line2486"/>
									<line fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2" x1="258.668" y1="269.85999" x2="272.302" y2="269.85999" id="line2488"/>
									<line fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2" x1="165.492" y1="265.04501" x2="201.479" y2="265.04501" id="line2490"/>
									<line fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2" x1="247.686" y1="265.04501" x2="283.673" y2="265.04501" id="line2492"/>
									<line fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2" x1="272.302" y1="273.26901" x2="272.302" y2="269.85999" id="line2494"/>
									<line fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2" x1="163.666" y1="212.73199" x2="203.267" y2="212.73199" id="line2498"/>
									<line fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2" x1="245.89799" y1="212.73199" x2="285.49899" y2="212.73199" id="line2500"/>
									<path fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2" d="m 247.686,265.045 c -0.547,-17.439 -1.143,-34.877 -1.788,-52.312" id="path2506"/>
									<path fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2" d="m 203.267,212.732 c -0.645,17.436 -1.241,34.873 -1.788,52.312" id="path2512"/>
									<polyline fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2" points="		203.449,276.903 203.3,276.711 203.147,276.521 202.988,276.333 202.824,276.147 202.771,276.089 202.763,276.08 202.592,275.898		 202.418,275.72 202.24,275.545 202.058,275.375 201.888,275.222 201.703,275.062 201.516,274.908 201.328,274.76 201.153,274.627		 200.966,274.493 200.78,274.365 200.594,274.244 200.584,274.238 200.401,274.125 200.221,274.019 200.042,273.921		 199.866,273.83 199.82,273.807 199.649,273.726 199.481,273.652 199.316,273.585 199.154,273.524 199.065,273.493 198.91,273.444		 198.759,273.401 198.612,273.365 198.468,273.334 198.342,273.312 198.205,273.293 198.071,273.279 197.941,273.271		 197.815,273.269	 " id="polyline2520"/>
									<polyline fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2" points="		251.35,273.269 251.224,273.271 251.094,273.279 250.961,273.293 250.823,273.312 250.698,273.334 250.553,273.365		 250.406,273.401 250.255,273.444 250.1,273.493 250.011,273.524 249.849,273.585 249.684,273.652 249.516,273.726		 249.345,273.807 249.299,273.83 249.123,273.921 248.944,274.019 248.764,274.125 248.581,274.238 248.571,274.244		 248.385,274.365 248.199,274.493 248.012,274.628 247.837,274.76 247.649,274.908 247.462,275.062 247.277,275.222		 247.107,275.375 246.925,275.545 246.747,275.72 246.573,275.898 246.402,276.08 246.394,276.089 246.341,276.147		 246.177,276.333 246.018,276.521 245.865,276.711 245.716,276.903	 " id="polyline2522"/>
									<polyline fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2" points="		203.267,212.732 203.434,212.62 203.606,212.511 203.784,212.405 203.966,212.303 204.032,212.268 204.221,212.172		 204.416,212.08 204.616,211.991 204.823,211.906 204.849,211.896 205.062,211.816 205.282,211.739 205.508,211.666		 205.742,211.597 205.983,211.531 206.152,211.489 206.407,211.431 206.67,211.376 206.942,211.325 207.224,211.279		 207.516,211.237 207.533,211.234 207.838,211.197 208.154,211.163 208.482,211.135 208.823,211.11 208.976,211.101		 209.342,211.084 209.723,211.072 210.122,211.064 210.47,211.063	 " id="polyline2524"/>
									<polyline fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2" points="		238.695,211.063 238.902,211.063 239.308,211.069 239.696,211.079 239.975,211.091 240.332,211.11 240.676,211.134		 240.888,211.152 241.208,211.183 241.516,211.219 241.812,211.26 242.1,211.304 242.174,211.317 242.448,211.367 242.713,211.421		 242.969,211.479 243.217,211.541 243.457,211.606 243.665,211.669 243.892,211.742 244.111,211.818 244.324,211.899		 244.53,211.983 244.731,212.071 244.818,212.112 245.011,212.206 245.199,212.304 245.382,212.406 245.56,212.511 245.732,212.62		 245.898,212.732	 " id="polyline2526"/>
									<polyline fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2" points="		247.686,265.045 247.699,265.316 247.719,265.589 247.747,265.862 247.784,266.136 247.828,266.409 247.88,266.682		 247.904,266.796 247.968,267.067 248.039,267.338 248.118,267.609 248.206,267.88 248.301,268.15 248.401,268.408		 248.512,268.676 248.631,268.941 248.757,269.205 248.891,269.465 249.033,269.724 249.087,269.819 249.23,270.058		 249.385,270.305 249.546,270.545 249.713,270.779 249.884,271.007 249.952,271.094 250.127,271.309 250.304,271.514		 250.375,271.592 250.552,271.782 250.731,271.962 250.807,272.036 250.983,272.197 251.158,272.348 251.246,272.421		 251.415,272.551 251.581,272.671 251.682,272.739 251.84,272.839 251.995,272.928 252.114,272.99 252.257,273.057		 252.397,273.115 252.411,273.12 252.546,273.167 252.675,273.205 252.799,273.233 252.92,273.253 253.035,273.265		 253.147,273.269	 " id="polyline2528"/>
									<polyline fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2" points="		196.018,273.269 196.13,273.265 196.246,273.253 196.366,273.233 196.49,273.205 196.62,273.167 196.754,273.12 196.768,273.115		 196.908,273.057 197.051,272.99 197.17,272.928 197.325,272.839 197.483,272.739 197.584,272.671 197.75,272.551 197.919,272.421		 198.007,272.348 198.182,272.197 198.358,272.036 198.434,271.962 198.613,271.782 198.79,271.592 198.861,271.514		 199.038,271.309 199.213,271.094 199.281,271.007 199.452,270.779 199.619,270.545 199.78,270.305 199.936,270.058		 200.078,269.819 200.133,269.724 200.274,269.465 200.408,269.205 200.535,268.941 200.653,268.676 200.765,268.408		 200.864,268.15 200.959,267.88 201.047,267.609 201.126,267.338 201.197,267.067 201.261,266.796 201.285,266.682		 201.337,266.409 201.381,266.136 201.418,265.862 201.446,265.589 201.467,265.316 201.479,265.045	 " id="polyline2530"/>
									<line fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2" x1="100.17" y1="297.129" x2="135.36501" y2="216.186" id="line2584"/>
									<line fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2" x1="123.298" y1="276.90302" x2="123.298" y2="273.26901" id="line2586"/>
									<line fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2" x1="114.504" y1="297.129" x2="123.298" y2="276.90302" id="line2588"/>
									<line fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2" x1="140.09399" y1="276.90302" x2="142.39301" y2="211.063" id="line2594"/>
									<line fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2" x1="165.746" y1="276.90302" x2="165.492" y2="273.26901" id="line2614"/>
									<line fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2" x1="156.976" y1="265.04501" x2="155.56799" y2="224.724" id="line2616"/>
									<line fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2" x1="163.666" y1="212.73199" x2="165.492" y2="265.04501" id="line2618"/>
									<line fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2" x1="165.492" y1="273.26901" x2="165.492" y2="265.04501" id="line2620"/>
									<line fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2" x1="348.995" y1="297.129" x2="324.79401" y2="297.129" id="line2628"/>
									<line fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2" x1="271.38699" y1="297.129" x2="177.778" y2="297.129" id="line2630"/>
									<line fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2" x1="124.371" y1="297.129" x2="100.17" y2="297.129" id="line2632"/>
									<line fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2" x1="325.867" y1="276.90302" x2="309.07101" y2="276.90302" id="line2636"/>
									<line fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2" x1="140.09399" y1="276.90302" x2="123.298" y2="276.90302" id="line2638"/>
									<line fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2" x1="116.132" y1="273.26901" x2="140.22099" y2="273.26901" id="line2640"/>
									<line fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2" x1="308.944" y1="273.26901" x2="333.034" y2="273.26901" id="line2642"/>
									<line fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2" x1="283.673" y1="273.26901" x2="283.41901" y2="276.90302" id="line2648"/>
									<line fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2" x1="283.673" y1="265.04501" x2="283.673" y2="273.26901" id="line2650"/>
									<line fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2" x1="285.49899" y1="212.73199" x2="283.673" y2="265.04501" id="line2652"/>
									<line fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2" x1="293.59698" y1="224.724" x2="292.189" y2="265.04501" id="line2654"/>
									<line fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2" x1="309.07101" y1="276.90302" x2="306.772" y2="211.063" id="line2660"/>
									<line fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2" x1="306.89899" y1="214.696" x2="290.72601" y2="214.696" id="line2662"/>
									<line fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2" x1="158.439" y1="214.696" x2="142.26601" y2="214.696" id="line2664"/>
									<line fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2" x1="325.867" y1="276.90302" x2="325.867" y2="273.26901" id="line2674"/>
									<line fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2" x1="325.867" y1="276.90302" x2="334.66101" y2="297.129" id="line2676"/>
									<line fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2" x1="313.79999" y1="216.186" x2="348.995" y2="297.129" id="line2678"/>
									<path fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2" d="m 142.392,211.099 c -3.095,0.287 -5.787,2.237 -7.027,5.087" id="path2694"/>
									<path fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2" d="m 116.132,273.269 c -3.393,0 -6.462,2.012 -7.815,5.124" id="path2696"/>
									<path fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2" d="m 156.976,265.045 c 0.16,4.588 3.926,8.224 8.516,8.224" id="path2698"/>
									<path fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2" d="m 313.8,216.186 c -1.239,-2.85 -3.932,-4.8 -7.027,-5.087" id="path2714"/>
									<path fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2" d="m 340.848,278.392 c -1.353,-3.111 -4.422,-5.124 -7.815,-5.124" id="path2716"/>
									<path fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2" d="m 283.673,273.269 c 4.59,0 8.356,-3.636 8.516,-8.224" id="path2718"/>
									<polyline fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2" points="		108.317,278.392 108.371,278.284 108.437,278.175 108.518,278.067 108.522,278.061 108.616,277.955 108.725,277.85		 108.841,277.753 108.983,277.648 109.142,277.545 109.273,277.47 109.469,277.368 109.685,277.269 109.818,277.214		 110.074,277.118 110.352,277.026 110.474,276.988 110.793,276.9 111.137,276.817 111.238,276.795 111.624,276.718		 112.036,276.647 112.106,276.636 112.558,276.572 113.039,276.517 113.072,276.513 113.591,276.465 114.13,276.428		 114.714,276.398 115.271,276.38 115.916,276.371 116.486,276.372 117.187,276.384 117.765,276.403 118.52,276.438		 119.295,276.485 120.093,276.546 120.472,276.579 121.308,276.661 122.157,276.756 123.018,276.865 123.298,276.903	 " id="polyline2724"/>
									<polyline fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2" points="		325.867,276.903 326.147,276.865 327.009,276.756 327.857,276.661 328.693,276.579 329.072,276.546 329.87,276.485		 330.645,276.438 331.4,276.403 331.978,276.384 332.679,276.372 333.249,276.371 333.894,276.38 334.451,276.398 335.035,276.428		 335.574,276.465 336.093,276.513 336.126,276.517 336.607,276.572 337.059,276.636 337.129,276.647 337.541,276.718		 337.927,276.795 338.028,276.817 338.372,276.9 338.691,276.988 338.813,277.026 339.091,277.118 339.347,277.214 339.48,277.269		 339.696,277.368 339.892,277.47 340.023,277.545 340.182,277.648 340.324,277.753 340.44,277.85 340.549,277.955 340.643,278.061		 340.648,278.067 340.728,278.175 340.795,278.284 340.848,278.392	 " id="polyline2726"/>
									<polyline fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2" points="		291.909,266.934 291.825,267.229 291.73,267.527 291.623,267.827 291.505,268.128 291.382,268.415 291.24,268.719		 291.087,269.025 290.921,269.333 290.742,269.643 290.628,269.83 290.428,270.143 290.214,270.459 289.986,270.776		 289.743,271.097 289.688,271.168 289.426,271.492 289.148,271.821 288.853,272.154 288.6,272.428 288.27,272.772 287.92,273.121		 287.547,273.479 287.149,273.848 286.721,274.23 286.255,274.632 286.117,274.749 285.589,275.187 285.001,275.664		 284.318,276.203 283.455,276.874 283.419,276.903	 " id="polyline2728"/>
									<polyline fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2" points="		292.189,265.045 292.186,265.052 292.178,265.059 292.165,265.066 292.147,265.072 292.124,265.079 292.095,265.085		 292.023,265.097 291.931,265.108 291.82,265.118 291.609,265.132 291.538,265.136 291.217,265.148 291.18,265.15 290.755,265.16		 290.75,265.16 290.252,265.166 289.691,265.168 289.072,265.166 288.401,265.16 287.684,265.15 286.929,265.136 286.186,265.119		 285.333,265.097 284.525,265.073 283.673,265.045	 " id="polyline2730"/>
									<polyline fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2" points="		157.256,266.934 157.34,267.229 157.435,267.527 157.542,267.827 157.661,268.128 157.784,268.415 157.925,268.719		 158.078,269.025 158.245,269.333 158.423,269.643 158.537,269.83 158.738,270.143 158.951,270.459 159.179,270.776		 159.422,271.097 159.477,271.168 159.739,271.492 160.017,271.821 160.312,272.154 160.565,272.428 160.895,272.772		 161.245,273.121 161.618,273.479 162.016,273.848 162.445,274.23 162.91,274.632 163.048,274.749 163.576,275.187		 164.164,275.664 164.847,276.203 165.711,276.875 165.746,276.903	 " id="polyline2732"/>
									<polyline fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2" points="		165.492,265.045 164.685,265.072 163.832,265.097 163.089,265.117 162.236,265.136 161.481,265.15 160.764,265.16		 160.093,265.166 159.474,265.168 158.913,265.166 158.415,265.16 158.41,265.16 157.985,265.15 157.948,265.148 157.628,265.136		 157.557,265.132 157.345,265.118 157.234,265.108 157.142,265.097 157.07,265.085 157.042,265.079 157.018,265.072 157,265.066		 156.987,265.059 156.979,265.052 156.976,265.045	 " id="polyline2734"/>
									<polyline fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2" points="		285.499,212.732 285.605,212.733 285.827,212.737 286.048,212.746 286.267,212.759 286.398,212.769 286.611,212.789		 286.82,212.812 287.025,212.84 287.19,212.865 287.385,212.899 287.576,212.937 287.762,212.978 287.78,212.983 287.959,213.027		 288.133,213.075 288.302,213.126 288.465,213.179 288.528,213.201 288.685,213.259 288.836,213.319 288.983,213.382		 289.125,213.448 289.215,213.492 289.35,213.563 289.48,213.636 289.606,213.711 289.727,213.789 289.825,213.856		 289.941,213.939 290.052,214.025 290.16,214.114 290.264,214.206 290.365,214.3 290.463,214.398 290.545,214.486 290.637,214.59		 290.726,214.696	 " id="polyline2736"/>
									<polyline fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2" points="		290.726,214.696 290.902,214.922 291.074,215.156 291.242,215.399 291.406,215.65 291.566,215.911 291.722,216.18		 291.873,216.457 292.019,216.743 292.155,217.026 292.291,217.329 292.422,217.639 292.547,217.956 292.66,218.265		 292.773,218.598 292.88,218.937 292.98,219.284 293.047,219.531 293.135,219.889 293.217,220.252 293.291,220.62 293.358,220.993		 293.417,221.37 293.468,221.753 293.509,222.114 293.546,222.505 293.574,222.898 293.594,223.293 293.605,223.69		 293.609,224.089 293.604,224.489 293.597,224.724	 " id="polyline2738"/>
									<polyline fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2" points="		155.568,224.724 155.561,224.489 155.557,224.089 155.56,223.69 155.572,223.293 155.591,222.898 155.62,222.505 155.656,222.114		 155.697,221.753 155.748,221.37 155.807,220.993 155.874,220.62 155.948,220.252 156.03,219.889 156.118,219.531 156.185,219.284		 156.285,218.937 156.392,218.598 156.506,218.265 156.619,217.956 156.743,217.639 156.874,217.329 157.01,217.026		 157.146,216.743 157.292,216.457 157.443,216.18 157.599,215.911 157.759,215.65 157.923,215.399 158.092,215.156		 158.264,214.922 158.439,214.696	 " id="polyline2740"/>
									<polyline fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2" points="		158.439,214.696 158.528,214.59 158.62,214.486 158.702,214.398 158.8,214.3 158.901,214.206 159.005,214.114 159.113,214.025		 159.225,213.939 159.34,213.856 159.438,213.789 159.559,213.711 159.685,213.636 159.816,213.563 159.95,213.492		 160.041,213.448 160.182,213.382 160.329,213.319 160.48,213.259 160.637,213.201 160.7,213.179 160.863,213.126 161.032,213.075		 161.206,213.027 161.386,212.983 161.403,212.978 161.589,212.937 161.78,212.899 161.976,212.865 162.14,212.84 162.345,212.812		 162.554,212.789 162.767,212.769 162.898,212.759 163.117,212.746 163.338,212.737 163.56,212.733 163.666,212.732	 " id="polyline2742"/>
									<line fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2" x1="142.39301" y1="211.063" x2="306.772" y2="211.063" id="line2502"/>
								</g>
							</g>
						</g>
					</svg>
				</div>
				<div id="switch-bottom" class="svg-container">
					<svg version="1.0" class="svg-content" preserveAspectRatio="xMinYMin meet" x="0px" y="0px" viewBox="0 0 267.37899 149.27299" enable-background="new 0 0 841.89 595.28" xml:space="preserve" sodipodi:docname="side-bottom.svg" inkscape:version="1.1.1 (3bf5ae0d25, 2021-09-20)" xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape" xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd" xmlns="http://www.w3.org/2000/svg" xmlns:svg="http://www.w3.org/2000/svg">
						<defs id="defs4145"/>
						<g id="g4140" transform="translate(-90.892998,-296.628)">
							<g id="g2750">
								<g id="side_bottom">
									<path style="fill-opacity:1;stroke:#000000;stroke-width:1px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1" d="m 100.17,297.129 c 1.84226,0.78468 3.33812,1.88841 4.389,3.402 l -13.166002,0.006 v 13.635 H 105.709 v 25.56399 l 0.852,3.11701 v 6.427 l 10.141,30.673 v 10.91101 h 18.66101 v 5.624 l 1.44899,-10e-6 c 6.76166,2.99449 13.08606,4.6529 17.345,10e-6 h 37.041 l 0.577,2.89799 v 28.972 l 8.856,15.33899 c 0.67411,1.18778 1.68105,1.7099 2.95199,1.70401 H 245.562 c 1.18826,-0.19257 2.31852,-0.49535 2.972,-1.704 l 8.85602,-15.339 v -28.97201 c 0.13271,-0.96599 0.0963,-1.93199 0.57699,-2.89798 l 33.93499,-10e-6 c 5.71426,2.29636 11.14552,5.18203 20.451,0 l 1.449,10e-6 v -5.624 h 18.66199 V 379.953 l 10.14002,-30.673 v -6.427 l 0.85199,-3.11701 V 314.172 h 14.31601 v -13.63501 l -13.16601,-0.006 c 1.83542,-2.2823 3.01644,-2.54686 4.389,-3.402 H 100.17" id="side-bottom-color" sodipodi:nodetypes="ccccccccccccccccccccccccccccccccccccccc"/>
									<line fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2" x1="91.392998" y1="314.172" x2="91.392998" y2="300.53699" id="line2192"/>
									<line fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2" x1="119.684" y1="390.86401" x2="105.709" y2="339.73599" id="line2198"/>
									<line fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2" x1="105.709" y1="314.172" x2="105.709" y2="339.73599" id="line2200"/>
									<line fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2" x1="108.436" y1="314.172" x2="108.436" y2="300.53699" id="line2202"/>
									<line fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2" x1="123.178" y1="297.129" x2="123.178" y2="300.53699" id="line2204"/>
									<line fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2" x1="124.371" y1="297.129" x2="124.371" y2="300.53699" id="line2206"/>
									<line fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2" x1="313.802" y1="396.48801" x2="309.24701" y2="396.48801" id="line2208"/>
									<line fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2" x1="295.008" y1="396.48801" x2="257.96701" y2="396.48801" id="line2210"/>
									<line fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2" x1="191.198" y1="396.48801" x2="154.157" y2="396.48801" id="line2212"/>
									<line fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2" x1="139.91901" y1="396.48801" x2="135.36301" y2="396.48801" id="line2214"/>
									<line fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2" x1="135.36301" y1="390.86401" x2="135.36301" y2="396.48801" id="line2216"/>
									<line fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2" x1="135.592" y1="314.172" x2="135.592" y2="361.50699" id="line2218"/>
									<line fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2" x1="250.147" y1="392.56799" x2="199.01801" y2="392.56799" id="line2220"/>
									<line fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2" x1="190.49699" y1="392.56799" x2="173.45399" y2="392.56799" id="line2222"/>
									<line fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2" x1="119.684" y1="390.86401" x2="143.88499" y2="390.86401" id="line2224"/>
									<line fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2" x1="305.28" y1="390.86401" x2="329.48099" y2="390.86401" id="line2226"/>
									<line fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2" x1="143.88499" y1="361.89099" x2="181.172" y2="361.89099" id="line2238"/>
									<line fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2" x1="191.34" y1="361.89099" x2="204.83299" y2="361.89099" id="line2240"/>
									<line fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2" x1="244.332" y1="361.89099" x2="257.82501" y2="361.89099" id="line2242"/>
									<line fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2" x1="267.99301" y1="361.89099" x2="305.28" y2="361.89099" id="line2244"/>
									<line fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2" x1="181.976" y1="377.23001" x2="177.778" y2="297.129" id="line2246"/>
									<line fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2" x1="173.45399" y1="390.86401" x2="173.45399" y2="392.56799" id="line2250"/>
									<line fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2" x1="176.011" y1="390.86401" x2="176.011" y2="392.56799" id="line2252"/>
									<line fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2" x1="177.715" y1="390.86401" x2="177.715" y2="392.56799" id="line2254"/>
									<line fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2" x1="181.976" y1="392.56799" x2="181.976" y2="396.48801" id="line2256"/>
									<line fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2" x1="257.05499" y1="347.87299" x2="243.561" y2="347.87299" id="line2260"/>
									<line fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2" x1="205.604" y1="347.87299" x2="192.11" y2="347.87299" id="line2262"/>
									<line fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2" x1="256.84201" y1="343.996" x2="243.34801" y2="343.996" id="line2264"/>
									<line fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2" x1="205.817" y1="343.996" x2="192.323" y2="343.996" id="line2266"/>
									<line fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2" x1="243.241" y1="342.03299" x2="205.925" y2="342.03299" id="line2268"/>
									<line fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2" x1="186.23599" y1="390.86401" x2="186.23599" y2="392.56799" id="line2272"/>
									<line fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2" x1="187.94099" y1="390.86401" x2="187.94099" y2="392.56799" id="line2276"/>
									<line fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2" x1="190.49699" y1="390.86401" x2="190.49699" y2="392.56799" id="line2278"/>
									<line fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2" x1="190.674" y1="374.008" x2="193.226" y2="327.55301" id="line2284"/>
									<line fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2" x1="255.939" y1="327.55301" x2="242.44501" y2="327.55301" id="line2286"/>
									<line fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2" x1="206.72" y1="327.55301" x2="193.226" y2="327.55301" id="line2288"/>
									<line fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2" x1="199.01801" y1="390.86401" x2="199.01801" y2="392.56799" id="line2290"/>
									<line fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2" x1="208.25101" y1="299.685" x2="204.83299" y2="361.89099" id="line2294"/>
									<line fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2" x1="91.392998" y1="314.172" x2="178.67101" y2="314.172" id="line2296"/>
									<line fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2" x1="270.49399" y1="314.172" x2="357.772" y2="314.172" id="line2298"/>
									<line fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2" x1="212.608" y1="390.86401" x2="212.608" y2="392.56799" id="line2300"/>
									<line fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2" x1="214.769" y1="390.86401" x2="214.769" y2="392.56799" id="line2302"/>
									<line fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2" x1="181.976" y1="311.61499" x2="207.59599" y2="311.61499" id="line2306"/>
									<line fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2" x1="241.569" y1="311.61499" x2="267.19" y2="311.61499" id="line2308"/>
									<line fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2" x1="241.476" y1="309.91101" x2="207.69" y2="309.91101" id="line2310"/>
									<line fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2" x1="271.19601" y1="300.78101" x2="267.19" y2="300.78101" id="line2312"/>
									<line fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2" x1="181.976" y1="300.78101" x2="177.96899" y2="300.78101" id="line2314"/>
									<line fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2" x1="91.392998" y1="300.53699" x2="124.371" y2="300.53699" id="line2316"/>
									<line fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2" x1="324.79401" y1="300.53699" x2="357.772" y2="300.53699" id="line2318"/>
									<line fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2" x1="240.914" y1="299.685" x2="208.25101" y2="299.685" id="line2320"/>
									<line fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2" x1="231.39999" y1="390.86401" x2="231.39999" y2="392.56799" id="line2322"/>
									<line fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2" x1="233.104" y1="390.86401" x2="233.104" y2="392.56799" id="line2324"/>
									<line fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2" x1="240.914" y1="299.685" x2="244.332" y2="361.89099" id="line2334"/>
									<line fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2" x1="250.147" y1="390.86401" x2="250.147" y2="392.56799" id="line2338"/>
									<line fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2" x1="255.939" y1="327.55301" x2="258.491" y2="374.008" id="line2348"/>
									<line fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2" x1="267.19" y1="390.86401" x2="267.19" y2="396.48801" id="line2362"/>
									<line fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2" x1="267.19" y1="377.23001" x2="271.38699" y2="297.129" id="line2374"/>
									<line fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2" x1="313.573" y1="361.50699" x2="313.573" y2="314.172" id="line2378"/>
									<line fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2" x1="313.802" y1="390.86401" x2="313.802" y2="396.48801" id="line2380"/>
									<line fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2" x1="324.79401" y1="297.129" x2="324.79401" y2="300.53699" id="line2384"/>
									<line fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2" x1="325.987" y1="297.129" x2="325.987" y2="300.53699" id="line2386"/>
									<line fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2" x1="340.729" y1="314.172" x2="340.729" y2="300.53699" id="line2388"/>
									<line fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2" x1="343.45599" y1="314.172" x2="343.45599" y2="339.73599" id="line2390"/>
									<line fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2" x1="343.45599" y1="339.73599" x2="329.48099" y2="390.86401" id="line2392"/>
									<line fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2" x1="357.772" y1="314.172" x2="357.772" y2="300.53699" id="line2396"/>
									<polyline fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2" points="		313.573,361.507 313.573,361.507 313.484,364.447 313.38,367.386 313.26,370.324 313.123,373.262 312.968,376.199 312.941,376.67		 312.765,379.606 312.568,382.541 312.353,385.417 312.124,388.187 311.88,390.864	 " id="polyline2424"/>
									<polyline fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2" points="		313.573,361.507 313.447,361.535 313.302,361.561 313.132,361.586 312.854,361.621 312.542,361.653 312.47,361.66 312.08,361.693		 311.635,361.725 311.608,361.726 311.048,361.759 310.57,361.783 309.869,361.813 309.122,361.838 308.311,361.859		 308.081,361.864 307.773,361.869 306.942,361.882 306.111,361.889 305.28,361.891	 " id="polyline2426"/>
									<polyline fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2" points="		135.592,361.507 135.592,361.507 135.681,364.447 135.785,367.386 135.905,370.324 136.043,373.262 136.197,376.199		 136.224,376.67 136.4,379.606 136.597,382.541 136.812,385.417 137.041,388.187 137.285,390.864	 " id="polyline2428"/>
									<polyline fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2" points="		143.885,361.891 143.577,361.891 142.746,361.887 141.915,361.878 141.084,361.864 140.854,361.859 140.043,361.838		 139.296,361.813 138.595,361.783 138.117,361.759 137.557,361.726 137.531,361.725 137.085,361.693 136.695,361.66		 136.623,361.653 136.311,361.621 136.034,361.586 135.863,361.561 135.718,361.535 135.592,361.507	 " id="polyline2430"/>
									<polyline fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2" points="		266.966,311.664 266.996,311.809 267.025,311.956 267.051,312.106 267.065,312.186 267.088,312.339 267.109,312.493		 267.127,312.647 267.143,312.803 267.157,312.959 267.169,313.115 267.177,313.273 267.184,313.43 267.188,313.589		 267.19,313.747 267.19,313.769	 " id="polyline2432"/>
									<polyline fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2" points="		181.976,313.769 181.976,313.747 181.977,313.589 181.981,313.43 181.988,313.273 181.997,313.115 182.008,312.959		 182.022,312.803 182.038,312.647 182.056,312.493 182.077,312.339 182.1,312.186 182.114,312.106 182.14,311.956 182.169,311.809		 182.199,311.664	 " id="polyline2434"/>
									<line fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2" x1="191.77499" y1="428.358" x2="257.39001" y2="428.358" id="line2464"/>
									<line fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2" x1="116.702" y1="390.86401" x2="116.702" y2="379.953" id="line2466"/>
									<line fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2" x1="332.45099" y1="390.86401" x2="329.48099" y2="390.86401" id="line2468"/>
									<line fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2" x1="116.714" y1="390.86401" x2="119.684" y2="390.86401" id="line2470"/>
									<line fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2" x1="191.77499" y1="428.358" x2="200.631" y2="443.69699" id="line2472"/>
									<line fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2" x1="191.77499" y1="399.38599" x2="191.77499" y2="428.358" id="line2474"/>
									<line fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2" x1="257.39001" y1="399.38599" x2="257.39001" y2="428.358" id="line2484"/>
									<line fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2" x1="257.39001" y1="428.358" x2="248.534" y2="443.69699" id="line2496"/>
									<line fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2" x1="332.46399" y1="390.86401" x2="332.46399" y2="379.953" id="line2504"/>
									<path fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2" d="m 136.812,396.488 c 4.023,2.479 8.81,3.412 13.47,2.625" id="path2508"/>
									<path fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2" d="m 147.038,399.386 c 5.019,0 9.321,-3.585 10.226,-8.521 m -20.452,-0.001 c 0.905,4.936 5.207,8.521 10.226,8.521" id="path2510"/>
									<path fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2" d="m 291.902,396.488 c 6.27,3.863 14.181,3.863 20.451,0" id="path2514"/>
									<path fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2" d="m 302.127,399.386 c 5.019,0 9.321,-3.585 10.226,-8.521 m -20.451,-0.001 c 0.905,4.936 5.207,8.521 10.226,8.521" id="path2516"/>
									<line fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2" x1="106.561" y1="349.28" x2="113.615" y2="368.66" id="line2532"/>
									<line fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2" x1="106.561" y1="349.28" x2="106.561" y2="342.853" id="line2534"/>
									<line fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2" x1="160.672" y1="348.25699" x2="160.672" y2="314.172" id="line2540"/>
									<line fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2" x1="170.89799" y1="314.172" x2="170.89799" y2="348.25699" id="line2542"/>
									<line fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2" x1="288.49301" y1="348.25699" x2="278.267" y2="348.25699" id="line2544"/>
									<line fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2" x1="170.89799" y1="348.25699" x2="160.672" y2="348.25699" id="line2546"/>
									<line fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2" x1="288.49301" y1="339.73599" x2="278.267" y2="339.73599" id="line2550"/>
									<line fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2" x1="170.89799" y1="339.73599" x2="160.672" y2="339.73599" id="line2552"/>
									<line fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2" x1="278.267" y1="348.25699" x2="278.267" y2="314.172" id="line2560"/>
									<line fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2" x1="288.49301" y1="314.172" x2="288.49301" y2="348.25699" id="line2562"/>
									<line fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2" x1="342.604" y1="342.853" x2="342.604" y2="349.28" id="line2568"/>
									<line fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2" x1="335.54999" y1="368.66" x2="342.604" y2="349.28" id="line2570"/>
									<line fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2" x1="203.58299" y1="445.401" x2="245.562" y2="445.401" id="line2580"/>
									<line fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2" x1="200.631" y1="443.69699" x2="248.534" y2="443.69699" id="line2582"/>
									<line fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2" x1="257.39001" y1="399.38599" x2="191.77499" y2="399.38599" id="line2592"/>
									<line fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2" x1="305.28" y1="390.86401" x2="143.88499" y2="390.86401" id="line2602"/>
									<line fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2" x1="143.88499" y1="390.86401" x2="143.88499" y2="314.172" id="line2604"/>
									<line fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2" x1="181.976" y1="377.23001" x2="187.271" y2="377.23001" id="line2606"/>
									<line fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2" x1="261.89499" y1="377.23001" x2="267.19" y2="377.23001" id="line2608"/>
									<line fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2" x1="181.976" y1="373.82101" x2="190.674" y2="373.82101" id="line2610"/>
									<line fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2" x1="258.491" y1="373.82101" x2="267.19" y2="373.82101" id="line2612"/>
									<line fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2" x1="181.976" y1="373.82101" x2="181.976" y2="300.78101" id="line2622"/>
									<line fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2" x1="185.384" y1="377.23001" x2="185.384" y2="311.61499" id="line2624"/>
									<line fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2" x1="263.78101" y1="377.23001" x2="263.78101" y2="311.61499" id="line2644"/>
									<line fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2" x1="267.19" y1="373.82101" x2="267.19" y2="300.78101" id="line2646"/>
									<line fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2" x1="305.28" y1="390.86401" x2="305.28" y2="314.172" id="line2656"/>
									<path fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2" d="m 191.775,399.386 c 0,-2.716 -1.294,-5.269 -3.485,-6.874" id="path2684"/>
									<path fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2" d="m 200.631,443.697 c 0.609,1.055 1.734,1.704 2.952,1.704" id="path2686"/>
									<path fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2" d="m 181.976,373.821 c 0,1.882 1.526,3.409 3.409,3.409" id="path2688"/>
									<path fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2" d="m 187.271,377.23 c 1.81,0 3.304,-1.414 3.403,-3.222" id="path2690"/>
									<path fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2" d="m 104.559,300.531 c -1.121,-1.517 -2.64,-2.695 -4.389,-3.402" id="path2692"/>
									<path fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2" d="m 185.384,297.129 c -1.882,0 -3.409,1.526 -3.409,3.409" id="path2700"/>
									<path fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2" d="m 265.911,390.864 c -4.706,0 -8.521,3.815 -8.521,8.521" id="path2704"/>
									<path fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2" d="m 245.582,445.401 c 1.218,0 2.343,-0.65 2.952,-1.704" id="path2706"/>
									<path fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2" d="m 264.692,377.106 c 1.476,-0.409 2.498,-1.753 2.498,-3.285" id="path2708"/>
									<path fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2" d="m 258.491,374.008 c 0.099,1.807 1.594,3.222 3.403,3.222" id="path2710"/>
									<path fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2" d="m 348.995,297.129 c -1.749,0.707 -3.268,1.885 -4.389,3.402" id="path2712"/>
									<path fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2" d="m 267.19,300.537 c 0,-1.882 -1.526,-3.409 -3.409,-3.409" id="path2720"/>
								</g>
								<path style="fill:none;stroke:#000000;stroke-width:1px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1" d="M 100.17,297.129 H 348.995" id="path3359"/>
							</g>
						</g>
					</svg>
				</div>
				<div id="switch-leaf" class="svg-container">
					<svg version="1.0" class="svg-content" preserveAspectRatio="xMinYMin meet" x="0px" y="0px" viewBox="0 0 127.37201 58.94243" enable-background="new 0 0 841.89 595.28" xml:space="preserve" sodipodi:docname="side-pins.svg" inkscape:version="1.1.1 (3bf5ae0d25, 2021-09-20)" xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape" xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd" xmlns="http://www.w3.org/2000/svg" xmlns:svg="http://www.w3.org/2000/svg">
						<defs id="defs4145"/>
						<g id="g4140" transform="translate(-149.776,-395.98801)">
							<g id="g2750">
								<g id="side_pins">
									<path style="fill-opacity:1;stroke:#000000;stroke-width:0;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1" d="m 169.02299,396.48801 v 0 49.63098 L 161.457,453.685 c -1.80575,1.45516 -2.63474,0.54438 -3.615,0 l -7.566,-7.56601 1e-5,-47.319 c 0.93671,-0.49637 1.84152,-1.08844 2.5455,-2.28301 l 16.20149,-0.029 h 90.071 l 1e-5,48.69699 0.59899,1.44601 6.97301,6.97299 h 2.40999 l 6.97301,-6.973 0.599,-1.446 10e-6,-48.69699 H 259.094" id="side-leaf-color" sodipodi:nodetypes="cccccccccccccccccc"/>
									<line fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2" x1="261.16299" y1="431.177" x2="266.979" y2="431.177" id="line2194"/>
									<line fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2" x1="268.763" y1="431.177" x2="274.57901" y2="431.177" id="line2196"/>
									<line fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2" x1="150.276" y1="398.79999" x2="150.276" y2="446.11899" id="line2228"/>
									<line fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2" x1="259.69299" y1="446.63101" x2="266.66599" y2="453.604" id="line2230"/>
									<line fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2" x1="169.02299" y1="446.11899" x2="169.02299" y2="396.48801" id="line2234"/>
									<line fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2" x1="259.09399" y1="396.48801" x2="259.09399" y2="445.185" id="line2352"/>
									<line fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2" x1="261.16299" y1="431.177" x2="261.16299" y2="396.48801" id="line2354"/>
									<line fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2" x1="264.93301" y1="431.177" x2="264.93301" y2="396.48801" id="line2356"/>
									<line fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2" x1="265.16501" y1="431.177" x2="265.16501" y2="396.48801" id="line2358"/>
									<line fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2" x1="266.979" y1="431.177" x2="266.979" y2="396.48801" id="line2360"/>
									<line fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2" x1="268.763" y1="396.48801" x2="268.763" y2="431.177" id="line2364"/>
									<line fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2" x1="270.578" y1="396.48801" x2="270.578" y2="431.177" id="line2366"/>
									<line fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2" x1="270.81" y1="396.48801" x2="270.81" y2="431.177" id="line2368"/>
									<line fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2" x1="274.57901" y1="396.48801" x2="274.57901" y2="431.177" id="line2370"/>
									<line fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2" x1="276.64801" y1="445.185" x2="276.64801" y2="396.48801" id="line2372"/>
									<line fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2" x1="269.07599" y1="453.604" x2="276.04901" y2="446.63101" id="line2398"/>
									<path fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2" d="m 267.871,437.885 c 3.705,0 6.708,-3.003 6.708,-6.708 m -13.416,0 c 0,3.705 3.003,6.708 6.708,6.708" id="path2406"/>
									<path fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2" d="m 267.871,434.116 c 1.623,0 2.939,-1.316 2.939,-2.939 m -5.877,0 c 0,1.623 1.316,2.939 2.939,2.939" id="path2408"/>
									<path fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2" d="m 267.871,433.884 c 1.495,0 2.707,-1.212 2.707,-2.707 m -5.413,0 c 0,1.495 1.212,2.707 2.707,2.707" id="path2410"/>
									<path fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2" d="m 259.094,445.185 c 0,0.542 0.215,1.063 0.599,1.446" id="path2412"/>
									<path fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2" d="m 276.049,446.631 c 0.384,-0.384 0.599,-0.904 0.599,-1.446" id="path2414"/>
									<path fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2" d="m 266.666,453.604 c 0.666,0.666 1.745,0.666 2.41,0" id="path2416"/>
									<path fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2" d="m 267.871,432.069 c 0.493,0 0.892,-0.399 0.892,-0.892 m -1.784,0 c 0,0.493 0.399,0.892 0.892,0.892" id="path2418"/>
									<line fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2" x1="150.276" y1="446.11899" x2="157.842" y2="453.685" id="line2744"/>
									<line fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2" x1="161.457" y1="453.685" x2="169.02299" y2="446.11899" id="line2746"/>
									<path fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2" d="m 157.842,453.685 c 0.998,0.998 2.617,0.998 3.615,0" id="path2748"/>
								</g>
							</g>
						</g>
					</svg>
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
	methods: {
		getValue: function(fieldName, capitalize = true) {
			// have to do this check because the fetch done in beforeMount
			// is async, and thus this data won't be available right away
			if(this.allFields.length > 0) {
				var value = (this.allFields.find(field => field.name === fieldName)).value;
				if(capitalize) {
					return value.charAt(0).toUpperCase() + value.slice(1);
				} else {
					return value;
				}
			}
			return '';
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
		plunge() {
			if(!this.isPlunged) {
				var a = document.getElementById('switch-stem')
					.animate(
						[ { transform: 'translateY(30px)'} ],
						{ duration: 250, iterations: 1}
					);
				a.onfinish = function() {
					a.pause();
				};
				console.log('plunge');
				this.isPlunged = true;
			}
		},
		unplunge() {
			if(this.isPlunged) {
				document.getElementById('switch-stem')
					.animate(
						[ { transform: 'translateY(-30px)'} ],
						{ duration: 250, iterations: 1}
					);
				console.log('unplunge');
				this.isPlunged = false;
			}
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
