import { ChainId } from '@pancakeswap/sdk'
import { useUserCakeLockStatus } from 'hooks/useUserCakeLockStatus'
import { useMemo } from 'react'
import { useChainCurrentBlock } from 'state/block/hooks'

export const useMenuItemsStatus = (): Record<string, string> => {
  const currentBlock = useChainCurrentBlock(ChainId.BSC)
  const isUserLocked = useUserCakeLockStatus()

  const ifoStatus = 'coming_soon'

  return useMemo(() => {
    return {
      ...(isUserLocked && {
        '/pools': 'lock_end',
      }),
    }
  }, [isUserLocked])
}
