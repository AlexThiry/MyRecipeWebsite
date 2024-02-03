import './SubmissionForm.css'

const SumbissionForm = () => {
    const fields = ["Author", "Recipe Name", "Prep Time", "Cook Time", "Total Time","Ingredients", "Instructions", "Tags"]
    return (
        <div className='submissionFormContainer'>
            <h1>ADD YOU OWN RECIPE!</h1>
            {fields.map(field => 
                <div className={`field ${field.replace(/\s+/g, '')}`} key={field}>
                    <p>{`${field}:`}</p>
                    <input type="text" />
                </div>
            )}
            <button>SUBMIT!</button>
        </div>
    );
}

export default SumbissionForm