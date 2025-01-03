import {Hand} from 'pokersolver';

export const cards = [
    '2h', '3h', '4h', '5h', '6h', '7h', '8h', '9h', 'Th', 'Jh', 'Qh', 'Kh', 'Ah',
    '2d', '3d', '4d', '5d', '6d', '7d', '8d', '9d', 'Td', 'Jd', 'Qd', 'Kd', 'Ad',
    '2c', '3c', '4c', '5c', '6c', '7c', '8c', '9c', 'Tc', 'Jc', 'Qc', 'Kc', 'Ac',
    '2s', '3s', '4s', '5s', '6s', '7s', '8s', '9s', 'Ts', 'Js', 'Qs', 'Ks', 'As'
];

export const handRankings = [
    'High Card',
    'Pair',
    'Two Pair',
    'Three of a Kind',
    'Straight',
    'Flush',
    'Full House',
    'Four of a Kind',
    'Straight Flush',
    'Royal Flush'
];

export const getHand = () => {
    const shuffledCards = [...cards].sort(() => Math.random() - 0.5);
    return shuffledCards.slice(0, 5);
};

export const resolveHand = (hand: string[]) => {
    return Hand.solve(hand).name;
}

export const getOptions = (option: string) => {
    return [option, ...handRankings
        .filter((ranking) => ranking !== option)
        .slice(0, 2)]
        .sort(() => Math.random() - 0.5);
}

const cardPropsMap = {
    h: { symbol: '♥', color: 'red' },
    d: { symbol: '♦', color: 'blue' },
    c: { symbol: '♣', color: 'green' },
    s: { symbol: '♠', color: 'black' }
};

export interface Card {
    value: string;
    symbol: string;
    color: string;
}

export const transformCardArray: Card[] = (hand: string[]) => {
    return hand.map(cardCode => {
        const value = cardCode.slice(0, -1);
        const symbol = cardCode.slice(-1);

        const data = cardPropsMap[symbol];

        return { value: value === 'T' ? 10 : value, symbol: data.symbol, color: data.color } as Card;
    });
}
