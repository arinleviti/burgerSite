import "./MenuCatHeader.css";

export function MenuCatHeader({ props }) {

    const [firstWord, secondWord] = props.category.split(" ");

    return (
        <div className="cat-header-container1">
            <h1 className="cat-header-title">
                <span className="word-black">{firstWord}</span>
                <br />
                <span className="word-red">{secondWord}</span>
                
            </h1>
            <div className="cat-img">
                    <img src={props.img} />
                </div>
        </div>

    )
}
export default MenuCatHeader;
