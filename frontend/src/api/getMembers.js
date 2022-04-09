import axios from "axios";

export const getMembers = async ({chainId, tokenAddress}) => {
    let url = `https://api.covalenthq.com/v1/${chainId}/tokens/${tokenAddress}/token_holders/?quote-currency=USD&format=JSON&page-size=20&key=ckey_docs`
    try {
        let res = await axios(url);
        return res.data.data.items
    } catch (e) {
        console.log(e)
        return []
    }
}
