import { css } from '@emotion/react'

export const container = css`
  max-width: 300px;
  padding: 15px;
  background: hsl(0, 0%, 100%);
  border-radius: 15px;
  box-shadow: 2px 2px 10px 0px hsla(0, 0%, 0%, 0.1);
`

export const img = css`
  width: 100%;
  border-radius: 10px;
`

export const cardContent = css`
  text-align: center;
  margin: 20px 8px;

  h3 {
    font-size: 20px;
    word-wrap: break-word;
  }

  p {
    font-size: 15px;
    margin-top: 15px;
    color: hsl(220, 15%, 55%);
  }
`

export const topImage = css`
  width: 100%;
  border-radius: 10px;
`
