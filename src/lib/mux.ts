import Mux from '@mux/mux-node';

const { MUX_TOKEN_ID, MUX_TOKEN_SECRET } = process.env;

if (!MUX_TOKEN_ID || !MUX_TOKEN_SECRET) {
  throw new Error('MUX credentials are missing in environment variables');
}

const mux = new Mux({
  tokenId: MUX_TOKEN_ID,
  tokenSecret: MUX_TOKEN_SECRET,
});

export default mux;