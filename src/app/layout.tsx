'use client'

import type { Metadata } from "next";
import StyledJsxRegistry from "./registry";
import GlobalStyle from "../styles/global";
import { ThemeProvider } from "styled-components";
import { theme } from "../styles/theme";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>
        <StyledJsxRegistry>
          <ThemeProvider theme={theme}>
            <GlobalStyle />
             {children}
          </ThemeProvider>
        </StyledJsxRegistry>
      </body>
    </html>
  );
}
