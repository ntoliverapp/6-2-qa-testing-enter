// const { TestWatcher } = require('@jest/core')
const {returnTwo} = require('./functions')

test('Should return equal [int]', () => {
    expect(returnTwo(2)).toEqual('integer is 2')});