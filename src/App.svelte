<script>
	import Player from "./lib/Player.svelte";
	import Answers from "./lib/Answers.svelte";
</script>

<div class="app">
	<div class="title">Guess Taylor's Songs</div>

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
</style>
