import { Link } from "react-router-dom"

export const Header = () => {
   return <div className="flex justify-between items-center h-[50px] bg-slate-900 text-white">
      <div className="w-11/12 flex justify-between items-center m-auto">
         <h1>GitHub Search</h1>
         <Navigation />
      </div>
   </div>
}

export const Navigation = () => {
   return <nav>
      <span>
         <Link to='/' className="pr-2">Home</Link>
         <Link to='/favourites' >Favourites</Link>
      </span>
   </nav>
}