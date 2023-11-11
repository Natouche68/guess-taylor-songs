<script>
	import Player from "./lib/Player.svelte";
	import Answers from "./lib/Answers.svelte";
	import { score, question, highscore } from "./lib/score";
	import { songs } from "./lib/songs";

	let gameState = "start";
	let possibilitiesNames;
	let correct;
	let songId;

	function startGame() {
		gameState = "game";

		score.set(0);
		question.set(1);

		newQuestion();
	}

	function newQuestion() {
		if (songId) {
			let songToRemove;

			songs.forEach((song, index) => {
				if (song.id === songId) {
					songToRemove = index;
				}
			});

			songs.splice(songToRemove, 1);
		}

		if ($question > 10) {
			gameState = "end";

			if ($score > $highscore) {
				highscore.set($score);
				localStorage.setItem("highscore", String($highscore));
			}

			return;
		}

		const possibilities = [];
		const songList = structuredClone(songs);

		for (let i = 0; i < 5; i++) {
			let index = Math.floor(Math.random() * songList.length);
			possibilities.push(songList.splice(index, 1)[0]);
		}

		possibilitiesNames = possibilities.map((song, index) => {
			if (index !== 4) {
				return song.name;
			}
		});

		correct = Math.floor(Math.random() * 5);

		songId = possibilities[correct].id;
	}
</script>

<div class="app">
	<div class="title">Guess Taylor's Songs</div>

	{#if gameState === "start"}
		<div class="start-screen">
			<button class="start" on:click={startGame}>Start the game !</button>
			Best score :
			<div class="highscore">
				{$highscore}
			</div>
		</div>
	{:else if gameState === "game"}
		<div class="quiz">
			<Player song={songId} />
			{#key songId}
				<Answers
					possibilities={possibilitiesNames}
					{correct}
					on:answered={newQuestion}
				/>
			{/key}
		</div>
	{:else if gameState === "end"}
		<div class="end-screen">
			Your score :
			<div class="score">
				{$score}
			</div>
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

	.start-screen {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		margin-top: 8rem;
		font-size: 2rem;
		color: var(--secondary-color);
	}

	.start {
		margin-bottom: 3rem;
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

	.highscore {
		font-size: 5rem;
		font-weight: 600;
		color: var(--text-color);
	}

	.quiz {
		margin-top: 5rem;
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
	}

	.start:hover {
		background: var(--secondary-color);
		color: var(--primary-color);
		filter: drop-shadow(0 0 4rem var(--primary-color));
		transform: scale(1.1);
	}

	.end-screen {
		text-align: center;
		margin-top: 10rem;
		font-size: 2.4rem;
		font-weight: 500;
		color: var(--secondary-color);
	}

	.score {
		margin: 2rem;
		font-size: 9rem;
		font-weight: 700;
		color: var(--text-color);
		animation: score-glow 2s ease 0s infinite;
	}

	@keyframes score-glow {
		0%,
		100% {
			filter: drop-shadow(0 0 3.2rem var(--secondary-color));
		}

		50% {
			filter: drop-shadow(0 0 2rem var(--primary-color));
		}
	}
</style>
