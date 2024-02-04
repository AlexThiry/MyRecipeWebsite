import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './SubmissionForm.css';

const SubmissionForm = () => {
  const fields = ["Author", "Recipe Name", "Prep Time", "Cook Time", "Total Time", "Ingredients", "Instructions", "Tags"];

  const [isPending, setIsPending] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("RECIPE SUBMITTED");
    
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData);

    setIsPending(true);

    try {
      const response = await axios.post('http://localhost:4000/api/recipes/new', data);
      console.log("Recipe Successfully Added", response);
    } catch (error) {
      console.error("Error adding recipe", error);
    } finally {
      setIsPending(false);
      navigate('/');
    }
  };

  return (
    <div className='submissionFormContainer'>
      <h1>ADD YOUR OWN RECIPE!</h1>
      <form onSubmit={handleSubmit}>
        {fields.map((field) => (
          <div className={`field ${field.replace(/\s+/g, '')}`} key={field}>
            <label>{`${field}:`} <br /><br /></label>
            <input type='text' name={`${field.replace(/\s+/g, '-')}`} required />
          </div>
        ))}
        {isPending ? (
          <button disabled className='submit-button' type='submit'>
            ADDING RECIPE...
          </button>
        ) : (
          <button className='submit-button' type='submit'>
            SUBMIT!
          </button>
        )}
      </form>
    </div>
  );
};

export default SubmissionForm;