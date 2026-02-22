import {  NavLink } from "react-router-dom"
export const NavItem = ({ to, children }: { to: string; children: React.ReactNode }) => {
  return (
            <div>
              <li>
                  <NavLink
                        to={to}
                        className={({ isActive }) =>
                            isActive ? "text-primary font-bold border-b-2 border-primary pb-1"
                                     : " text-dark-gray-3 hover:text-primary transition-colors"
                            
                    }
                    >
                    {children}
                  </NavLink>
              </li>
            </div>
  )
}