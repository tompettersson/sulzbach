<script>
	// @ts-nocheck

	import WeatherIcon from './WeatherIcon.svelte';

	const floorer = (/** @type {number} */ temp) => {
		return Math.floor(temp);
	};
	export let wData;
	const predictionDays = ['Heute', 'Morgen', 'Übermorgen', 'In 3 Tagen', 'In 4 Tagen'];
</script>

<div class="w-full bg-sky-500 p-10 pt-6">
	<div class="mx-auto flex max-w-7xl flex-row items-stretch">
		<div
			class="flex w-[20%] flex-col content-center items-center justify-center text-xl font-bold text-white"
		>
			<div class="flex flex-row">
				<div
					class="ml-3 mb-2 overflow-x-visible text-left text-[10px] font-normal leading-tight opacity-60"
				>
					Aktuell
				</div>
			</div>
			<div class="flex h-24 flex-row content-center items-center justify-center">
				<div class="flex flex-col items-center">
					<WeatherIcon weatherMain={wData.current.weather[0].main} />
				</div>
				<div class="ml-1 flex flex-col items-center">
					<div class="text-3xl">{floorer(wData.current.temp)}°C</div>
				</div>
				<div
					class="ml-3 w-12 overflow-x-visible text-left text-[10px] font-normal leading-tight opacity-60"
				>
					{wData.current.weather[0].description}
				</div>
			</div>
		</div>

		{#each predictionDays as day, i}
			<div
				class="flex w-[20%] flex-col content-center items-center justify-center text-xl font-bold text-white"
			>
				<div class="flex flex-row">
					<div
						class="ml-3 mb-2 overflow-x-visible text-left text-[10px] font-normal leading-tight opacity-60"
					>
						{day}
					</div>
				</div>
				<div class="flex h-24 flex-row content-center items-center justify-center">
					<div class="flex flex-col items-center">
						<WeatherIcon weatherMain={wData.daily[i].weather[0].main} />
					</div>
					<div class="ml-1 flex flex-col items-center">
						<div class="text-2xl leading-tight">{floorer(wData.daily[i].temp.max)}°C</div>
						<div class="text-2xl leading-tight opacity-50">
							{floorer(wData.daily[i].temp.min)}°C
						</div>
					</div>
					<div
						class="ml-3 w-12 overflow-x-visible text-left text-[10px] font-normal leading-tight opacity-60"
					>
						{wData.daily[i].weather[0].description}
					</div>
				</div>
			</div>
		{/each}
	</div>
</div>
