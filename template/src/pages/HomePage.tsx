import { Page, Header, HeaderTitle, Body } from "blue-react"

import { appLogo, appTitle, getPhrase } from "../shared"
import styles from "./HomePage.module.scss"

export default function HomePage() {
    return (
        <Page>
            <Header>
                <HeaderTitle logo={appLogo} appTitle={appTitle}>
                    {getPhrase("HELLO_WORLD")}
                </HeaderTitle>
            </Header>

            <Body containerClass="container">
                <h1 className="mt-4 mb-3">Yay, your new app is ready! What now?</h1>

                <p>
                    Check out the{" "}
                    <a href="https://bruegmann.github.io/blue-react/" target="_blank" rel="noopener noreferrer">
                        docs
                    </a>{" "}
                    to find out more about the utilities and classes.
                    <br />
                    Under{" "}
                    <a href="https://bruegmann.github.io/blue-react/recipes" target="_blank" rel="noopener noreferrer">
                        Recipes
                    </a>{" "}
                    you can find some nice guides.
                </p>

                <div
                    className="bg-theme text-white p-5 rounded-3 text-center"
                    style={{ boxShadow: "var(--neu-shadow-1), var(--neu-shadow-inset-3)" }}
                >
                    <a
                        className={`${styles.customNeuBtn} btn btn-primary btn-lg my-5`}
                        href="https://bruegmann.github.io/blue-react/neu"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                            boxShadow: `var(--neu-shadow-3), var(--neu-shadow-inset-switch-1)`
                        }}
                    >
                        Check out the Neumorphism utilities!
                    </a>
                </div>
            </Body>
        </Page>
    )
}
