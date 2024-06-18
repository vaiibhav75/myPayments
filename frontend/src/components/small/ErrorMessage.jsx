function ErrorMessage ({text, errorState}) {
    if (!errorState) {
        return (
            <div className={"h-0.5"}>
            </div>

        )
    }
    return (
        <div>
            <p className={"text-red text-center font-bold"}>{text}</p>
        </div>
    )
}

export default ErrorMessage