function InputArea({ title, setInput, placeholder, type="text", value}) {
  return (
      <div className={"w-full flex flex-col gap-1"}>
            <label className={"font-bold ms-1"} >{title}</label>
            <input
                type={type}
                onChange={(e) => setInput(e.target.value)}
                placeholder={placeholder}
                value={value}
                className="w-full placeholder:text-darkGray text-black bg-white font-medium rounded-lg text-m px-3 py-1.5 border-2 border-lightGray focus:border-darkGray focus:outline-none"
            />
      </div>

  );
}

export default InputArea;