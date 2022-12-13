<script>
	const quickNav = [
		{
			name: 'Dienstleistungen A-Z',
			link: './',
			icon: '/a-z.png'
		},
		{
			name: 'Mitarbeiter A-Z',
			link: './',
			icon: '/mitarbeiter.png'
		},
		{
			name: 'Bekanntmachungen Pressemitteilungen',
			link: './',
			icon: '/bekannt.png'
		},
		{
			name: 'Stellen-ausschreibungen',
			link: './',
			icon: '/jobs.png'
		},
		{
			name: 'Unrat, Sperrmüll, Entsorgungen',
			link: './',
			icon: '/unrat.png'
		}
	];
</script>

<div class="mx-auto flex max-w-7xl flex-row justify-center py-20">
	{#each quickNav as quickNavPoint (quickNavPoint.name)}
		<a
			class="m-3 flex w-60 transform flex-col items-center justify-start rounded bg-white p-10 text-center shadow-lg transition duration-500 ease-in-out hover:scale-95 hover:shadow-xl"
			href={quickNavPoint.link}
		>
			<div class="p-2"><img src={quickNavPoint.icon} alt={quickNavPoint.name} /></div>
			<div class="p-2">{quickNavPoint.name}</div>
		</a>
	{/each}
</div>
