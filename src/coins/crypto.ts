import axios from "axios";
import { ConfigParams } from "../config/config";

const cryptoSymbols = ['BNB', 'BTC', 'ETH', 'USDC', 'UNI'];

export async function getCryptoPrices(cryptos: string[]) {
    const cryptoSymbols = cryptos.join(",");
    const url = `https://pro-api.coinmarketcap.com/v2/cryptocurrency/quotes/latest?symbol=${cryptoSymbols}`;
    const response = await axios.get(url, { headers: { 'X-CMC_PRO_API_KEY': ConfigParams.COIN_MARKET_KEY } });


    const prices: { [key: string]: number } = {};
    for (const crypto of cryptos) {
        prices[crypto] = response.data.data[crypto].quote.USD.price;
    }

    console.log("Prices", prices);
    return prices

}

getCryptoPrices(cryptoSymbols);
