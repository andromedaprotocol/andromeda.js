export const getCoinTypeFromPrefix = (prefix: string) => {
    switch (prefix) {
        case "inj":
            return 60;
        case "terra":
            return 330;
        case "core":
            return 990;
        default:
            return 118;
    }
}