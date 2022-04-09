import axios from "axios";

export const getTreasury = async ({chainId, treasuryAddress}) => {
    // console.log("HERE")
    // console.log(chainId)
    // console.log(treasuryAddress)
    //treasuryAddress = `0x3e40d73eb977dc6a537af587d48316fee66e9c8c`
    // chainId = 1
    let idx = 0
    if (treasuryAddress === `0x3e40d73eb977dc6a537af587d48316fee66e9c8c`) {
        idx = 1
    }

    let url = `https://api.covalenthq.com/v1/${chainId}/address/${treasuryAddress}/balances_v2/?quote-currency=USD&format=JSON&nft=false&no-nft-fetch=false&key=ckey_docs`
    console.log("url is " + url)
    try {
        let res = await axios(url);
        return res.data.data.items[idx].quote
    } catch (e) {
        console.log(e)
        return 0
    }
}
