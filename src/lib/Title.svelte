<script>
  export let title = document.location.href;
</script>

{#if title}
		<h1 class="text-3xl mb-3">{title}</h1>
{:else}
		<h1 class="text-3xl mb-3 text-gray-600">No title</h1>
{/if}
