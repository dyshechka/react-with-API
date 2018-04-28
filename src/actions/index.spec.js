import * as actions from './index'

describe('todo actions', () => {
    it('addTodo should create ADD_TODO action', () => {
        expect(actions.addTodo({text: 'сходить в магазин'})).toEqual({
            type: 'ADD_TODO',
            todo: {text: 'сходить в магазин'}
        })
    });

    it('updateTodo should create UPDATE_TODO action', () => {
        expect(actions.updateTodo({text: 'сходить в магазин'})).toEqual({
            type: 'UPDATE_TODO',
            todo: {text: 'сходить в магазин'}
        })
    });

    it('editTodo should create CHANGE_TODO action', () => {
        expect(actions.editTodo('новый текст')).toEqual({
            type: 'CHANGE_TODO',
            text: 'новый текст'
        })
    });

    it('resetTodo should create RESET_TODO action', () => {
        expect(actions.resetTodo('')).toEqual({
            type: 'RESET_TODO',
            text: ''
        })
    });

    it('resetTodo should create VALIDATED action', () => {
        expect(actions.validateTodo({emptyValue: true})).toEqual({
            type: 'VALIDATED',
            result: {emptyValue: true}
        })
    });

    it('startLoading should create START_LOADING action', () => {
        expect(actions.startLoading()).toEqual({
            type: 'START_LOADING'
        })
    });

    it('endLoading should create END_LOADING action', () => {
        expect(actions.endLoading()).toEqual({
            type: 'END_LOADING'
        })
    });
});
