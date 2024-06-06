import { useOptimistic, useState } from "react";

const Optimistic = () => {


  // 1. Messages stored in state
  const [messages, setMessages] = useState([
    { text: "Hey, I am initial message!", sending: false, key: 1 },
  ]);

  // 2. Pass messages to a hook
  const [optimisticMessages, addOptimisticMessage] = useOptimistic(
    // 4. Create a temporary UI update
    messages,
    (state, newMessage) => [
      ...state,
      {
        text: newMessage,
        sending: true,
      },
    ]
  );

  async function sendFormData(formData) {
    const sentMessage = await fakeDelayAction(formData.get("message"));
    setMessages((messages) => [...messages, { text: sentMessage }]);
  }

  async function fakeDelayAction(message) {
    await new Promise((res) => setTimeout(res, 1000));
    return message;
  }

  const submitData = async (userData) => {
    // 3. Add optimistic message to state
    addOptimisticMessage(userData.get("username"));

    // 5. Finally we update the actual state with the server response
    await sendFormData(userData);
  };

  return (
    <>
      {optimisticMessages.map((message, index) => (
        <div key={index}>
          {message.text}
          {!!message.sending && <small> (Sending...)</small>}
        </div>
      ))}
      <form action={submitData} className="space-y-4">
        <h3 className="text-lg font-semibold text-gray-700 mt-4 mb-2">
          useOptimistic() Example
        </h3>
        <div className="space-y-2">
          <label className="block text-gray-600">Username</label>
          <input
            type="text"
            name="username"
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
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

export default Optimistic;
