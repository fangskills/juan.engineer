import React from 'react'
import { Helmet } from 'react-helmet'
import NextDocument from 'next/document'
import { ServerStyleSheet as StyledComponentSheets } from 'styled-components'
export default class Document extends NextDocument {
  static async getInitialProps (ctx) {
    const styledComponentSheet = new StyledComponentSheets()
    const originalRenderPage = ctx.renderPage
    try {
      ctx.renderPage = () =>
        originalRenderPage()
      const initialProps = await NextDocument.getInitialProps(ctx)
      return {
        ...initialProps,
        styles: [
          <React.Fragment key="styles">
            {initialProps.styles}
            {styledComponentSheet.getStyleElement()}
          </React.Fragment>,
        ],
      }
    } finally {
      styledComponentSheet.seal()
    }
  }
}