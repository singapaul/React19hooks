import { useFormState } from "react-dom";

const FormState = () => {
  const submitForm = (prevState, queryData) => {
    const name = queryData.get("username");
    console.log(prevState); // previous form state
    if (name === "react19") {
      return {
        success: true,
        text: "Welcome",
      };
    } else {
      return {
        success: false,
        text: "Error",
      };
    }
  };
  const [message, formAction] = useFormState(submitForm, null);
  return (
    <>
      <h3 className="text-lg font-semibold text-gray-700 mt-4 mb-2">
        useFormState() Example
      </h3>
      <form action={formAction} className="space-y-4">
        <div className="flex flex-col">
          <label className="mb-1 text-sm font-medium text-gray-600">What is the best library in the world called?</label>
          <input
            type="text"
            name="username"
            className="p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <button
          type="submit"
          className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600"
        >
          Submit
        </button>
        {message && (
          <h4 className="mt-2 text-sm font-medium text-gray-700">
            {message.text}
          </h4>
        )}
      </form>
    </>
  );
};

export default FormState;
