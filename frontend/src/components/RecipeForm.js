import React from 'react'
import Tags from './Tags'

const RecipeForm = ({ handleChange, handleSubmit, handleMacroChange, errors, data, staticTags, handleTag }) => {
  const { recipeName, image, ingredients, instructions, calories, servings, totalTime } = data
  return <section className="section">
    <div className="container">
      <div className="title has-text-centered">
       Your Recipe
      </div>
      <div className="subtitle has-text-centered">
        Add your own recipe to the mix, so you don't lose it the next time you look for a dose of NutriFix!
      </div>
      <form
        className="form"
        onSubmit={(event) => handleSubmit(event)}
      >
        <div className="field">
          <label className="label">
            Recipe Name
          </label>
          <div className="control">
            <input
              onChange={(event) => handleChange(event)}
              type="text"
              name="recipeName"
              className="input"
              value={recipeName}
            />
          </div>
          {errors.name && <small className="help is-danger">
            {errors.recipeName}
          </small>}
        </div>
        <div className="field">
          <label className="label">
            Image
          </label>
          <div className="control">
            <input
              onChange={(event) => handleChange(event)}
              type="text"
              name="image"
              className="input"
              value={image}
            />
          </div>
          {errors.image && <small className="help is-danger">
            {errors.image}
          </small>}
        </div>
        <div className="field">
          <label className="label">
            Ingredients
          </label>
          <div className="control">
            <textarea
              onChange={(event) => handleChange(event)}
              type="text"
              name="ingredients"
              className="textarea"
              value={ingredients}
            />
          </div>
          {errors.ingredients && <small className="help is-danger">
            {errors.ingredients}
          </small>}
        </div>
        <div className="field">
          <label className="label">
            Instructions
          </label>
          <div className="control">
            <textarea
              onChange={(event) => handleChange(event)}
              type="text"
              name="instructions"
              className="textarea"
              value={instructions}
            />
          </div>
          {errors.instructions && <small className="help is-danger">
            {errors.instructions}
          </small>}
        </div>
        <div className="field">
          <label className="label">
            Calories
          </label>
          <div className="control">
            <input
              onChange={(event) => handleChange(event)}
              type="number"
              name="calories"
              className="input"
              value={calories}
            />
          </div>
          {errors.calories && <small className="help is-danger">
            {errors.calories}
          </small>}
        </div>
        <div className="field">
          <div className="subtitle">Macronutrients</div>
          <label className="label">
            Fat
          </label>
          <div className="control">
            <input
              onChange={(event) => handleMacroChange(event)}
              type="text"
              name="fat"
              className="input"
            />
          </div>
          {errors.fat && <small className="help is-danger">
            {errors.fat}
          </small>}
        </div>
        <div className="field">
          <label className="label">
            Carbohydrates
          </label>
          <div className="control">
            <input
              onChange={(event) => handleMacroChange(event)}
              type="text"
              name="carbohydrates"
              className="input"
            />
          </div>
          {errors.carbohydrates && <small className="help is-danger">
            {errors.carbohydrates}
          </small>}
        </div>
        <div className="field">
          <label className="label">
            Sugars
          </label>
          <div className="control">
            <input
              onChange={(event) => handleMacroChange(event)}
              type="text"
              name="sugars"
              className="input"
            />
          </div>
          {errors.sugars && <small className="help is-danger">
            {errors.sugars}
          </small>}
        </div>
        <div className="field">
          <label className="label">
            Protein
          </label>
          <div className="control">
            <input
              onChange={(event) => handleMacroChange(event)}
              type="text"
              name="protein"
              className="input"
            />
          </div>
          {errors.protein && <small className="help is-danger">
            {errors.protein}
          </small>}
        </div>
        <div className="field">
          <label className="label">
            Servings
          </label>
          <div className="control">
            <input
              onChange={(event) => handleChange(event)}
              type="number"
              name="servings"
              className="input"
              value={servings}
            />
          </div>
          {errors.servings && <small className="help is-danger">
            {errors.servings}
          </small>}
        </div>
        <div className="field">
          <label className="label">
            Total Time
          </label>
          <div className="control">
            <input
              onChange={(event) => handleChange(event)}
              type="text"
              name="totalTime"
              className="input"
              value={totalTime}
            />
          </div>
          {errors.totalTime && <small className="help is-danger">
            {errors.totalTime}
          </small>}
        </div>
        <div className="label">
          <label className="label">Select Categories:</label>
          <Tags
            handleTag={handleTag}
            staticTags={staticTags}
          />
        </div>
        <button
          onClick={() => handleSubmit(event)}
          className="button is-success">
          Add your recipe
        </button>
      </form>
    </div>
  </section>

}

export default RecipeForm
