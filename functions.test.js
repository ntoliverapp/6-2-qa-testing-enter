// const { TestWatcher } = require('@jest/core')
const {returnTwo, greeting} = require('./functions');

test('Should return equal [int]', () => {
    expect(returnTwo(2)).toEqual('integer is 2')});


describe('matching names to greetings', () => {

    test('Should return greeting [name]', () => {
        expect(greeting('James')).toEqual('Hello, James')
    });

    test('Should return greeting [name]', () => {
        expect(greeting('Jill')).toEqual('Hello, Jill')
    });
});