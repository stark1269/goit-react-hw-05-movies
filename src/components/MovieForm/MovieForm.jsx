import { Input, Form, Button } from "./MovieForm.styled";
import { useState } from "react";

export const MovieForm = ({ onSubmit }) => {
  const [value, setValue] = useState('');

  const handlerSubmit = (e) => {
    e.preventDefault();

    const query = e.target.elements.query.value;
    if (!query.trim()) {
      return
    }
    onSubmit(query);
    setValue('');

    e.target.reset();
  };

  return (
    <Form onSubmit={handlerSubmit}>
      <Input value={value} name="query" type="text" onChange={(e) => setValue(e.currentTarget.value)} />
      <Button type="submit">Search</Button>
    </Form>
  )
};