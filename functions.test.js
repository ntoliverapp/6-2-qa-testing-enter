// const { TestWatcher } = require('@jest/core')
const {returnTwo, greeting, add, mult, div, subt} = require('./functions');

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

describe('integers to multiply', () => {

    test('Should multiply [numOne] and [numTwo]', () => {
        expect(mult(2, 4)).toEqual(8)
    });

    test('Should multiply [numOne] and [numTwo]', () => {
        expect(mult(4, 4)).toEqual(16)
    });
});
describe('integers to divide', () => {

    test('Should divide [numOne] and [numTwo]', () => {
        expect(div(9, 3)).toEqual(3)
    });
    test('Should divide [numOne] and [numTwo]', () => {
        expect(div(12, 2)).toEqual(6)
    });
});
describe('integers to subtract', () => {
    test('Should subtract [numOne] and [numTwo]', () => {
        expect(subt(9, 5)).toEqual(4)
    });
    test('Should subtract [numOne] and [numTwo]', () => {
        expect(subt(44, 5)).toEqual(39)
    });
});