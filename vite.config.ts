// @ts-expect-error
import { fileURLToPath } from "node:url";

export default {
	resolve: {
		alias: {
			"@": fileURLToPath(new URL("./src", import.meta.url)),
		},
	},
};
