import "../collection.css"
import MainStyle from "../assets/images/mainStyle.svg";
import styleImg1 from "../assets/images/styleImg1.svg";
import styleImg2 from "../assets/images/styleImg2.svg";
import styleImg3 from "../assets/images/styleImg3.svg";
import styleImg4 from "../assets/images/styleImg4.svg";

const PopularStyles = () => {
    return (
        <div className="d-flex">
            <p className="verticaltext_content">Explore new and popular styles</p>
            <div className="d-flex">
                <img src={MainStyle} className="main-style"/>
                <div className="d-flex ms-2 sub-item-list">
                    <img src={styleImg1} className="sub-style"/>
                    <img src={styleImg2} className="sub-style" />
                    <img src={styleImg3} className="sub-style" />
                    <img src={styleImg4} className="sub-style" />
                </div>
            </div>
        </div>
    )
}

export default PopularStyles;