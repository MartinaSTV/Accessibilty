const Form = () => {
  return (
    <section>
      <form
        action=""
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <input type="text" placeholder="Name" />
        <input type="number" placeholder="Telephone number" />
        <input type="email" />
      </form>
    </section>
  );
};
export default Form;
