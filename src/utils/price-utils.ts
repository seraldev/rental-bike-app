const DAY_LIMIT: number = 15;
const PRICE_BASE_BEFORE_LIMIT: number = 10;
const PRICE_BASE_AFTER_LIMIT: number = 12;

const daysBikeType = {
    'old': 3,
    'normal': 5
};

export const calculatePrice = ({ type, date, days }): number => {

    if (!days || days === 0 || !date) return 0;

    const dateDay: number = parseInt(date.split('-')[2]);
    const priceBase: number = dateDay >= DAY_LIMIT ? PRICE_BASE_AFTER_LIMIT : PRICE_BASE_BEFORE_LIMIT;

    if (type === 'electric') return priceBase * days;

    return days <= daysBikeType[type] ? priceBase : priceBase + (priceBase * (days - daysBikeType[type]));

}