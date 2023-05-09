import React, { type ChangeEventHandler } from 'react'
import { FormContainer, FormInput } from './DeliveryFormStyles'

interface DeliveryFormProps {
  onChangeHandler: ChangeEventHandler<HTMLInputElement>
}

const DeliveryForm: React.FC<DeliveryFormProps> = ({ onChangeHandler }) => {
  const personalDetails = ['name', 'address', 'city', 'zipcode', 'mobile', 'email']
  return (
    <FormContainer>
      {personalDetails?.map((detail, index) => (
        <FormInput key={index} type={detail === 'zipcode' || detail === 'mobile' ? 'number' : 'text'} name={detail} placeholder={detail} onChange={onChangeHandler}/>
      ))}
    </FormContainer>
  )
}

export default DeliveryForm
