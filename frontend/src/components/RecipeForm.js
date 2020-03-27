import React from 'react'

const RecipeForm = ({ handleChange, handleSubmit, errors }) => {
  return <section classNameName="section">
    <div classNameName="container">
      <form
        classNameName="form"
        onSubmit={(event) => handleSubmit(event)}
      >
        <div classNameName="field">
          <label classNameName="label">
            Recipe Name
          </label>
          <div classNameName="control">
            <input
              onChange={(event) => handleChange(event)}
              type="text"
              name="name"
              classNameName="input"
            />
          </div>
          {errors.name && <small classNameName="help is-danger">
            {errors.name}
          </small>}
        </div>
        <div classNameName="field">
          <label classNameName="label">
            Image
          </label>
          <div classNameName="control">
            <input
              onChange={(event) => handleChange(event)}
              type="text"
              name="image"
              classNameName="input"
            />
          </div>
          {errors.image && <small classNameName="help is-danger">
            {errors.image}
          </small>}
        </div>
        <div classNameName="field">
          <label classNameName="label">
            Ingredients
          </label>
          <div classNameName="control">
            <input
              onChange={(event) => handleChange(event)}
              type="text"
              name="ingredients"
              classNameName="input"
            />
          </div>
          {errors.ingredients && <small classNameName="help is-danger">
            {errors.ingredients}
          </small>}
        </div>
        <div classNameName="field">
          <label classNameName="label">
            Instructions
          </label>
          <div classNameName="control">
            <input
              onChange={(event) => handleChange(event)}
              type="text"
              name="instructions"
              classNameName="input"
            />
          </div>
          {errors.instructions && <small classNameName="help is-danger">
            {errors.instructions}
          </small>}
        </div>
        <div classNameName="field">
          <label classNameName="label">
            Calories
          </label>
          <div classNameName="control">
            <input
              onChange={(event) => handleChange(event)}
              type="number"
              name="calories"
              classNameName="input"
            />
          </div>
          {errors.calories && <small classNameName="help is-danger">
            {errors.calories}
          </small>}
        </div>
        <div classNameName="field">
          <h2 classNameName="subtitle">Macronutrients</h2>
          <label classNameName="label">
            Fat
          </label>
          <div classNameName="control">
            <input
              onChange={(event) => handleChange(event)}
              type="text"
              name="fat"
              classNameName="input"
            />
          </div>
          {errors.fat && <small classNameName="help is-danger">
            {errors.fat}
          </small>}
        </div>
        <div classNameName="field">
          <label classNameName="label">
            Carbohydrates
          </label>
          <div classNameName="control">
            <input
              onChange={(event) => handleChange(event)}
              type="text"
              name="carbohydrates"
              classNameName="input"
            />
          </div>
          {errors.carbohydrates && <small classNameName="help is-danger">
            {errors.carbohydrates}
          </small>}
        </div>
        <div classNameName="field">
          <label classNameName="label">
            Sugars
          </label>
          <div classNameName="control">
            <input
              onChange={(event) => handleChange(event)}
              type="text"
              name="sugars"
              classNameName="input"
            />
          </div>
          {errors.sugars && <small classNameName="help is-danger">
            {errors.sugars}
          </small>}
        </div>
        <div classNameName="field">
          <label classNameName="label">
            Proteins
          </label>
          <div classNameName="control">
            <input
              onChange={(event) => handleChange(event)}
              type="text"
              name="proteins"
              classNameName="input"
            />
          </div>
          {errors.proteins && <small classNameName="help is-danger">
            {errors.proteins}
          </small>}
        </div>
        <div classNameName="field">
          <label classNameName="label">
            Servings
          </label>
          <div classNameName="control">
            <input
              onChange={(event) => handleChange(event)}
              type="number"
              name="servings"
              classNameName="input"
            />
          </div>
          {errors.servings && <small classNameName="help is-danger">
            {errors.servings}
          </small>}
        </div>
      </form>
      <div className="field is-grouped is-grouped-multiline">
        <p className="control">
          <a className="button">
            One
          </a>
        </p>
        <p className="control">
          <a className="button">
            Two
          </a>
        </p>
        <p className="control">
          <a className="button">
            Three
          </a>
        </p>
        <p className="control">
          <a className="button">
            Four
          </a>
        </p>
        <p className="control">
          <a className="button">
            Five
          </a>
        </p>
        <p className="control">
          <a className="button">
            Size
          </a>
        </p>
        <p className="control">
          <a className="button">
            Seven
          </a>
        </p>
        <p className="control">
          <a className="button">
            Eight
          </a>
        </p>
        <p className="control">
          <a className="button">
            Nine
          </a>
        </p>
        <p className="control">
          <a className="button">
            Ten
          </a>
        </p>
        <p className="control">
          <a className="button">
            Eleven
          </a>
        </p>
        <p className="control">
          <a className="button">
            Twelve
          </a>
        </p>
        <p className="control">
          <a className="button">
            Thirteen
          </a>
        </p>
      </div>
      <button classNameName="button is-success">
          Add your recipe
      </button>
    </div>
  </section>

}

export default RecipeForm
