import { fileURLToPath } from "url";
import path from "path";

export function resolvePath(relativePath) {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  return path.resolve(__dirname, relativePath);
}
