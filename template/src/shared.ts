export const appLogo = "/logo512.png"
export const appTitle = "My App Title"

export const phrases = {
    HELLO_WORLD: ["Hello World!", "Hallo Welt!"]
}

export function getPhrase(
    keyword: keyof typeof phrases | (string & {}),
    countryCode: string | undefined = undefined,
    _phrases: { [key: string]: string[] } | undefined = undefined
) {
    countryCode = countryCode || navigator.language.toLowerCase().indexOf("de") > -1 ? "de-DE" : "en-US"
    _phrases = _phrases || phrases

    if (_phrases[keyword]) {
        if (countryCode.indexOf("de-") > -1) {
            return _phrases[keyword][1]
        } else {
            return _phrases[keyword][0]
        }
    } else {
        return keyword
    }
}
