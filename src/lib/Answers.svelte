<script>
	import { createEventDispatcher, onMount } from "svelte";
	import { fade } from "svelte/transition";
	import { score, question } from "./score";

	export let possibilities;
	export let correct;

	let hasAnswered = false;
	let timePassed = 0;

	const dispatch = createEventDispatcher();

	onMount(() => {
		const interval = setInterval(() => {
			timePassed += 0.1;
		}, 100);

		return () => {
			clearInterval(interval);
		};
	});

	function answered(index) {
		if (!hasAnswered) {
			hasAnswered = true;

			if (index === correct) {
				const scoreToAdd = Math.floor((20 - timePassed) * 10);

				if (scoreToAdd > 0) {
					score.set($score + scoreToAdd);
				}
			}

			question.set($question + 1);

			setTimeout(() => {
				dispatch("answered");
			}, 1500);
		}
	}
</script>

<div class="answers" class:answered={hasAnswered} in:fade>
	{#each possibilities as possibility, index}
		{#if index !== 4}
			<button
				class="possibility"
				class:correct={index === correct}
				on:click={() => answered(index)}
			>
				{possibility}
			</button>
		{/if}
	{/each}
	<button
		class="possibility"
		class:correct={correct === 4}
		on:click={() => answered(4)}
		style:font-style="italic"
	>
		None of them
	</button>
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

	.answers.answered .possibility {
		transform: scale(0.95);
		filter: grayscale(1);
	}

	.answers.answered .possibility.correct {
		transform: scale(1.05);
		filter: drop-shadow(0 0 2rem var(--primary-color));
	}
</style>
