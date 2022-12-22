import React from 'react'
import {render, fireEvent} from '@testing-library/react'
import TodoForm from './todoForm'

describe('todo form', () => {
    it('check ui element', () => {
        const {getByText, getByPlaceholderText} = render(<TodoForm />)
        getByPlaceholderText('할 일을 입력')
        getByText('등록')
    })

    it('change input', () => {
        const {getByPlaceholderText} = render(<TodoForm />)
        const input = getByPlaceholderText('할 일을 입력')
        fireEvent.change(input, {
            target: {
                value: 'study tdd'
            }
        })
        expect(input).toHaveAttribute('value', 'study tdd')
    })
    // 의외로 위의 테스트도 실패하는데
    // 이를 위해 useState로 값을 넣을 수 있게 해주어야 한다

    it('submit', () => {
        const onInsert = jest.fn();
        const {getByText, getByPlaceholderText} = render(
            <TodoForm onInsert={onInsert} />
        )
        const input = getByPlaceholderText('할 일을 입력')
        const btn = getByText('등록')

        // 사용자의 흐름: input에 데이터를 입력하고 -> 등록 버튼을 누른다
        fireEvent.change(input, {
            target: {
                value: 'study tdd'
            }
        })
        fireEvent.click(btn)
        expect(onInsert).toBeCalledWith('study tdd')
        expect(input).toHaveAttribute('value', '')
    })
})