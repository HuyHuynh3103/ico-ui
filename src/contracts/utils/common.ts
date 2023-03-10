export type AddressType = {
    97: string;
    56: string;
};

export enum CHAIN_ID {
    TESTNET = 97,
    MAINNET = 56,
}

export default function getChainIdFromEnv(): number {
    const env = process.env.NEXT_PUBLIC_CHAIN_ID;
    if (!env) {
        return 97;
    }
    return parseInt(env);
}

export const getRPC = () => {
    if (getChainIdFromEnv() === CHAIN_ID.MAINNET) {
        return process.env.NEXT_PUBLIC_RPC_MAINNET;
    }
    return process.env.NEXT_PUBLIC_RPC_TESTNET;
};

export const getDesiredGateWay = () => {
    return "https://cf-ipfs.com";
};

export const SMART_ADDRESS = {
    CROWD_SALE: {
        97: "0xeb8b938Dc941f2F1Ba1D5b0b44Afa056d5b79222",
        56: "",
    },
    USDT: {
        97: "0xE1937cAcDA6C1f341c11626193bDff3a2eb3429E",
        56: "",
    },
    NFT: {
        97: "0x0986e90fdEFF82ad872E6240149F29AFf68F9119",
        56: "",
    },
    MARKET: {
        97: "0xB1b5428D4e78D40e1c95dD5a2EC87aC924C33552",
        56: "",
    },
    AUCTION: {
        97: "0x7FDC4475c948eE3Ba33fE0b5f7FF8e4e63EBea63",
        56: "",
    },
    FLOP: {
        97: "0x91e1272Adb3804745aA35619843349573A49ECe7",
        56: "",
    },
};
