import { addTwoNumbers } from './index'

describe('addTwoNumbers', () => {
  it('should add two number', () => {
    // Arrange
    const number1 = 7
    const number2 = 6

    // Act
    const result = addTwoNumbers({
      number1,
      number2
    })

    // Assert
    expect(result).toEqual(number1 + number2)
  })
})
