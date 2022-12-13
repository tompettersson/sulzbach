<script>
	const navigation = [
		{ name: 'Kontrast', href: '#', icon: './contrast.svg' },
		{ name: 'Schrift größer', href: '#', icon: './plus.svg' },
		{ name: 'Schrift kleiner', href: '#', icon: './minus.svg' }
	];

	let toggleNavOne = false;
	let toggleNavTwo = false;
	let toggleNavThree = false;

	const mainNavOnepoints = [
		{
			name: 'Navigationspunkt 1',
			text: 'Lorem Ipsum dolor sit amet.',
			href: '#',
			icon: './plus.svg'
		},
		{
			name: 'Navigationspunkt 2',
			text: 'Lorem Ipsum dolor sit amet.',
			href: '#',
			icon: './plus.svg'
		},
		{
			name: 'Navigationspunkt 3',
			text: 'Lorem Ipsum dolor sit amet.',
			href: '#',
			icon: './plus.svg'
		},
		{
			name: 'Navigationspunkt 4',
			text: 'Lorem Ipsum dolor sit amet.',
			href: '#',
			icon: './plus.svg'
		},
		{
			name: 'Navigationspunkt 5',
			text: 'Lorem Ipsum dolor sit amet.',
			href: '#',
			icon: './plus.svg'
		},
		{
			name: 'Navigationspunkt 6',
			text: 'Lorem Ipsum dolor sit amet.',
			href: '#',
			icon: './plus.svg'
		},
		{
			name: 'Navigationspunkt 7',
			text: 'Lorem Ipsum dolor sit amet.',
			href: '#',
			icon: './plus.svg'
		},
		{
			name: 'Navigationspunkt 8',
			text: 'Lorem Ipsum dolor sit amet.',
			href: '#',
			icon: './plus.svg'
		}
	];

	const mainNavOneNews = {
		name: 'Neue Nachricht',
		text: 'Lorem Ipsum dolor sit amet.',
		href: '#',
		new: true
	};

	const mainNavTwopoints = [
		{
			name: 'Navigationspunkt 1',
			text: 'Lorem Ipsum dolor sit amet.',
			href: '#',
			icon: './plus.svg'
		},
		{
			name: 'Navigationspunkt 2',
			text: 'Lorem Ipsum dolor sit amet.',
			href: '#',
			icon: './plus.svg'
		},
		{
			name: 'Navigationspunkt 3',
			text: 'Lorem Ipsum dolor sit amet.',
			href: '#',
			icon: './plus.svg'
		},
		{
			name: 'Navigationspunkt 4',
			text: 'Lorem Ipsum dolor sit amet.',
			href: '#',
			icon: './plus.svg'
		},
		{
			name: 'Navigationspunkt 5',
			text: 'Lorem Ipsum dolor sit amet.',
			href: '#',
			icon: './plus.svg'
		},
		{
			name: 'Navigationspunkt 6',
			text: 'Lorem Ipsum dolor sit amet.',
			href: '#',
			icon: './plus.svg'
		},
		{
			name: 'Navigationspunkt 7',
			text: 'Lorem Ipsum dolor sit amet.',
			href: '#',
			icon: './plus.svg'
		},
		{
			name: 'Navigationspunkt 8',
			text: 'Lorem Ipsum dolor sit amet.',
			href: '#',
			icon: './plus.svg'
		}
	];

	const mainNavTwoNews = {
		name: 'Neue Nachricht',
		text: 'Lorem Ipsum dolor sit amet.',
		href: '#',
		new: true
	};

	const mainNavThreepoints = [
		{
			name: 'Navigationspunkt 1',
			text: 'Lorem Ipsum dolor sit amet.',
			href: '#',
			icon: './plus.svg'
		},
		{
			name: 'Navigationspunkt 2',
			text: 'Lorem Ipsum dolor sit amet.',
			href: '#',
			icon: './plus.svg'
		},
		{
			name: 'Navigationspunkt 3',
			text: 'Lorem Ipsum dolor sit amet.',
			href: '#',
			icon: './plus.svg'
		},
		{
			name: 'Navigationspunkt 4',
			text: 'Lorem Ipsum dolor sit amet.',
			href: '#',
			icon: './plus.svg'
		},
		{
			name: 'Navigationspunkt 5',
			text: 'Lorem Ipsum dolor sit amet.',
			href: '#',
			icon: './plus.svg'
		},
		{
			name: 'Navigationspunkt 6',
			text: 'Lorem Ipsum dolor sit amet.',
			href: '#',
			icon: './plus.svg'
		},
		{
			name: 'Navigationspunkt 7',
			text: 'Lorem Ipsum dolor sit amet.',
			href: '#',
			icon: './plus.svg'
		},
		{
			name: 'Navigationspunkt 8',
			text: 'Lorem Ipsum dolor sit amet.',
			href: '#',
			icon: './plus.svg'
		}
	];

	const mainNavThreeNews = {
		name: 'Neue Nachricht',
		text: 'Lorem Ipsum dolor sit amet.',
		href: '#',
		new: true
	};
</script>

<header class="">
	<nav class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" aria-label="Top">
		<div class="flex w-full items-center justify-between py-6 lg:border-none">
			<div class="flex items-center">
				<a href="./">
					<span class="sr-only">Gemeinde Sulzbach</span>
					<img class="h-20 w-auto" src="./gs-logo.png" alt="" />
				</a>
				<div class="ml-10 hidden space-x-8 lg:block" />
			</div>
			<div class="ml-10 flex space-x-4">
				{#each navigation as link (link.name)}
					<a href={link.href} class="flex text-sm font-medium text-gray-900">
						<img class="h-5 w-5" src={link.icon} alt={link.name} />
						<div class="px-2">{link.name}</div>
					</a>
				{/each}
			</div>
		</div>
	</nav>
</header>

<nav class="mx-auto" aria-label="Top">
	<div class="relative bg-white">
		<div class="flex items-center justify-between py-6 md:justify-start ">
			<div class="-my-2 -mr-2 md:hidden">
				<button
					type="button"
					class="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gsblack-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-700"
					aria-expanded="false"
				>
					<span class="sr-only">Open menu</span>
					<!-- Heroicon name: outline/bars-3 -->
					<svg
						class="h-6 w-6"
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						stroke-width="1.5"
						stroke="currentColor"
						aria-hidden="true"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
						/>
					</svg>
				</button>
			</div>
			<nav class="hidden w-full justify-end space-x-10 md:flex">
				<div class="relative flex w-[60%] justify-start">
					<!-- Item active: "text-gray-900", Item inactive: "text-gsblack-100" -->

					<!--
                'Solutions' flyout menu, show/hide based on flyout menu state.
      
                Entering: "transition ease-out duration-200"
                  From: "opacity-0 translate-y-1"
                  To: "opacity-100 translate-y-0"
                Leaving: "transition ease-in duration-150"
                  From: "opacity-100 translate-y-0"
                  To: "opacity-0 translate-y-1"
              -->

					<button
						type="button"
						class="max-w-24 group mr-12 inline-flex items-center border-l-4 border-gsorange-100 bg-white pl-6 text-base font-medium text-gsblack-100"
						aria-expanded="false"
						on:click={() => {
							toggleNavOne = !toggleNavOne;
						}}
					>
						<span class="inline-block text-left text-xl font-bold leading-tight"
							>Bürgerservice &<br />Rathaus</span
						>
						<!--
        Heroicon name: mini/chevron-down

        Item active: "text-gray-600", Item inactive: "text-gray-400"
      -->
					</button>

					{#if toggleNavOne}
						<div
							class="absolute z-10 -ml-4 mt-20 w-screen max-w-md transform lg:left-1/3 lg:ml-0 lg:max-w-2xl lg:-translate-x-1/2"
						>
							<div class="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
								<div class="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8 lg:grid-cols-2">
									{#each mainNavOnepoints as mainNavOnepoint}
										<a href="./" class="-m-3 flex items-start rounded-lg p-3 hover:bg-gray-50">
											<div
												class="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-md bg-gray-100 text-white sm:h-12 sm:w-12"
											>
												<!-- Heroicon name: outline/squares-2x2 -->
												<img
													src={mainNavOnepoint.icon}
													alt={mainNavOnepoint.name}
													class="h-6 w-6"
												/>
											</div>
											<div class="ml-4">
												<p class="text-base font-medium text-gray-900">{mainNavOnepoint.name}</p>
												<p class="mt-1 text-sm text-gsblack-100">
													{mainNavOnepoint.text}
												</p>
											</div>
										</a>
									{/each}
								</div>
								<div class="bg-gray-50 p-5 sm:p-8">
									<a href="./" class="-m-3 flow-root rounded-md p-3 hover:bg-gray-100">
										<div class="flex items-center">
											<div class="text-base font-medium text-gray-900">{mainNavThreeNews.name}</div>
											{#if mainNavThreeNews.new}
												<span
													class="ml-3 inline-flex items-center rounded-full bg-red-100 px-3 py-0.5 text-xs font-medium text-red-800"
												>
													Neu
												</span>
											{/if}
										</div>
										<p class="mt-1 text-sm text-gsblack-100">
											{mainNavThreeNews.text}
										</p>
									</a>
								</div>
							</div>
						</div>
					{/if}

					<button
						type="button"
						class="max-w-24 group mr-12 flex items-center border-l-4 border-gsblue-100 bg-white pl-6 text-base font-medium text-gsblack-100"
						aria-expanded="false"
						on:click={() => {
							toggleNavTwo = !toggleNavTwo;
						}}
					>
						<span class="inline-block text-left text-xl font-bold leading-tight"
							>Wirtschaft &<br />Tourismus</span
						>
						<!--
                  Heroicon name: mini/chevron-down
      
                  Item active: "text-gray-600", Item inactive: "text-gray-400"
                -->
					</button>

					{#if toggleNavTwo}
						<div
							class="absolute z-10 -ml-4 mt-20 w-screen max-w-md transform lg:left-1/3 lg:ml-0 lg:max-w-2xl lg:-translate-x-1/2"
						>
							<div class="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
								<div class="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8 lg:grid-cols-2">
									{#each mainNavTwopoints as mainNavTwopoint (mainNavTwopoint.name)}
										<a href="./" class="-m-3 flex items-start rounded-lg p-3 hover:bg-gray-50">
											<div
												class="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-md bg-gray-100 text-white sm:h-12 sm:w-12"
											>
												<!-- Heroicon name: outline/squares-2x2 -->
												<img
													src={mainNavTwopoint.icon}
													alt={mainNavTwopoint.name}
													class="h-6 w-6"
												/>
											</div>
											<div class="ml-4">
												<p class="text-base font-medium text-gray-900">{mainNavTwopoint.name}</p>
												<p class="mt-1 text-sm text-gsblack-100">
													{mainNavTwopoint.text}
												</p>
											</div>
										</a>
									{/each}
								</div>
								<div class="bg-gray-50 p-5 sm:p-8">
									<a href="./" class="-m-3 flow-root rounded-md p-3 hover:bg-gray-100">
										<div class="flex items-center">
											<div class="text-base font-medium text-gray-900">{mainNavTwoNews.name}</div>
											{#if mainNavTwoNews.new}
												<span
													class="ml-3 inline-flex items-center rounded-full bg-red-100 px-3 py-0.5 text-xs font-medium text-red-800"
												>
													Neu
												</span>
											{/if}
										</div>
										<p class="mt-1 text-sm text-gsblack-100">
											{mainNavTwoNews.text}
										</p>
									</a>
								</div>
							</div>
						</div>
					{/if}

					<button
						type="button"
						class="max-w-24 group mr-12 inline-flex items-center border-l-4 border-gsgreen-100 bg-white pl-6 text-base font-medium text-gsblack-100"
						aria-expanded="false"
						on:click={() => {
							toggleNavThree = !toggleNavThree;
						}}
					>
						<span class="inline-block text-left text-xl font-bold leading-tight"
							>Soziales &<br />Kultur</span
						>
						<!--
                  Heroicon name: mini/chevron-down
      
                  Item active: "text-gray-600", Item inactive: "text-gray-400"
                -->
					</button>

					{#if toggleNavThree}
						<div
							class="absolute z-10 -ml-4 mt-20 w-screen max-w-md transform lg:left-1/3 lg:ml-0 lg:max-w-2xl lg:-translate-x-1/2"
						>
							<div class="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
								<div class="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8 lg:grid-cols-2">
									{#each mainNavThreepoints as mainNavThreepoint (mainNavThreepoint.name)}
										<a href="./" class="-m-3 flex items-start rounded-lg p-3 hover:bg-gray-50">
											<div
												class="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-md bg-gray-100 text-white sm:h-12 sm:w-12"
											>
												<!-- Heroicon name: outline/squares-2x2 -->
												<img
													src={mainNavThreepoint.icon}
													alt={mainNavThreepoint.name}
													class="h-6 w-6"
												/>
											</div>
											<div class="ml-4">
												<p class="text-base font-medium text-gray-900">{mainNavThreepoint.name}</p>
												<p class="mt-1 text-sm text-gsblack-100">
													{mainNavThreepoint.text}
												</p>
											</div>
										</a>
									{/each}
								</div>
								<div class="bg-gray-50 p-5 sm:p-8">
									<a href="./" class="-m-3 flow-root rounded-md p-3 hover:bg-gray-100">
										<div class="flex items-center">
											<div class="text-base font-medium text-gray-900">{mainNavThreeNews.name}</div>
											{#if mainNavThreeNews.new}
												<span
													class="ml-3 inline-flex items-center rounded-full bg-red-100 px-3 py-0.5 text-xs font-medium text-red-800"
												>
													Neu
												</span>
											{/if}
										</div>
										<p class="mt-1 text-sm text-gsblack-100">
											{mainNavThreeNews.text}
										</p>
									</a>
								</div>
							</div>
						</div>
					{/if}
				</div>
			</nav>
		</div>
	</div>
</nav>
