import editTodo from './editTodo'

describe('editTodo reducer', () => {
     it('should handle CHANGE_TODO', () => {
        const newState = editTodo([], {
                type: 'CHANGE_TODO',
                emptyValue: true
            });
        expect(newState.emptyValue).toEqual(false);
      });

    it('should handle RESET_TODO', () => {
        const newState = editTodo([], {
            type: 'RESET_TODO',
            text: '',
            emptyValue: false,
            duplicateValue: false
        });
        expect(newState.text).toEqual('');
        expect(newState.emptyValue).toEqual(false);
        expect(newState.duplicateValue).toEqual(false);
    });
});
