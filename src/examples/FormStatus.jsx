import { useFormStatus } from "react-dom";

function Submit() {
  const { pending  } = useFormStatus();
  return (
    <button disabled={pending}>{pending ? "Submitting..." : "Submit"}</button>
  );
}

const formAction = async () => {
  // Simulate a delay of 2 seconds
  await new Promise((resolve) => setTimeout(resolve, 3000));
};

const FormStatus = () => {
  return (
    <>
      <div className="border-2 border-black p-32">
        <h3 className="text-lg font-semibold text-gray-700 mt-4 mb-2">
          useFormStatus() Example
        </h3>
        <form action={formAction} className="space-y-4">
          <Submit className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600" />
        </form>
      </div>
    </>
  );
};

export default FormStatus;
