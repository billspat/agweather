<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';
	import { onMount } from 'svelte';
	
	let { children } = $props();
	
	// only import after initialized since they use the document object
	onMount(async () => {    
		const { initMobileNav, initAccessibleTabs, initModals, initCopyButtons, initPublicationFilters } = await import('$lib/index');
		initMobileNav();
		initAccessibleTabs();
		initModals();
		initCopyButtons();
		initPublicationFilters();

  	});
</script>

<svelte:head><link rel="icon" href={favicon} /></svelte:head>
{@render children()}
