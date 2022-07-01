function evaluateTheme() {
    let preferredTheme = localStorage.getItem("theme");
    if(preferredTheme === "light") {
        document.documentElement.classList.remove("dark");
    } else if(preferredTheme === "dark") {
        document.documentElement.classList.add("dark");
    } else {
        if(window.matchMedia("(prefers-color-scheme: dark)").matches) {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
    }
}

function isDark() {
    return document.documentElement.classList.contains("dark");
}

export { evaluateTheme, isDark };