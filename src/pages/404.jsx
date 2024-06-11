import { Link } from "../Link";

export default function Page404 () {
    return (
        <>
            <div>
                <h1>This is not fine.</h1>
                <img 
                    src='https://media1.tenor.com/m/-kZOB16tELEAAAAC/this-is-fine-fire.gif'
                    alt='This if not fine'
                />
            </div>
            <div>
                <Link to='/'>Volver al Home</Link>
            </div>
        </>
    )
}