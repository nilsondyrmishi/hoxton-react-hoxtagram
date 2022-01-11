function Comment(props){
    console.log(props)
    return(<>

        <ul className="comments">
           <li>{props.comment}</li>
        </ul>
    </>)
}
export default Comment
