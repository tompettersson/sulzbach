<script>
	import Search from '$lib/Search.svelte';
	import Hero from '$lib/Hero.svelte';
	import QuickNav from '$lib/QuickNav.svelte';
	import Weather from '$lib/Weather.svelte';
	import OpeningHours from '$lib/OpeningHours.svelte';
	import Calendar from '$lib/Calendar.svelte';
	import Around from '$lib/Around.svelte';
	/**
	 * @type {any}
	 */
	export let data;
</script>

<Hero />
<Search />
<QuickNav />
<Weather {...data} />
<OpeningHours />
<Calendar />
<Around />
