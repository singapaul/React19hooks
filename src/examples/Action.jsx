const submitData = async (userData) => {
 
  const newUser = {
    // Easier acccess to form data
    username: userData.get("username"),
    email: userData.get("email"),
  };
  console.log(newUser);
};

const Action = () => {
  return (
    <>
      <h3 className="text-lg font-semibold text-gray-700 mt-4 mb-2">
        Action Example
      </h3>
      <form action={submitData} className="space-y-4">
        <div className="flex flex-col">
          <label className="mb-1 text-sm font-medium text-gray-600">
            User Name
          </label>
          <input
            type="text"
            name="username"
            className="p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="flex flex-col">
          <label className="mb-1 text-sm font-medium text-gray-600">
            Email
          </label>
          <input
            type="text"
            name="email"
            className="p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <button
          type="submit"
          className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600"
        >
          Submit
        </button>
      </form>
    </>
  );
};

export default Action;
