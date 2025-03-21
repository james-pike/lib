import { component$, useSignal, useStyles$, $ } from '@builder.io/qwik';
import jeetsMetadata from '~/data/jeetsMetadata.json';

const styles = `
  @keyframes rotate3d {
    0% { transform: rotateY(0deg); }
    100% { transform: rotateY(360deg); }
  }
  .rotating-item { animation: rotate3d 6s linear infinite; transform-style: preserve-3d; }
`;

export default component$(() => {
  const nftSearchId = useSignal('');
  const nftData = useSignal<any>(null);
  const error = useSignal<string | null>(null);

  useStyles$(styles);

  const handleNFTSearch = $(() => {
    error.value = null;
    nftData.value = null;
    try {
      const nft = jeetsMetadata.nfts.find((nft: { edition: number }) => nft.edition === parseInt(nftSearchId.value));
      if (!nft) {
        throw new Error(`NFT with Edition ${nftSearchId.value} not found`);
      }
      const ipfsBase = 'bafybeif6ba2mj6utneenc6dob7jnvxc2oexplrwsxjwmxm3fgy7e36smqu';
      const imageFile = nft.image.split('/').pop(); // Extracts "1.png", "2.png", etc.
      const tokenURI = `ipfs://${ipfsBase}/${imageFile}`;
      const imageUrl = `https://cloudflare-ipfs.com/ipfs/${ipfsBase}/${imageFile}`; // Use Cloudflare gateway
      
      console.log('Image URL:', imageUrl); // Debug log
      console.log('Token URI:', tokenURI); // Debug log

      nftData.value = {
        metadata: {
          name: nft.name,
          description: nft.description,
          image: imageUrl,
          attributes: nft.attributes,
        },
        tokenURI: tokenURI,
      };
    } catch (err: any) {
      error.value = err.message || 'Failed to load NFT data. Check the ID and try again.';
    }
  });

  return (
    <section class="p-4 max-w-5xl mx-auto">
      <h1 class="text-2xl font-bold mb-4">Toxik NFT Checker</h1>
      <div class="flex gap-2 mb-4">
        <input
          type="number"
          value={nftSearchId.value}
          onInput$={(e) => (nftSearchId.value = (e.target as HTMLInputElement).value)}
          placeholder="Enter NFT Edition (e.g., 1)"
          class="border p-2 rounded w-full max-w-xs"
        />
        <button
          onClick$={handleNFTSearch}
          class="bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
        >
          Search
        </button>
      </div>

      {error.value && <p class="text-red-500 mb-4">{error.value}</p>}

      {nftData.value && (
        <div class="bg-gray-100 p-4 rounded-xl shadow-md">
          <img
            src={nftData.value.metadata.image}
            alt={nftData.value.metadata.name}
            class="max-w-[150px] mb-4 mx-auto rotating-item"
            onError$={() => {
              console.log(`Failed to load image: ${nftData.value.metadata.image}`);
              // Optionally set a fallback image
              // e.target.src = 'https://via.placeholder.com/150?text=Image+Not+Found';
            }}
          />
          <h2 class="text-xl font-semibold mb-2">{nftData.value.metadata.name}</h2>
          <p class="text-gray-600 mb-4">{nftData.value.metadata.description}</p>
          <div class="grid grid-cols-2 gap-2 text-sm mb-4">
            <div>
              <span class="font-semibold">Token URI:</span> {nftData.value.tokenURI}
            </div>
          </div>
          <h3 class="text-lg font-semibold mb-2">Attributes</h3>
          <ul class="list-disc pl-5 text-sm">
            {nftData.value.metadata.attributes?.map((attr: any, index: number) => (
              <li key={index}>
                {attr.trait_type}: {attr.value}
              </li>
            ))}
          </ul>
        </div>
      )}
    </section>
  );
});