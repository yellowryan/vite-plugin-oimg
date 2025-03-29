import type { Options } from "./types";

function VitePluginOIMG() {
    return {
        name: "vite-plugin-oimg",
        enforce: "pre",
        transform(code: string, id: string) {
            if (id.endsWith(".vue")) {
            }
        },
        transformIndexHtml(html: string) {
            return html;
        },
        configureServer() {
            
        }
    }
}

export default VitePluginOIMG;