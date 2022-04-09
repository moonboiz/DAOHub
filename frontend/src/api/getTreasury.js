import axios from "axios";

export const getTreasury = async ({chainId, treasuryAddress}) => {
    // console.log("HERE")
    // console.log(chainId)
    // console.log(treasuryAddress)
    // treasuryAddress = `0x2573c60a6d127755aa2dc85e342f7da2378a0cc5`
    // chainId = 1
    let url = `https://api.covalenthq.com/v1/${chainId}/address/${treasuryAddress}/balances_v2/?quote-currency=USD&format=JSON&nft=false&no-nft-fetch=false&key=ckey_docs`
    console.log("url is " + url)
    try {
        let res = await axios(url);
        return res.data.data.items[0].quote
    } catch (e) {
        console.log(e)
        return 0
    }
}
