// SPDX-License-Identifier: MIT

pragma solidity ^0.8.9;

interface IYToken {
    function deposit(uint256 mintAmount) external;

    function balanceOf(address account) external view returns (uint256);
}
