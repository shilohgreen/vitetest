import { useParams } from "react-router-dom";

export const UserDetails = () => {
    const params = useParams()
    const userID = params.userID
    return userID
}