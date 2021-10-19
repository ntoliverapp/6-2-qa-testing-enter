// const { TestWatcher } = require('@jest/core')
const {returnTwo, greeting, add} = require('./functions');

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

describe('integers to equal sum', () => {

    test('Should add [numOne] and [numTwo]', () => {
        expect(add(1, 2)).toEqual(3)
    });

    test('Should add [numOne] and [numTwo]', () => {
        expect(add(5, 9)).toEqual(14)
    });
});