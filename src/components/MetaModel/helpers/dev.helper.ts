export function isDevMode(){
    const isDevMode = process.env.NODE_ENV === 'development';
    return isDevMode;
}