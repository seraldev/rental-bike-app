const DAY_LIMIT: number = 15;
const PRICE_BASE_BEFORE_LIMIT: number = 10;
const PRICE_BASE_AFTER_LIMIT: number = 12;

export const calculatePrice = ({ type, date, days }): number => {
    if(!days || days === 0) return 0;

    const priceBase: number = date.date() >= DAY_LIMIT ? PRICE_BASE_AFTER_LIMIT : PRICE_BASE_BEFORE_LIMIT;

    let newPrice: number = 0;

    switch (type) {
        case 'electric':
            newPrice = priceBase * days;
            break;
        case 'old':
            newPrice = days <= 3 ? priceBase : priceBase + (priceBase * (days - 3));
            break;

        default:
            newPrice = days <= 5 ? priceBase : priceBase + (priceBase * (days - 5));
            break;
    }

    return newPrice;
}