const ether = require('@openzeppelin/test-helpers/src/ether');

module.exports = {
  NATIVE_TOKEN_ADDRESS: '0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE',
  NATIVE_TOKEN_DECIMAL: 18,

  MATIC_TOKEN: '0x0000000000000000000000000000000000001010',

  /* WMATIC */
  WMATIC_TOKEN: '0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270',
  WMATIC_SYMBOL: 'WMATIC',
  AWMATIC_V2: '0x8dF3aad3a84da6b69A4DA8aeC3eA40d9091B2Ac4',
  AWMATIC_V2_DEBT_STABLE: '0xb9A6E29fB540C5F1243ef643EB39b0AcbC2e68E3',
  AWMATIC_V2_DEBT_VARIABLE: '0x59e8E9100cbfCBCBAdf86b9279fa61526bBB8765',

  /* WETH */
  WETH_TOKEN: '0x7ceB23fD6bC0adD59E62ac25578270cFf1b9f619',
  WETH_SYMBOL: 'WETH',
  AWETH_V2: '0x28424507fefb6f7f8E9D3860F56504E4e5f5f390',
  // AWETH_V2_DEBT_STABLE: '0xc478cBbeB590C76b01ce658f8C4dda04f30e2C6f',
  AWETH_V2_DEBT_VARIABLE: '0xeDe17e9d79fc6f9fF9250D9EEfbdB88Cc18038b5',

  /* DAI */
  DAI_TOKEN: '0x8f3Cf7ad23Cd3CaDbD9735AFf958023239c6A063',
  DAI_SYMBOL: 'DAI',
  ADAI_V2_TOKEN: '0x27F8D03b3a2196956ED754baDc28D73be8830A6e',
  // ADAI_V2_DEBT_STABLE: '0x2238101B7014C279aaF6b408A284E49cDBd5DB55',
  // ADAI_V2_DEBT_VARIABLE: '0x75c4d1Fb84429023170086f06E682DcbBF537b7d',

  /* MKR */
  MKR_TOKEN: '0x6f7C932e7684666C9fd1d44527765433e01fF61d',
  MKR_SYMBOL: 'MKR',

  /* WBTC */
  WBTC_TOKEN: '0x1BFD67037B42Cf73acF2047067bd4F2C47D9BfD6',
  WBTC_SYMBOL: 'WBTC',

  /* LINK */
  LINK_TOKEN: '0x53E0bca35eC356BD5ddDFebbD1Fc0fD03FaBad39',
  LINK_SYMBOL: 'LINK',

  /* USDT */
  USDT_TOKEN: '0xc2132D05D31c914a87C6611C10748AEb04B58e8F',
  USDT_SYMBOL: 'USDT',
  AUSDT_V2_TOKEN: '0x60d55f02a771d515e077c9c2403a1ef324885cec',

  /* COMP */
  COMP_TOKEN: '0x8505b9d2254A7Ae468c0E9dd10Ccea3A837aef5c',
  COMP_SYMBOL: 'COMP',

  /* USDC */
  USDC_TOKEN: '0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174',
  USDC_SYMBOL: 'USDC',
  AUSDC_V2_TOKEN: '0x1a13f4ca1d028320a707d99520abfefca3998b7f',

  /* CRV */
  CRV_TOKEN: '0x172370d5Cd63279eFa6d502DAB29171933a610AF',
  CRV_SYMBOL: 'CRV',

  /* YFI */
  YFI_TOKEN: '0xDA537104D6A5edd53c6fBba9A898708E465260b6',
  YFI_SYMBOL: 'YFI',

  /* SNX */
  SNX_TOKEN: '0x50B728D8D964fd00C2d0AAD81718b71311feF68a',
  SNX_SYMBOL: 'SNX',

  /* OMG */
  OMG_TOKEN: '0x62414D03084EeB269E18C970a21f45D2967F0170',
  OMG_SYMBOL: 'OMG',

  /* SUSHI */
  SUSHI_TOKEN: '0x0b3F868E0BE5597D5DB7fEB59E1CADBb0fdDa50a',
  SUSHI_SYMBOL: 'SUSHI',

  /* AAVE Interest Rate Mode */
  AAVE_RATEMODE: { NODEBT: 0, STABLE: 1, VARIABLE: 2 },

  /* Services */
  AAVEPROTOCOL_V2_PROVIDER: '0xd05e3E715d945B59290df0ae8eF85c1BdB684744',
  SUSHISWAP_FACTORY: '0xc35DADB65012eC5796536bD9864eD8773aBc74C4',
  SUSHISWAP_ROUTER: '0x1b02dA8Cb0d097eB8D57A175b88c7D8b47997506',
  QUICKSWAP_FACTORY: '0x5757371414417b8C6CAad45bAeF941aBc7d3Ab32',
  QUICKSWAP_ROUTER: '0xa5E0829CaCEd8fFDD4De3c43696c57F7D7A678ff',
  CURVE_ADDRESS_PROVIDER: '0x0000000022D53366457F9d5E68Ec105046FC4383',
  CURVE_AAVECRV: '0xE7a24EF0C5e95Ffb0f6684b813A78F2a3AD7D171',
  CURVE_AAVE_SWAP: '0x445FE580eF8d70FF569aB36e80c647af338db351',
  CURVE_AAVE_GAUGE: '0xe381C25de995d62b453aF8B931aAc84fcCaa7A62',
  CURVE_ATRICRYPTO_DEPOSIT: '0x3FCD5De6A9fC8A99995c406c77DDa3eD7E406f81',
  CURVE_ATRICRYPTOCRV: '0x8096ac61db23291252574D49f036f0f9ed8ab390',
  CURVE_ATRICRYPTOCRV_PROVIDER: '0x4D26b320cc9cB6D46d89404D8439E7915069D977',
  DYFNSWAP_FACTORY: '0xE7Fb3e833eFE5F9c441105EB65Ef8b261266423B',

  SUSHISWAP_DAI_WMATIC: '0x8929D3FEa77398F64448c85015633c2d6472fB29',
  SUSHISWAP_DAI_USDC: '0xCD578F016888B57F1b1e3f887f392F0159E26747',
  QUICKSWAP_WMATIC_WETH: '0xadbf1854e5883eb8aa7baf50705338739e558e5b',
  QUICKSWAP_DAI_WETH: '0x4a35582a710e1f4b2030a3f826da20bfb6703c09',

  FURUCOMBO_PROXY: '0x125d2E4a83bBba4e6f51a244c494f9A1958D20BB',
  FURUCOMBO_REGISTRY: '0x5E56d6c6F763d6B1f21723a11be98533E168C3c9',
  FURUCOMBO_REGISTRY_OWNER: '0x64585922a9703d9EdE7d353a6522eb2970f75066',

  /* Event Signature */
  RecordHandlerResultSig:
    '0x90c726ff5efa7268723ee48df835144384bc0f012e89750782886764b5e54f16',

  // MerkleRedeem Claim Merkle Proof
  MR_TOTAL_SUPPLY: '20', // ehter
  MR_CLAIM_USER: '0x1b57b3A1d5b4aa8E218F54FafB00975699463e6e',
  MR_CLAIM_AMOUNT: '7', // ether
  MR_CLAIM_MERKLE_ROOT:
    '0xf73d36bda3f003637275d2b2e15ed6b9aa58fc8653dbc4dfbb0eca57a4ba8e6e',
  MR_CLAIM_MERKLE_PROOFS: [
    '0xee8b047fd520c8befc41c7c69ee860a9e8463d7770201126b27b1d76f4159a21',
    '0x94ed398e27e849376accc051f67010c2f0bf9df5ed2dc86c179fc7132c780180',
    '0xc1426e8cdac7d0d5c911219007db6366856d7c6e82baade601db7aa3c3343dd8',
    '0xed112d2d07db65f0ff74ad495d1ca35e89d51ea233be7ab2cc275d69559c97fa',
  ],
};
