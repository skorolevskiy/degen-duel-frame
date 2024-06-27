import { getFrameMetadata, FrameImageMetadata } from '@coinbase/onchainkit/frame';

export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL;

export const NEYNAR_API_KEY = process.env.NEYNAR_API_KEY;

const imageData: FrameImageMetadata = {
	src: `https://gateway.lighthouse.storage/ipfs/bafybeiborpipie6brxzofzgaf5eswp53pctxhu335etzbjyvax46pfvpwa/general.JPG`,
	aspectRatio: '1:1' // или '1.91:1'
};

export const FRAME_METADATA = getFrameMetadata({
  buttons: [{
		label: 'Join the guild',
	},],
  image: imageData,
  post_url: `${SITE_URL}/api/frame`,
});
