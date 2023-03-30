import { PrivateKeyWallet } from '@thirdweb-dev/auth/evm'
import { ThirdwebAuth } from '@thirdweb-dev/auth/next'

export const { ThirdwebAuthHandler, getUser } = ThirdwebAuth({
  domain: 'example.com',
  wallet: new PrivateKeyWallet(''),
})

export default ThirdwebAuthHandler()
