import React, { useState } from "react";
import { useActions } from "../hooks/actions";
import { useAppSelector } from "../hooks/redux";
import { IRepo } from "../models/models";

export function RepoCard({ repo }: { repo: IRepo }) {

   const { addFavoutite, removeFavoutite } = useActions()
   const { favourites } = useAppSelector(state => state.gitHub)

   const [isFav, setIsFav] = useState(favourites.includes(repo.html_url))

   const addToFav = (e: React.MouseEvent<HTMLButtonElement>) => {
      e.preventDefault()
      addFavoutite(repo.html_url)
      setIsFav(true)
   }

   const removeToFav = (e: React.MouseEvent<HTMLButtonElement>) => {
      e.preventDefault()
      removeFavoutite(repo.html_url)
      setIsFav(false)
   }

   return (
      <div>
         <a href={repo.html_url} rel="noreferrer" target="_blank" className="border py-3 px-5 rounded mb-2 hover:bg-gray-100 transition-all block">
            <h2 className="text-lg font-bold">{repo.full_name}</h2>
            <p className="text-sm">
               Forks: <span className="font-bold mr-2">{repo.forks}</span>
               Watchers: <span className="font-bold mr-2">{repo.watchers}</span>
            </p>
            <p className="text-sm font-thin">{repo?.description}</p>

            {!isFav &&
               <button
                  className="py-2 px-4 mt-2 bg-yellow-400 rounded hover:shadow-md transition-all"
                  onClick={addToFav}
               >Add</button>

            }
            {isFav &&
               <button
                  className="py-2 px-4 mt-2 bg-red-400 rounded hover:shadow-md transition-all"
                  onClick={removeToFav}
               >Remove</button>
            }
         </a>
      </div>
   )
}