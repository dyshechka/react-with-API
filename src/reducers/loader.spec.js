import loader from './loader'

describe('loader reducer', () => {
    it('should handle START_LOADING', () => {
        const newState = loader([], {
            type: 'START_LOADING'
        });
        expect(newState.loader).toEqual(true);
    });

    it('should handle END_LOADING', () => {
        const newState = loader([], {
            type: 'END_LOADING'
        });
        expect(newState.loader).toEqual(false);
    });
});
