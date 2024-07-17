import React from 'react';
import styled from 'styled-components';
import { useForm } from 'react-hook-form';
import emailjs from '@emailjs/browser';

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: linear-gradient(135deg, #00c6ff, #0072ff);
  color: #fff;
  text-align: center;
  padding: 20px;
  box-sizing: border-box;

  @media (max-width: 768px) {
    padding: 10px;
  }
`;

const Title = styled.h2`
  font-size: 2.5em;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    font-size: 2em;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 600px;
  background: #fff;
  color: #000;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
`;

const Label = styled.label`
  font-size: 1.2em;
  margin-bottom: 10px;
  text-align: left;
`;

const Input = styled.input`
  padding: 10px;
  font-size: 1em;
  margin-bottom: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-sizing: border-box;
`;

const TextArea = styled.textarea`
  padding: 10px;
  font-size: 1em;
  margin-bottom: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-sizing: border-box;
`;

const Select = styled.select`
  padding: 10px;
  font-size: 1em;
  margin-bottom: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-sizing: border-box;
`;

const RadioGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const RadioLabel = styled.label`
  font-size: 1.2em;
  margin-bottom: 10px;
`;

const RadioButtonLabel = styled.label`
  font-size: 1em;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
`;

const RadioButton = styled.input`
  margin-right: 10px;
`;

const Button = styled.button`
  padding: 12px 20px;
  font-size: 1.2em;
  color: #fff;
  background-color: #0072ff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
  transition: background-color 0.3s ease-in-out, transform 0.2s ease-in-out;

  &:hover {
    background-color: #005bb5;
    transform: translateY(-3px);
  }
`;

const Page3 = () => {
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = async (data) => {
        try {
            await emailjs.send(
                'service_z9m4imv',  // 정확한 서비스 ID
                'template_v2m2dsu', // 정확한 템플릿 ID
                data,
                '70piB_WZnUKj8lhkS'   // 정확한 Public Key
            );
            alert('Survey submitted successfully!');
            reset();
        } catch (error) {
            console.error('Failed to send survey', error);
            alert(`Failed to submit the survey. Please try again. Error: ${error.text || error}`);
        }
    };

    return (
        <PageContainer>
            <Title>Survey</Title>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <Label htmlFor="name">Name</Label>
                <Input id="name" {...register('name', { required: true })} />

                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" {...register('email', { required: true })} />

                <Label htmlFor="question">Do you like our service?</Label>
                <Select id="question" {...register('question', { required: true })}>
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                    <option value="maybe">Maybe</option>
                </Select>

                <Label htmlFor="rating">Rate our service:</Label>
                <RadioGroup id="rating">
                    <RadioButtonLabel>
                        <RadioButton type="radio" value="1" {...register('rating', { required: true })} />
                        1
                    </RadioButtonLabel>
                    <RadioButtonLabel>
                        <RadioButton type="radio" value="2" {...register('rating', { required: true })} />
                        2
                    </RadioButtonLabel>
                    <RadioButtonLabel>
                        <RadioButton type="radio" value="3" {...register('rating', { required: true })} />
                        3
                    </RadioButtonLabel>
                    <RadioButtonLabel>
                        <RadioButton type="radio" value="4" {...register('rating', { required: true })} />
                        4
                    </RadioButtonLabel>
                    <RadioButtonLabel>
                        <RadioButton type="radio" value="5" {...register('rating', { required: true })} />
                        5
                    </RadioButtonLabel>
                </RadioGroup>

                <Label htmlFor="feedback">Feedback</Label>
                <TextArea id="feedback" {...register('feedback', { required: true })} rows="5" />

                <Button type="submit">Submit</Button>
            </Form>
        </PageContainer>
    );
};

export default Page3;
