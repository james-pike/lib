export async function fetchKRC721(collection: string, tokenId: string) {
    try {
      // Query Kasplex API for token data
      const url = `https://api.kasplex.org/v1/krc721/${collection}/${tokenId}`;
      const response = await fetch(url, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          // Add 'X-API-KEY': 'your-key' if Kasplex requires it
        },
      });
      if (!response.ok) throw new Error(`NFT not found: ${response.status}`);
      const data = await response.json();
  
      // Fetch metadata from tokenURI (e.g., IPFS)
      const metadataResponse = await fetch(data.tokenURI.replace('ipfs://', 'https://ipfs.io/ipfs/'));
      if (!metadataResponse.ok) throw new Error('Failed to fetch metadata');
      const metadata = await metadataResponse.json();
  
      return { ...data, metadata };
    } catch (error) {
      console.error('Error fetching KRC-721:', error);
      throw error;
    }
  }