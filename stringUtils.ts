export const reversed = (str: string): string => {
    return str.split('').reverse().join('');
};
export const countCharacters = (str: string): number => {
    return str.replace(/\s/g, "").length;
};

export function repeatString(str: string, times: number): string {
    return str.repeat(times);
};
