<script>
	import { createEventDispatcher } from "svelte";
	import { score, question } from "./score";

	export let possibilities;
	export let correct;

	const dispatch = createEventDispatcher();

	function answered(index) {
		if (index === correct) {
			score.set($score + 1);
		}

		question.set($question + 1);

		dispatch("answered");
	}
</script>

<div class="answers">
	{#each possibilities as possibility, index}
		<button class="possibility" on:click={() => answered(index)}>
			{possibility}
		</button>
	{/each}
</div>

<style>
	.answers {
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		align-items: start;
	}

	.possibility {
		width: 32rem;
		height: 4rem;
		margin: 1rem 4rem;
		background: var(--primary-color);
		color: var(--text-color);
		font-size: 1.5rem;
		font-weight: 500;
		border-radius: 1.6rem;
		border: none;
		outline: none;
		cursor: pointer;
		transition: all 0.4s ease;
	}

	.possibility:hover {
		background: var(--secondary-color);
		color: var(--primary-color);
	}
</style>
