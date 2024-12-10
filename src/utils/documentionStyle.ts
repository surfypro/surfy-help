import { toKebabCase } from "./stringUtils";

export function toDocumentationLinkString(text: string): string {
    return toKebabCase(text);
}