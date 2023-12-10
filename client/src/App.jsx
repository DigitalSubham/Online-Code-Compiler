import { useState } from "react";

function App() {
  const [code, setCode] = useState("");
  const [output, setOutput] = useState("");
  const [input, setInput] = useState("Give input");

  const handleSubmit = async () => {
    const payload = {
      language: "js",
      code,
    };
    const result = await fetch("http://localhost:3000/run", {
      method: "POST",
      body: JSON.stringify(payload), // You may need to stringify the payload
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await result.json();
    console.log(data);
    setOutput(data.result);
  };

  return (
    <div className="flex">
      <div className=" m-2 flex flex-col">
        <h1 className="text-3xl m-2">Code Compiler</h1>
        <textarea
          rows="20"
          cols="75"
          value={code}
          className=" border-black border-2 m-2"
          onChange={(e) => setCode(e.target.value)}
        ></textarea>
        <button
          className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-2 ml-4 w-[25%] py-2.5 text-center  "
          onClick={handleSubmit}
        >
          Run
        </button>
      </div>

      <div className="mt-10">
        <textarea
          type="text"
          value={input}
          className="w-60 h-40   m-2 mt-6 border-black border-2"
          onChange={(e) => setInput(e.target.value)}
        />
        <p className="text-xl ml-2">output</p>
        <div className="w-60 h-[277px] border-black border-2 m-2 text-xl">
          {output}
        </div>
      </div>
    </div>
  );
}

export default App;
