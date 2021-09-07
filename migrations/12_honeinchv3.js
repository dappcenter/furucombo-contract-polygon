const Registry = artifacts.require('Registry');
const Handler = artifacts.require('HOneInchV3');
const utils = web3.utils;

module.exports = async function(deployer) {
  if (deployer.network === 'development') {
    return;
  }
  await deployer.deploy(Handler);
  const registry = await Registry.deployed();
  await registry.register(
    Handler.address,
    utils.asciiToHex('HOneInchV3')
  );
};
