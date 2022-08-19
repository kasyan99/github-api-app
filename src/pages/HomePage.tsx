import { useEffect, useState } from "react";
import { RepoCard } from "../components/RepoCard";
import { useDebounce } from "../hooks/debounce";
import { useLazyGetUserReposQuery, useSearchUsersQuery } from "../store/github/github-api"

export const HomePage = () => {
   const [search, setSearch] = useState('')
   const [dropdown, setDropdown] = useState(false)
   const debounced = useDebounce(search)
   const { isLoading, isError, data } = useSearchUsersQuery(debounced, {
      skip: debounced.length < 2,
      refetchOnFocus: true
   })
   const [fetchRepos, { isLoading: areReposLoading, data: repos }] = useLazyGetUserReposQuery()

   useEffect(() => {
      setDropdown(debounced.length >= 2 && data?.length! > 0)
   }, [debounced, data?.length])

   const clikHandler = (username: string) => {
      fetchRepos(username)
      setDropdown(false)
   }

   return <div className="flex justify-center pt-8">
      {isError && <p className="text-center text-red-600">Somthing went wrong</p>}
      {!isError &&
         <>
            <div className="relative w-[550px]">
               <input
                  type="text"
                  className="border py-2 px-4 w-full h-[42px] mb-2"
                  placeholder="Search for GitHub username..."
                  value={search}
                  onChange={e => setSearch(e.target.value)}
               />

               <ul className="list-none absolute top-[42px] left-0 right-0 max-h-[400px] 
               shadow-md bg-white overflow-y-hidden">
                  {isLoading && <p>Loading...</p>}
                  {!isLoading && dropdown &&
                     data?.map(user => (
                        <li
                           key={user.id + Date.now.toString()}
                           onClick={() => clikHandler(user.login)}
                           className='py-2 px-4 hover:bg-gray-400 hover:text-white'
                        >{user.login}</li>
                     ))
                  }
               </ul>
               <div className="container">
                  {areReposLoading && <p>Repos are loading...</p>}
                  {repos?.map(repo => <RepoCard repo={repo} key={repo.id} />)}
               </div>
            </div>
         </>
      }


   </div>
}