import { Link } from "react-router-dom"
import Logo from '@/assets/logo.png'
export const LogoDigital = () => {
    return (
        <>
            
        <Link to="/" className="flex items-center gap-2 absolute left-1/2 -translate-x-1/2 md:static md:translate-x-0">
          <img src={Logo} alt="Logo" />
          <span className="text-primary font-semibold text-sm md:text-4xl tracking-tight mr-3">
            Digital Store
          </span>
        </Link>
        </>
    );
}
