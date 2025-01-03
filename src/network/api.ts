import axios from 'axios';

export const fetchRandomWord = async () => {
    try {
        const response = await axios.get<{word: string}>('https://api.api-ninjas.com/v1/randomword', {
            headers: { 'X-Api-Key': import.meta.env.VITE_RANDOM_WORD_KEY }
        });
        return response.data.word[0];
    } catch (error) {
        console.error('Error fetching random word:', error);
        return 'FIXYOURAPI';
    }
}