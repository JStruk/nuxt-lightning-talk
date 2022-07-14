export const useBar = () => {
    return useState('bar', () => 'baz')
}