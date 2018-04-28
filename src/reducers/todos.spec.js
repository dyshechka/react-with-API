import todos from './todos'

describe('todos reducer', () => {
    it('should handle ADD_TODO', () => {
        const newState = todos([], {
                type: 'ADD_TODO',
                todo: { text: 'сходить в магазин', done: 0 }
            });
        expect(newState.length).toEqual(1);
        expect(newState[0].text).toEqual('сходить в магазин');
        expect(newState[0].done).toEqual(0);
    });

    it('should handle UPDATE_TODO', () => {
        const newState = todos([
            {
                text: 'сходить в магазин',
                time: new Date(1513062089863),
                done: 0
            }
        ], {
            type: 'UPDATE_TODO',
            todo: {text: 'сходить в магазин', done: 1}
        });
        expect(newState.length).toEqual(1);
        expect(newState[0].text).toEqual('сходить в магазин');
        expect(newState[0].done).toEqual(1);
    });
});
