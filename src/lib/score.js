import { writable } from "svelte/store";

export const score = writable(0);
export const question = writable(1);
export const highscore = writable(
	Number(localStorage.getItem("highscore")) || 0
);
