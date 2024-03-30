import figlet, { Options } from "figlet";

export async function figletAsync(msg: string, options?: Options) {
    return new Promise<string>((res, rej) => {
        figlet(msg, options, (_err, result) => {
            if (result) {
                res(result)
            } else {
                rej(_err)
            }
        })
    })
}