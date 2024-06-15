function WhiteButton({label, onClick}) {
    return <button onClick={onClick} type="button" className="w-full text-black bg-white font-semibold rounded-lg text-m px-5 py-2.5 border-2 border-black">{label}</button>
}

export default WhiteButton