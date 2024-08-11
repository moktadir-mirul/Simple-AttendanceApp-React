import { useParams } from "react-router-dom"
import { useFetch } from "../CustomHook/useFetch";
import { Link } from "react-router-dom";



export const PostWiseDetails = () => {
    const {postD} = useParams();
    const {isLoading, errorMessage, data: postDetails} = useFetch(null, `http://localhost:3000/posts/${postD}`)

    return (
        <div>
            <h1 className="posthd">Post Details</h1>
            {isLoading && <h3 style={{color:"blue", textAlign:"center", fontSize:"25px"}}>Data is laoding......</h3>}
            {errorMessage && <h2 style={{color:"red", textAlign:"center", fontSize:"30px"}}>!!!Warning: Data loading is failed!!!</h2>}
            <h1 className="posthd" style={{color: 'darkblue', fontSize: '32px'}}>Details of {postDetails?.title}</h1>
            <p id="postp" style={{fontSize: '22px', color: "darkblue"}}>{postDetails?.body}.</p>

            <h3 style={{textAlign: "center", color: "tomato", fontSize: "20px", textDecoration: "underline"}}><Link to={"/posts"}>Go Back</Link></h3>

        </div>
    )
}