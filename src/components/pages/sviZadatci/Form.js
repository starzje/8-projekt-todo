const Form = ({ handleSubmit, handleChange }) => {
  return (
    <form onSubmit={handleSubmit} className="flex-util">
      <input
        className="rounded-l-full py-2 px-3"
        type="text"
        placeholder="Pronađi zadatak"
        onChange={handleChange}
      />
      <button
        onClick={handleSubmit}
        className="bg-blue-600 py-2 px-3 rounded-r-full text-white hover:bg-blue-500 transition duration-300">
        Pretraži
      </button>
    </form>
  );
};

export default Form;
