import { defineStore } from 'pinia';

interface Attempt {
    no: number;
    correct: number;
}

export const useStore = defineStore('game', {
    state: () => ({
        correctAnswers: 0,
        attempts: [] as Attempt[],
    }),
    actions: {
        incrementCorrect() {
            this.correctAnswers++;
        },
        endGame() {
            const attempt = {
                no: this.attempts.length + 1,
                correct: this.correctAnswers
            } as Attempt;
            this.attempts.push(attempt);
            this.correctAnswers = 0;
        }
    },
});