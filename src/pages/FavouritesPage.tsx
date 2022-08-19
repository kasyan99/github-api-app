import { useAppSelector } from "../hooks/redux"

export const FavouritesPage = () => {

   const { favourites } = useAppSelector(state => state.gitHub)

   if (favourites.length === 0) {
      return <p className="text-center">No items</p>
   }

   return (
      <div className="flex justify-center pt-8">
         <ul className="list-none ">
            {favourites.map(item => <li key={item}><a href={item} rel="noreferrer" target="_blank">{item}</a></li>)}
         </ul>
      </div>
   )

}