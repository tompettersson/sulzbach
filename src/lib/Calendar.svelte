<script>
	import { DateInput } from 'date-picker-svelte';
	let date = new Date();
</script>

<h2 class="mx-auto max-w-7xl pt-12 pb-12 text-3xl font-bold">Veranstaltungen im Dezember</h2>
<div class="full max-w-7xl mx-auto flex flex-row">
	<div class="w-1/3 flex justify-center items-center content-center min-h-24 bg-gsgray-600">
		<DateInput bind:value={date} />
	</div>
	<div class="w-2/3 min-h-24 flex flex-col ml-6">
		<div class="flex flex-row border-b border-slate-200">
			<img src="./sulzbach-rathaus.jpg" class="max-h-28 p-4" alt="" />
			<div class="flex flex-col p-4 justify-center">
				<div class="text-base font-base text-lime-600">Sa. 22. JULI, 9 UHR</div>
				<div class="text-lg font-bold">Veranstaltungstipp Teaser</div>
			</div>
		</div>
		<div class="flex flex-row border-b border-slate-200">
			<img src="./sulzbach-rathaus.jpg" class="max-h-28 p-4" alt="" />
			<div class="flex flex-col p-4 justify-center">
				<div class="text-base font-base text-lime-600">Sa. 22. JULI, 9 UHR</div>
				<div class="text-lg font-bold">Veranstaltungstipp Teaser</div>
			</div>
		</div>
		<div class="flex flex-row border-b border-slate-200">
			<img src="./sulzbach-rathaus.jpg" class="max-h-28 p-4" alt="" />
			<div class="flex flex-col p-4 justify-center">
				<div class="text-base font-base text-lime-600">Sa. 22. JULI, 9 UHR</div>
				<div class="text-lg font-bold">Veranstaltungstipp Teaser</div>
			</div>
		</div>
	</div>
</div>

<div class="mt-16 mb-16 sm:flex sm:justify-center">
	<div class="rounded-md">
		<a
			href="./"
			class="flex font-semibold uppercase w-full items-center justify-center border border-transparent border-lime-600 py-2 px-8 text-base text-lime-600 transition-colors hover:bg-lime-600 hover:text-white md:py-2 md:px-10 md:text-base"
			>Veranstaltungen</a
		>
	</div>
	<!-- <div class="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
		<a
			href="./"
			class="flex w-full items-center justify-center rounded-md border border-transparent bg-white px-8 py-2 text-base font-medium text-gsblack-100 hover:bg-gray-50 md:py-3 md:px-10 md:text-lg"
			>Live demo</a
		>
	</div> -->
</div>
