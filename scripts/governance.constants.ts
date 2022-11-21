//// L1
export const L1_TIMELOCK_DELAY = 5;
export const L1_9_OF_12_SECURITY_COUNCIL = "0x76CDc6DB8333cBa9E6d710163eb82DD906893fDa";
export const L1_ARB_ROUTER = "0x72Ce9c846789fdB6fC1f34aC4AD25Dd9ef7031ef";
export const L1_ARB_GATEWAY = "0xa3A7B6F88361F48403514059F1F16C8E78d60EeC";
export const L1_NOVA_ROUTER = "0xC840838Bc438d73C16c2f8b22D2Ce3669963cD48";
export const L1_NOVA_GATEWAY = "0xB2535b988dcE19f9D71dfB22dB6da744aCac21bf";

//// L2
export const L2_TIMELOCK_DELAY = 7;
export const L2_9_OF_12_SECURITY_COUNCIL = "0xD99DD65559341008213A41E17e29777872bab481";
export const L2_7_OF_12_SECURITY_COUNCIL = "0xFde71E607Fa694284F21F620ac2720291614FaCe";
export const L2_CORE_QUORUM_TRESHOLD = 5;
export const L2_TREASURY_QUORUM_TRESHOLD = 3;
export const L2_PROPOSAL_TRESHOLD = 100;
export const L2_VOTING_DELAY = 10;
export const L2_VOTING_PERIOD = 10;
export const L2_MIN_PERIOD_AFTER_QUORUM = 1;

//// L2 Arbitrum token
// 10 billion tokens (we use parseEther in script to add decimals)
export const L2_TOKEN_INITIAL_SUPPLY = "10000000000";
// 2 billion tokens (dummy value atm)
export const L2_NUM_OF_TOKENS_FOR_TREASURY = "2000000000";
// receiver of the airdrop leftovers (dummy value atm)
export const L2_SWEEP_RECECIVER = "0x0B563dfac4940547D04f6B58D719B5AA2e29597d";
// initial owner responsible for setting the airdrop recipients (dummy value atm)
export const L2_TOKEN_DISTRIBUTOR_OWNER = "0x59D74CC054A520217D6eC7eAED6C36507347A236";
// airdrop claim start block number (dummy value atm)
export const L2_CLAIM_PERIOD_START = 16100000;
// airdrop claim end block number (dummy value atm)
export const L2_CLAIM_PERIOD_END = 16200000;
