<script lang="ts">
	import './layout.css';
	// import favicon from '$lib/assets/favicon.svg';
	import favicon from '$lib/assets/favicon.ico'; 
	import Header from "$lib/components/Header.svelte";
	import Footer from "$lib/components/Footer.svelte"
	let { children } = $props();

	import { page } from '$app/state';
	
	// MSU Theme JS (to assist with accessibility)
	// only import after initialized since these functions use the document object
	import { onMount } from 'svelte';
	onMount(async () => {    
		// await proper import
		const { initMobileNav, initAccessibleTabs, initModals, initCopyButtons, initPublicationFilters } = await import('$lib/index');

		initMobileNav();
		initAccessibleTabs();
		initModals();
		initCopyButtons();
		initPublicationFilters();

	});

</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<meta name="description" content="Dr. Jeff Andresen's home page">
	<meta name="text-scale" content="scale">
</svelte:head>

<Header pageTitle ={page.data.pageTitle} />  <!-- "Agricultural Weather Office" -->
<!-- all chidren need a 'main'-->
<!-- <main id="main-content" class="flex-grow py-10 px-4 sm:px-8"> -->
	{@render children()}
<!-- </main> -->

<Footer />