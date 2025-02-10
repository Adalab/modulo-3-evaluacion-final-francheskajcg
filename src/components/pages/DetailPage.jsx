

import { Link } from "react-router";



function DetailPage() {



    return (
        <div className="pageContainer">
            <div className="detailMovie">
                <img className="detailMovie_img" src="https://hips.hearstapps.com/hmg-prod/images/mv5bzmjknzviyjytzwzlny00oge4lwi2-642b0b32296a0.jpeg?crop=0.9881422924901185xw:1xh;center,top&resize=980:*" alt="" />
                <h1> peli </h1>
                <p>wow</p>
                <p>link audio</p>
            </div>

            <Link to="/" className="btn"></Link>
        </div>

    );
}

export default DetailPage;