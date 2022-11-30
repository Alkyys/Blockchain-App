// https://eth-goerli.g.alchemy.com/v2/J3ye2NpLgBTDX_aAM0uw7Qm4Gc2-JD6P

require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.0",
  networks: {
    goerli: {
      url: "https://eth-goerli.g.alchemy.com/v2/J3ye2NpLgBTDX_aAM0uw7Qm4Gc2-JD6P",
      accounts: [
        "66f4a3aca0c44cb6db08d715ee39dcff0a37847e6afbd3cb0bcdf14b99b57497",
      ],
    },
  },
};
