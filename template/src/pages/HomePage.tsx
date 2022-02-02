import { Page, Header, HeaderTitle, Body } from "blue-react"

import { appLogo, appTitle, getPhrase } from "../shared"

export default function HomePage() {
    return (
        <Page>
            <Header>
                <HeaderTitle logo={appLogo} appTitle={appTitle}>{getPhrase("HELLO_WORLD")}</HeaderTitle>
            </Header>

            <Body containerClass="container">
                <h1 className="mt-4 mb-3">Yay, your new app is ready! What now?</h1>

                <p>
                    Check out the <a href="https://bruegmann.github.io/blue-react/" target="_blank" rel="noopener noreferrer">docs</a>{" "}
                    to find out more about the utilities and classes.<br />
                    Under <a href="https://bruegmann.github.io/blue-react/recipes" target="_blank" rel="noopener noreferrer">Recipes</a>{" "}
                    you can find some nice guides.
                </p>

                <a className="btn btn-outline-primary" href="https://bruegmann.github.io/blue-react/recipes/Use%20React%20Router.md" target="_blank" rel="noopener noreferrer">Use React Router instead of our hash-only routing system!</a>
            </Body>
        </Page>
    )
}