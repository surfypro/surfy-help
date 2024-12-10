import * as pluralize from 'pluralize';

export const camelize = (str: string) => {
    if (!str) {
        return str;
    }
    let a = str.replace(/(?:^\w|[A-Z]|\b\w|\s+)/g, (match: string, index: number) => {
        if (+match === 0) {
            return ''; // or if (/\s+/.test(match)) for white spaces
        }
        return index === 0 ? match.toLowerCase() : match.toUpperCase();
    });
    a = a.replace(/_\w/g, (m: string) => {
        return m[1].toUpperCase();
    });
    return a;
};

export const capitalize = (s: string) => {
    s = camelize(s);
    return s.charAt(0).toUpperCase() + s.slice(1);
};

export const toUnderscore = (input: string) => {
    return input.replace(/([A-Z])/g, $1 => '_' + $1.toLowerCase());
};

export const toPlural = (s: string) => {
    return pluralize.plural(s);
};

export const singularize = (s: string) => {
    return pluralize.singular(s);
};

export function capitalizeFirstLetter(s: string) {
    return s.charAt(0).toUpperCase() + s.slice(1);
}

export function lowerCaseFirstLetter(s: string) {
    return s.charAt(0).toLowerCase() + s.slice(1);
}

export function sortString(a: string, b: string) {
    return a.localeCompare(b);
}

export function isString(r?: string | null): r is string {
    if (r === null || r === undefined) {
        return false;
    }
    return !!r;
}


export function isStringList(r?: string[]): r is string[] {
    return !!r;
}

export function isStringOrUndefinedList(r?: (string | undefined)[]): r is (string | undefined)[] {
    return !!r;
}

export function isStringInteger(s: string) {
    return !isNaN(Number(s));
}

const kebabize = str => {
    return str.split('').map((letter, idx) => {
        return letter.toUpperCase() === letter
            ? `${idx !== 0 ? '-' : ''}${letter.toLowerCase()}`
            : letter;
    }).join('');
}

export function toKebabCase(s: string) {
    return kebabize(camelize(s));
}