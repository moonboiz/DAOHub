export const getMembers = async (chainId, tokenAddress) => {
    let res
    try {
        res =  JSON.parse(`{
"data": {
"updated_at": "2022-04-09T11:41:24.099878551Z",
"items": [
{
"contract_decimals": 18,
"contract_name": "Theta Token",
"contract_ticker_symbol": "THETA",
"contract_address": "0x3883f5e181fccaf8410fa61e12b59bad963fb645",
"supports_erc": null,
"logo_url": "https://logos.covalenthq.com/tokens/1/0x3883f5e181fccaf8410fa61e12b59bad963fb645.png",
"address": "0xc15149236229bd13f0aec783a9cc8e8059fb28da",
"balance": "100000100000000000000000000",
"total_supply": "1000000000000000000000000000",
"block_height": 14551301
},
{
"contract_decimals": 18,
"contract_name": "Theta Token",
"contract_ticker_symbol": "THETA",
"contract_address": "0x3883f5e181fccaf8410fa61e12b59bad963fb645",
"supports_erc": null,
"logo_url": "https://logos.covalenthq.com/tokens/1/0x3883f5e181fccaf8410fa61e12b59bad963fb645.png",
"address": "0x0c9a45926a44a6fc9c8b6f9cb45c20483038698c",
"balance": "96997300000000000000000000",
"total_supply": "1000000000000000000000000000",
"block_height": 14551301
},
{
"contract_decimals": 18,
"contract_name": "Theta Token",
"contract_ticker_symbol": "THETA",
"contract_address": "0x3883f5e181fccaf8410fa61e12b59bad963fb645",
"supports_erc": null,
"logo_url": "https://logos.covalenthq.com/tokens/1/0x3883f5e181fccaf8410fa61e12b59bad963fb645.png",
"address": "0xbe0eb53f46cd790cd13851d5eff43d12404d33e8",
"balance": "90000000000000000000000000",
"total_supply": "1000000000000000000000000000",
"block_height": 14551301
},
{
"contract_decimals": 18,
"contract_name": "Theta Token",
"contract_ticker_symbol": "THETA",
"contract_address": "0x3883f5e181fccaf8410fa61e12b59bad963fb645",
"supports_erc": null,
"logo_url": "https://logos.covalenthq.com/tokens/1/0x3883f5e181fccaf8410fa61e12b59bad963fb645.png",
"address": "0xadb2b42f6bd96f5c65920b9ac88619dce4166f94",
"balance": "87850371845470525000000000",
"total_supply": "1000000000000000000000000000",
"block_height": 14551301
},
{
"contract_decimals": 18,
"contract_name": "Theta Token",
"contract_ticker_symbol": "THETA",
"contract_address": "0x3883f5e181fccaf8410fa61e12b59bad963fb645",
"supports_erc": null,
"logo_url": "https://logos.covalenthq.com/tokens/1/0x3883f5e181fccaf8410fa61e12b59bad963fb645.png",
"address": "0xf9bef8565d0fc134f5dcb6601b686a2de45dfec6",
"balance": "60000001000000000000000000",
"total_supply": "1000000000000000000000000000",
"block_height": 14551301
},
{
"contract_decimals": 18,
"contract_name": "Theta Token",
"contract_ticker_symbol": "THETA",
"contract_address": "0x3883f5e181fccaf8410fa61e12b59bad963fb645",
"supports_erc": null,
"logo_url": "https://logos.covalenthq.com/tokens/1/0x3883f5e181fccaf8410fa61e12b59bad963fb645.png",
"address": "0xb6ae2ce381aeb220eff8a7b6e91363e8a897619a",
"balance": "59806341096352087184318996",
"total_supply": "1000000000000000000000000000",
"block_height": 14551301
},
{
"contract_decimals": 18,
"contract_name": "Theta Token",
"contract_ticker_symbol": "THETA",
"contract_address": "0x3883f5e181fccaf8410fa61e12b59bad963fb645",
"supports_erc": null,
"logo_url": "https://logos.covalenthq.com/tokens/1/0x3883f5e181fccaf8410fa61e12b59bad963fb645.png",
"address": "0x3f5ce5fbfe3e9af3971dd833d26ba9b5c936f0be",
"balance": "46914550486961775009166630",
"total_supply": "1000000000000000000000000000",
"block_height": 14551301
},
{
"contract_decimals": 18,
"contract_name": "Theta Token",
"contract_ticker_symbol": "THETA",
"contract_address": "0x3883f5e181fccaf8410fa61e12b59bad963fb645",
"supports_erc": null,
"logo_url": "https://logos.covalenthq.com/tokens/1/0x3883f5e181fccaf8410fa61e12b59bad963fb645.png",
"address": "0x9e200cbec8503f025f87894f2eb0b59bd7a1d5f0",
"balance": "26782964000000000000000000",
"total_supply": "1000000000000000000000000000",
"block_height": 14551301
},
{
"contract_decimals": 18,
"contract_name": "Theta Token",
"contract_ticker_symbol": "THETA",
"contract_address": "0x3883f5e181fccaf8410fa61e12b59bad963fb645",
"supports_erc": null,
"logo_url": "https://logos.covalenthq.com/tokens/1/0x3883f5e181fccaf8410fa61e12b59bad963fb645.png",
"address": "0x3c28a0a84981084e7f72b2a0d138b1f6cf8d4b89",
"balance": "23779970871965532067352004",
"total_supply": "1000000000000000000000000000",
"block_height": 14551301
},
{
"contract_decimals": 18,
"contract_name": "Theta Token",
"contract_ticker_symbol": "THETA",
"contract_address": "0x3883f5e181fccaf8410fa61e12b59bad963fb645",
"supports_erc": null,
"logo_url": "https://logos.covalenthq.com/tokens/1/0x3883f5e181fccaf8410fa61e12b59bad963fb645.png",
"address": "0xf977814e90da44bfa03b6295a0616a897441acec",
"balance": "18000000000000000000000000",
"total_supply": "1000000000000000000000000000",
"block_height": 14551301
}
],
"pagination": {
"has_more": true,
"page_number": 0,
"page_size": 10,
"total_count": 10
}
},
"error": false,
"error_message": null,
"error_code": null
}`)
    } catch (e) {
        console.log(e)
        return []
    }
    console.log(res.data.items)
    return res.data.items
}
