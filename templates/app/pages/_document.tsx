import { EuiButton } from "@elastic/eui";
import { BlitzScript, Document, DocumentHead, Html, Main } from "blitz";
import React, { ReactElement } from "react";
import { defaultTheme, Theme, themeConfig } from "../lib/theme";
const pathPrefix = process.env.PATH_PREFIX;

function themeLink(theme: Theme): ReactElement {
  let disabledProps = {};

  if (theme.id !== defaultTheme) {
    disabledProps = {
      disabled: true,
      "aria-disabled": true,
    };
  }

  return (
    <link
      rel="stylesheet"
      href={`${pathPrefix}/${theme.publicPath}`}
      data-name="eui-theme"
      data-theme-name={theme.name}
      data-theme={theme.id}
      key={theme.id}
      {...disabledProps}
    />
  );
}

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <DocumentHead>
          {themeConfig.availableThemes.map((each) => themeLink(each))}
        </DocumentHead>

        <body className="guideBody">
          {/* Delete this! */}
          <EuiButton size="s" onClick={() => {}}>
            Small
          </EuiButton>

          <Main />
          <BlitzScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
