import {readdir, readFile, writeFileSync} from 'fs'
import {pascalCase} from "pascal-case"

const INPUT_FOLDER = "scripts/feather/"
const OUTPUT_FILE = "src/index.tsx"

const INDEX_TSX_HEADER = `import SvgTemplate from './SvgTemplate'`

const svg_header = class_name => `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-${class_name}">`
const svgx_header = async ({name, children}) => `
const ${name}: any = SvgTemplate(
${await children}
)
export { ${name} }`

readdir(INPUT_FOLDER, (error, files) => {
    if (error) {
        console.error(error)
        console.error("Could not complete build")
        process.exit()
    }
    const iconPromises = files.map(async file => {
        const icon_name = file.slice(0, -4)
        const iconContentPromise = new Promise((resolve) =>
            readFile(INPUT_FOLDER + file, 'utf8', (error, data) => {
                if (error) {
                    console.error(`Failed to read "${file}"`)
                    console.error(error)
                    process.exit()
                }
                const header = svg_header(icon_name)
                if (!data.startsWith(header)) {
                    console.error(`Failed to import "${file}"`)
                    console.error("Unexpected header")
                    console.error("Expected:\n", header)
                    console.error("Actual:\n", data)
                }

                const content = "\t" + data.slice(header.length, -6)
                const multiline = content.replace(/(<\/\w*>)</g, "$1,\n\t<")
                resolve(multiline)
            }))
        const iconContent = await iconContentPromise

        return svgx_header({
            name: pascalCase(icon_name),
            children: iconContent
        })
    })

    Promise.all(iconPromises).then(results => {
        const fileContent = INDEX_TSX_HEADER +
            "\n\n" +
            results.join("\n")
        writeFileSync(OUTPUT_FILE, fileContent)
        console.log("Done!")
    })
})
