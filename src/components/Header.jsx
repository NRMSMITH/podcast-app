
const Header = (props) => {
    return (
        <header>
            <h1 className="header">
            <img id="pink_triangle_img" src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Pink_triangle.svg" alt="upside down pink triangle"/>
            <u>{props.title}</u></h1>
        </header>
    )
}
export default Header;