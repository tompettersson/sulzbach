<script>
	export let weatherMain = 'Clear';
</script>

{#if weatherMain == 'Sunny'}
	<img src="./svg/wi-day-sunny.svg" class="h-12 w-12 fill-white" alt="Sonnig" />
{:else if weatherMain == 'Clear'}
	<img src="./svg/wi-day-sunny.svg" class="h-12 w-12 fill-white" alt="Sonnig" />
{:else if weatherMain == 'Clouds'}
	<img src="./svg/wi-cloudy.svg" class="h-12 w-12" alt="Wolkig" />
{:else if weatherMain == 'Rain'}
	<img src="./svg/wi-rain.svg" class="h-12 w-12" alt="Regen" />
{:else if weatherMain == 'Snow'}
	<img src="./svg/wi-snow.svg" class="h-12 w-12" alt="Schnee" />
{:else if weatherMain == 'Thunderstorm'}
	<img src="./svg/wi-thunderstorm.svg" class="h-12 w-12" alt="Unwetter" />
{:else if weatherMain == 'Drizzle'}
	<img src="./svg/wi-sprinkle.svg" class="h-12 w-12" alt="Drizzle" />
{:else if weatherMain == 'Mist'}
	<img src="./svg/wi-fog.svg" class="h-12 w-12" alt="Nebel" />
{:else if weatherMain == 'Smoke'}
	<img src="./svg/wi-smoke.svg" class="h-12 w-12" alt="Rauch" />
{:else if weatherMain == 'Haze'}
	<img src="./svg/wi-day-haze.svg" class="h-12 w-12" alt="Haze" />
{:else if weatherMain == 'Dust'}
	<img src="./svg/wi-dust.svg" class="h-12 w-12" alt="Staub" />
{:else if weatherMain == 'Fog'}
	<img src="./svg/wi-fog.svg" class="h-12 w-12" alt="Nebel" />
{:else if weatherMain == 'Sand'}
	<img src="./svg/wi-sandstorm.svg" class="h-12 w-12" alt="Sand" />
{:else if weatherMain == 'Ash'}
	<img src="./svg/wi-volcano.svg" class="h-12 w-12" alt="Asche" />
{:else if weatherMain == 'Squall'}
	<img src="./svg/wi-strong-wind.svg" class="h-12 w-12" alt="Squall" />
{:else if weatherMain == 'Tornado'}
	<img src="./svg/wi-tornado.svg" class="h-12 w-12" alt="Tornado" />
{:else}
	<img src="./svg/wi-na.svg" class="h-12 w-12" alt="Unknown" />
{/if}
