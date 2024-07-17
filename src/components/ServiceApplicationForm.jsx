import React from 'react';
import { Card, CardBody, Input, Button, Select, SelectItem } from '@nextui-org/react';
import { useForm } from 'react-hook-form';

const ServiceApplicationForm = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();

  const onSubmit = async (data) => {
  
    try {
      const response = await fetch('https://formspree.io/f/mldrdzqk', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        console.log('Form successfully submitted');
        alert('Form successfully submitted');
        reset(); // Reset form after successful submission
      } else {
        console.log('Form submission failed');
        alert('Form submission failed');
      }
    } catch (error) {
      console.log('Error submitting form:', error);
      alert('An error occurred. Please try again.');
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-4">
      <Card className="max-w-[400px] mx-auto">
        <CardBody>
          <h2 className="text-center mb-4 text-xl font-bold">Service Provider Application Form</h2>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <Input
              isInvalid={!!errors.firstName}
              errorMessage={errors.firstName && errors.firstName.message}
              label="First Name"
              placeholder="Enter your first name"
              {...register('firstName', { required: 'First name is required' })}
            />

            <Input
              isInvalid={!!errors.lastName}
              errorMessage={errors.lastName && errors.lastName.message}
              label="Last Name"
              placeholder="Enter your last name"
              {...register('lastName', { required: 'Last name is required' })}
            />

            <Input
              isInvalid={!!errors.email}
              errorMessage={errors.email && errors.email.message}
              type="email"
              label="Email"
              placeholder="Enter your email"
              {...register('email', {
                required: 'Email is required',
                pattern: { value: /^\S+@\S+$/i, message: 'Invalid email address' }
              })}
            />

            <Input
              isInvalid={!!errors.phoneNumber}
              errorMessage={errors.phoneNumber && errors.phoneNumber.message}
              type="tel"
              label="Phone Number"
              placeholder="Enter your phone number"
              {...register('phoneNumber', {
                required: 'Phone number is required',
                pattern: { value: /^\d+$/, message: 'Invalid phone number' }
              })}
            />

            <Select
              isInvalid={!!errors.serviceType}
              errorMessage={errors.serviceType && errors.serviceType.message}
              label="Service Type"
              placeholder="Select service type"
              {...register('serviceType', { required: 'Service type is required' })}
            >
              <SelectItem value="photographer">Photographer</SelectItem>
              <SelectItem value="mechanic">Mechanic</SelectItem>
              <SelectItem value="chef">Chef</SelectItem>
              <SelectItem value="tutor">Tutor</SelectItem>
            </Select>

            <Input
              isInvalid={!!errors.hourlyRate}
              errorMessage={errors.hourlyRate && errors.hourlyRate.message}
              type="number"
              label="Hourly Rate"
              placeholder="Enter hourly rate"
              endContent={<span className="text-default-400 text-small">$</span>}
              {...register('hourlyRate', {
                required: 'Hourly rate is required',
                min: { value: 1, message: 'Hourly rate must be greater than 0' }
              })}
            />

            <Button color="primary" type="submit">
              Submit
            </Button>
          </form>
        </CardBody>
      </Card>
    </div>
  );
};

export default ServiceApplicationForm;
