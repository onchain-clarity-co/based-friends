import AuthButton from "./AuthButton"

export default function LogInPage() {
    return (
        <>
            <p className="text-white justify-center hidden md:flex">Please log in</p>
            <span className="flex justify-center mt-2 md:hidden"><AuthButton/></span>
        </>
    )
}