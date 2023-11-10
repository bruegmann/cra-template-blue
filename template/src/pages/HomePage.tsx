import { Page, Header, HeaderTitle, Body } from "blue-react"

import { appLogo, appTitle, getPhrase } from "../shared"

export default function HomePage() {
    return (
        <Page>
            <Header>
                <HeaderTitle logo={appLogo} appTitle={appTitle}>
                    {getPhrase("HELLO_WORLD")}
                </HeaderTitle>
            </Header>

            <Body containerClass="container">
                <h1 className="page-header mt-4 mb-3">Yay, your new app is ready! What now?</h1>

                <ol>
                    <li>
                        Remove this placeholder content by editing <code>./src/pages/HomePage.tsx</code>.
                    </li>
                    <li>
                        Register more pages in <code>./src/App.tsx</code>.
                    </li>
                    <li>
                        Take a look at the stylesheets in <code>./src/styles</code>.
                    </li>
                    <li>
                        <a href="https://bruegmann.github.io/blue-react/" target="_blank" rel="noopener noreferrer">
                            Check out the docs
                        </a>{" "}
                        to find out more about the components, utilities and classes. You'll also find many examples
                        there.
                    </li>
                </ol>
            </Body>
        </Page>
    )
}
