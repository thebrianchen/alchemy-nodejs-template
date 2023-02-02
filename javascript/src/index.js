import { Alchemy, Network, NftFilters } from 'alchemy-sdk';

const alchemy = new Alchemy({
  apiKey: 'YOUR_API_KEY', // TODO: replace with your api key
  network: Network.ETH_MAINNET
});

async function main() {
  // Get the latest block number.
  const block = await alchemy.core.getBlockNumber();
  console.log('The current block number is:', block);

  // Fetch all the NFTs owned by a given address. Exclude spam NFTs.
  const response = await alchemy.nft.getNftsForOwner('vitalik.eth', {
    excludeFilters: [NftFilters.SPAM]
  });
  console.log('Vitalik owns', response.totalCount, 'NFTs');
  console.log('Owned NFTS:', response.ownedNfts);

  // Fetch all the NFTs that an owner has minted.
  const response2 = await alchemy.nft.getMintedNfts('vitalik.eth');
  console.log('Minted NFTS:', response2.nfts);
}

main();
