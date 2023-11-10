<script>
	export let song;
</script>

<div class="player">
	<iframe
		title="Music to guess"
		src="https://www.youtube.com/embed/{song}?autoplay=1&controls=0&loop=1"
		allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
	/>
	<img
		src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Objects/Musical%20Notes.png"
		alt="Musical Notes"
	/>
</div>

<style>
	.player {
		aspect-ratio: 7 / 8;
		width: 28rem;
		display: flex;
		justify-content: center;
		align-items: center;
		filter: drop-shadow(0 0 8rem var(--primary-color));
	}

	.player iframe {
		display: none;
	}

	.player img {
		width: 80%;
	}
</style>
