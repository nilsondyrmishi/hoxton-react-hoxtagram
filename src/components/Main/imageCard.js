import Comment from "./comments";
function ImageCard(props){
    return(<>
        <article className="image-card">
        <h2 className="title">Title of image goes here</h2>
        <img src="./assets/image-placeholder.jpg" className="image" />
        <div className="likes-section">
            <span className="likes">0 likes</span>
            <button className="like-button">♥</button>
        </div>
            {props.comments.map((comments)=>
            <Comment key={comments.id} comment={comments.content}/>
            )}
        </article>
    </>)
}
export default ImageCard
