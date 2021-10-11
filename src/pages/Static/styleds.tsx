import styled from 'styled-components'
import aboutGraph from 'assets/svg/about_graph.svg'
import aboutIcon4 from 'assets/svg/about_icon_4.svg'
import aboutIcon5 from 'assets/svg/about_icon_5.svg'
import aboutIcon6 from 'assets/svg/about_icon_6.svg'
import image1 from 'assets/svg/bg1.svg'
import image2 from 'assets/svg/bg2.svg'
import image3 from 'assets/svg/bg3.svg'

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  margin-top: -32px;
  text-align: center;
  color: ${({ theme }) => theme.subText};
  position: relative;
  background-color: ${({ theme }) => theme.buttonBlack};
  z-index: -2;

  img {
    max-width: 100%;
  }
`

export const Image1 = styled.div`
  background-image: url(${image1});
  width: 100%;
  position: absolute;
  top: 0;
  height: 800px;
  background-repeat: no-repeat;
  background-position-x: right;
  background-size: contain;
  z-index: -1;
`

export const Image2 = styled.div`
  background-image: url(${image2});
  width: 100%;
  position: absolute;
  top: 800px;
  height: 1200px;
  background-repeat: no-repeat;
  background-size: 100%;
  z-index: -1;
`

export const Image3 = styled.div`
  background-image: url(${image3});
  width: 100%;
  position: absolute;
  bottom: 0;
  height: 369px;
  background-repeat: no-repeat;
  z-index: -1;
  background-size: cover;

  ${({ theme }) => theme.mediaWidth.upToExtraSmall`
    height: 200px;
  `}
  ${({ theme }) => theme.mediaWidth.upToSmall`
    height: 300px;
  `}
`

export const SectionNumberContainer = styled.div`
  max-width: 900px;
  margin: 65px auto 0 auto;
  padding: 24px;
  display: flex;
  gap: 24px;
  justify-content: space-evenly;
  align-items: center;

  ${({ theme }) => theme.mediaWidth.upToSmall`
    flex-direction: column;
  `}
`

export const SectionNumber = styled.div`
  max-width: 450px;
  margin: 0 auto;
  background: ${({ theme }) => theme.background};
  border: 1px solid ${({ theme }) => theme.border2};
  border-radius: 20px;
  padding: 28px 44px;
  display: flex;
  justify-content: space-around;
  position: relative;

  .line {
    width: 0px;
    border: 1px solid #303e46;
  }

  ${({ theme }) => theme.mediaWidth.upToSmall`
    flex-direction: column;
    gap: 16px;
    width: 100%;

    .line {
      width: 100%;
    }
  `}
`

export const TradingVolumeSection = styled(SectionNumber)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 28px 24px;
`

export const LiquidityNumber = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-right: 20px;

  ${({ theme }) => theme.mediaWidth.upToSmall`
    margin-right: 0;
    margin-bottom: 20px;
    width: 100%;
  `}
`

export const AmpLiquidityNumber = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-right: 20px;
  margin-left: 20px;

  ${({ theme }) => theme.mediaWidth.upToSmall`
    margin-left: 0;
    margin-right: 0;
    margin-top: 32px;
    width: 100%;
  `}
`

export const Panel0 = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 450px;
  margin: 50px auto auto auto;
  a {
    width: 200px;
    max-width: 100%;
    margin: 0 10px;
  }
`

export const Panel = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  max-width: 800px;
  margin-top: 50px;
  margin: 50px auto auto auto;
  flex-wrap: wrap;
  padding: 0 15px;

  ${({ theme }) => theme.mediaWidth.upToSmall`
    flex-direction: column;
    > a {
      margin-top: 10px;
      display: block;
    }
  `}
`

export const SectionCurveDetail = styled.div`
  max-width: 680px;
  margin: 45px auto 75px;
  padding: 0 20px;
  font-size: 20px;

  ${({ theme }) => theme.mediaWidth.upToSmall`
    font-size: 16px;
    margin-top: 20px;
  `}
`

export const SectionAmp = styled.div`
  color: #fff;
  display: flex;
  justify-content: space-around;
  max-width: 700px;
  margin: 30px auto;
  .box div {
    &:nth-child(1) {
      font-size: 18px;
    }
    &:nth-child(2) {
      margin-bottom: 10px;
      font-size: 12px;
    }
    &:nth-child(3) {
      font-size: 42px;
      font-weight: 600;
      margin-top: auto;
    }
    &:nth-child(4) {
      font-size: 14px;
    }

    ${({ theme }) => theme.mediaWidth.upToExtraSmall`
      &:nth-child(1) {
        font-size: 12px;
      }
      &:nth-child(2) {
        margin-bottom: 5px;
        font-size: 10px;
      }
      &:nth-child(3) {
        font-size: 18px;
      }
      &:nth-child(4) {
        font-size: 10px;
      }
    `}
  }
  .box_1 {
    text-align: center;
    width: 220px;
    border-radius: 20px;
    padding: 25px;
    display: flex;
    flex-direction: column;
    &:nth-child(1) {
      background-color: #105d81;
    }
    &:nth-child(2) {
      background-color: #1183b7;
    }
    &:nth-child(3) {
      background-color: #08a1e7;
    }

    ${({ theme }) => theme.mediaWidth.upToExtraSmall`
      width: 100px;
      padding: 10px;
    `}
  }
`

export const SectionFee = styled.div`
  max-width: 780px;
  margin: 0 auto;
  padding: 0 10px;
  font-size: 20px;

  ${({ theme }) => theme.mediaWidth.upToExtraSmall`
    font-size: 16px;
  `}
`

export const SectionGraph = styled.div`
  max-width: 780px;
  margin: 0 auto;
  display: flex;
  margin-top: 50px;

  ${({ theme }) => theme.mediaWidth.upToExtraSmall`
    flex-direction: column;
    padding: 0 24px;
  `}

  .left {
    border-radius: 4px;
    flex: 1;
    background-image: url(${aboutGraph});
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
    border: dashed 1px #303e46;

    ${({ theme }) => theme.mediaWidth.upToExtraSmall`
      height: 300px;
      flex: auto;
      margin-bottom: 20px;
    `}
  }
  .right {
    ${({ theme }) => theme.mediaWidth.upToExtraSmall`
      display: flex;
    `}

    .item {
      padding: 25px;
      border-radius: 4px;
      border: dashed 1px #303e46;
      .box {
        width: 76px;
        height: 68px;
        margin: 0 auto;
        background-repeat: no-repeat;
        background-size: contain;
        ${({ theme }) => theme.mediaWidth.upToExtraSmall`
          width: 40px;
          height: 37px;
        `}

        &_1 {
          background-image: url(${aboutIcon4});
        }
        &_2 {
          background-image: url(${aboutIcon5});
        }
        &_3 {
          background-image: url(${aboutIcon6});
        }
      }
    }
  }
`

export const YoutubeVideo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  margin: 0 auto;

  ${({ theme }) => theme.mediaWidth.upToExtraSmall`
    width: 100%;
  `}
`

export const Security = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 100%;
  max-width: 950px;
  margin-top: 50px;
  margin: 50px auto auto auto;
  flex-wrap: wrap;
  div {
    text-align: center;
    ${({ theme }) => theme.mediaWidth.upToExtraSmall`
      flex-basis: 50%;
    `}
    img {
      display: inline;
      margin: 32px 10px 0 10px;
      border-radius: 10px;
      height: 80px;
      max-width: 180px;
      ${({ theme }) => theme.mediaWidth.upToExtraSmall`
        flex-basis: 50%;
        max-height: 55px;
        max-width: 130px;
        margin-top: 20px;
        margin-bottom: 40px;
      `}
    }
  }
`

export const Powered = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  max-width: 800px;
  margin: 60px auto 140px;
  align-items: flex-end;
  flex-wrap: wrap;

  ${({ theme }) => theme.mediaWidth.upToSmall`
    margin: 40px auto;
  `}

  > div {
    flex-basis: 50%;
  }
  img {
    // flex-basis: 50%;
    height: 80px;
    margin: 0 20px;
    padding-bottom: 20px;
    vertical-align: middle;
    &:nth-child(1),
    &:nth-child(2) {
      padding-top: 5px;
      padding-bottom: 5px;
    }
    &:nth-child(3),
    &:nth-child(4),
    &:nth-child(5) {
      padding-top: 15px;
      padding-bottom: 15px;
    }
  }
`

export const Footer = styled.div`
  background: #0c1012;
  display: flex;
  padding: 10px 20px;
  margin-bottom: -5rem;
  height: 85px;

  ${({ theme }) => theme.mediaWidth.upToLarge`
    margin-bottom: unset;
    height: unset;
  `}

  .content {
    width: 100%;
    max-width: 1000px;
    display: flex;
    justify-content: space-between;
    margin: auto;
    flex-wrap: wrap;
    .left {
      padding-top: 6px;
      display: flex;
      flex-wrap: wrap;

      ${({ theme }) => theme.mediaWidth.upToExtraSmall`
        font-size: 12px;
      `}

      div {
        cursor: pointer;
        display: inline;
        margin-right: 20px;
        margin-top: 10px;
        a {
          color: #859aa5;
        }
      }
    }
    .right {
      ${({ theme }) => theme.mediaWidth.upToExtraSmall`
        display: flex;
        margin-top: 20px;
        justify-content: space-between;
      `}

      a {
        cursor: pointer;
        img {
          width: 16px;
          height: 16px;
          margin: 0 3px;
        }
      }
    }
  }
`
