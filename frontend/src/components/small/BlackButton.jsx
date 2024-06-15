function BlackButton({label, onClick}) {
    return <button onClick={onClick} type="button" className="w-full text-white bg-black font-semibold rounded-lg text-m px-5 py-2.5">{label}</button>
}

export default BlackButton;
