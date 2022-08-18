import { useSearchUsersQuery } from "../store/github/github-api"

export const HomePage = () => {
   const { isLoading, isError, data } = useSearchUsersQuery('vladilen')
   return <div>
      HomePage
   </div>
}