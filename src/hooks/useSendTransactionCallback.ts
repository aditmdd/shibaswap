import { calculateGasMargin } from 'utils'
import { ethers } from 'ethers'
import { useActiveWeb3React } from 'hooks/index'
import { useSelector } from 'react-redux'
import { AppState } from 'state'
import { TransactionResponse } from '@ethersproject/providers'
import { useCallback } from 'react'
import { BigNumber } from '@ethersproject/bignumber'

export default function useSendTransactionCallback() {
  const { account, library } = useActiveWeb3React()
  const gasPrice = useSelector((state: AppState) => state.application.gasPrice)

  return useCallback(
    async (
      contractAddress: string,
      encodedData: string,
      value: BigNumber,
      handler?: (response: TransactionResponse) => string,
    ): Promise<string | undefined> => {
      if (!account || !library) return

      const estimateGasOption = {
        from: account,
        to: contractAddress,
        data: encodedData,
        value,
      }
      const gasEstimate = await library
        .getSigner()
        .estimateGas(estimateGasOption)
        .then(response => {
          return response
        })
        .catch(error => {
          console.error(error)
          throw new Error(
            'gasEstimate not found: Unexpected error. Please contact support: none of the calls threw an error',
          )
        })
      const sendTransactionOption = {
        from: account,
        to: contractAddress,
        data: encodedData,
        gasLimit: calculateGasMargin(gasEstimate),
        ...(gasPrice?.standard ? { gasPrice: ethers.utils.parseUnits(gasPrice?.standard, 'wei') } : {}),
        ...(value.eq('0') ? {} : { value }),
      }
      const response = await library
        .getSigner()
        .sendTransaction(sendTransactionOption)
        .then(handler)
        .catch((error: any) => {
          // if the user rejected the tx, pass this along
          if (error?.code === 4001) {
            throw new Error('Transaction rejected.')
          } else {
            // Otherwise, the error was unexpected, and we need to convey that.
            console.error(`Send transaction failed`, error)
            throw new Error(error)
          }
        })
      return response
    },
    [account, gasPrice, library],
  )
}
