import shuffle from 'lodash/shuffle'
import { ReactElement, useMemo } from 'react'
import { GalxeTraverseBanner } from '../GalxeTraverseBanner'
import LiquidStakingBanner from '../LiquidStakingBanner'
import PerpetualBanner from '../PerpetualBanner'
import { PolygonZkEvmBanner } from '../PolygonZkEvmBanner'
import TradingRewardBanner from '../TradingRewardBanner'
import ArbitrumOneBanner from '../ArbitrumOneBanner'
import { ZksyncBanner } from '../ZksyncBanner'
import MoonPayBanner from '../MoonPayBanner'
import LineaBanner from '../LineaBanner'

interface IBannerConfig {
  shouldRender: boolean
  banner: ReactElement
}

/**
 * make your custom hook to control should render specific banner or not
 * add new campaign banner easily
 *
 * @example
 * ```ts
 *  {
 *    shouldRender: isRenderIFOBanner,
 *    banner: <IFOBanner />,
 *  },
 * ```
 */

export const useMultipleBannerConfig = () => {
  return useMemo(() => {
    const NO_SHUFFLE_BANNERS: IBannerConfig[] = [
      { shouldRender: true, banner: <LineaBanner /> },
      { shouldRender: true, banner: <MoonPayBanner /> },
      { shouldRender: true, banner: <ArbitrumOneBanner /> },
      { shouldRender: true, banner: <ZksyncBanner /> },
      { shouldRender: true, banner: <PolygonZkEvmBanner /> },
      { shouldRender: true, banner: <GalxeTraverseBanner /> },
      { shouldRender: true, banner: <TradingRewardBanner /> },
      { shouldRender: true, banner: <LiquidStakingBanner /> },
    ]

    const SHUFFLE_BANNERS: IBannerConfig[] = [
      {
        shouldRender: true,
        banner: <PerpetualBanner />,
      },
    ]
    return [...NO_SHUFFLE_BANNERS, ...shuffle(SHUFFLE_BANNERS)]
      .filter((bannerConfig: IBannerConfig) => bannerConfig.shouldRender)
      .map((bannerConfig: IBannerConfig) => bannerConfig.banner)
  }, [1])
}
