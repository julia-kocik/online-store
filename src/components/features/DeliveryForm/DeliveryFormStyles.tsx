import styled from 'styled-components'
import { colors } from '../../../colors'

export const FormContainer = styled.form`
    display: grid;
    gap: 0.5rem;
`

export const FormInput = styled.input`
    height: 2rem;
    border-radius: 0.25rem;
    outline: none;
    border: 1px solid ${colors.green};
    padding: 0.5rem;
    font-size: 0.75rem;
`
