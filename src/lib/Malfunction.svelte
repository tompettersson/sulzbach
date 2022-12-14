<script>
	let showlamp = false;
	import { fade } from 'svelte/transition';
</script>

<div
	class="w-full py-12 bg-red-600"
	on:mouseenter={() => {
		showlamp = true;
	}}
	on:mouseleave={() => {
		showlamp = false;
	}}
>
	<div class="mx-auto flex max-w-7xl flow">
		<div class="w-1/3 p-6 pl-0">
			<h3 class="text-white text-3xl font-bold mt-2 mb-2">Defekte Straßenlampen</h3>
			<p class="text-white text-bas mb-2">Melden Sie bitte direkt an die Syna GmbH. Hotline:</p>
			<h3 class="text-white text-3xl font-bold">0800/7962787</h3>
		</div>
		<div class="w-1/3 px-6 pl-0 font-mono">
			<img
				transition:fade
				class="w-24 absolute ml-14 mt-[-12px]"
				src="/streetlamp-off.svg"
				alt="Defekte Straßenlampe"
			/>
			{#if showlamp}
				<img
					transition:fade
					class="w-24 absolute ml-14 mt-[-12px]"
					src="/streetlamp-on.svg"
					alt="Funktionierende Straßenlampe"
				/>
			{/if}
		</div>
		<div class="w-1/3 p-6 pl-0 flex flex-col justify-center">
			<a
				href="./"
				class="flex font-semibold uppercase items-center hover:bg-white hover:text-gsblack-100 justify-center border border-transparent border-white py-2 px-8 text-base text-white transition-colors md:py-2 md:px-8 md:text-base"
				>Online melden</a
			>
		</div>
	</div>
</div>
