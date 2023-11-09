<script>
	import Player from "./lib/Player.svelte";
	import Answers from "./lib/Answers.svelte";

	let gameStarted = false;
</script>

<div class="app">
	<div class="title">Guess Taylor's Songs</div>

	{#if gameStarted}
		<div class="quiz">
			<Player song="kx0rALx7PIg" />
			<Answers
				possibilities={[
					"Shake it off",
					"Blank space",
					"Wildest dreams",
					"Bad blood",
				]}
				correct={0}
			/>
		</div>
	{:else}
		<div class="start-screen">
			<button class="start" on:click={() => (gameStarted = true)}>
				Start the game !
			</button>
		</div>
	{/if}
</div>

<style>
	.title {
		padding: 0.6rem;
		text-align: center;
		font-family: "Playball", cursive;
		font-size: 3.6rem;
		font-weight: 700;
		border-bottom: 3px solid var(--secondary-color);
	}

	.quiz {
		margin-top: 5rem;
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
	}

	.start-screen {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		margin-top: 8rem;
	}

	.start {
		padding: 1.5rem;
		background: var(--primary-color);
		color: var(--text-color);
		font-size: 2.5rem;
		font-weight: 600;
		border-radius: 2rem;
		border: none;
		outline: none;
		cursor: pointer;
		transition: all 0.4s ease;
	}

	.start:hover {
		background: var(--secondary-color);
		color: var(--primary-color);
		filter: drop-shadow(0 0 4rem var(--primary-color));
		transform: scale(1.1);
	}
</style>
