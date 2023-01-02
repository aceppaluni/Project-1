import ReactDom from "react-dom";
import Soloheader from "./Soloheader.js";
import Solomain from "./Solomain.js";
import Solofooter from "./Solofooter.js";

function Page(){
    return (
        <div>
            <Soloheader />
            <Solomain />
            <Solofooter />
        </div>
    )
}

 ReactDom.render(<Page />, document.getElementById("root"));