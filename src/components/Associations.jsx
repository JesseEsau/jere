import Jenda from "../assets/jenda-logo.jpg";
import Jensa from "../assets/jensa-logo.jpg";
import { Card } from "./Card";
export const Associations = () => {
    return (
        <div>
            <Card classes="rounded-sm">
                <img className="rounded-full w-32 md:w-60 lg:w-80 m-auto" src={Jenda} alt=""/>
                <h1 className="m-auto">JENDA</h1>
            </Card>

            <Card classes="rounded-sm">
                <img className="rounded-full w-32 md:w-60 lg:w-80 m-auto" src={Jensa} alt=""/>
                <h1 className="m-auto">JENSA</h1>
            </Card>

            <Card classes="rounded-sm">
                <h1 className="m-auto">JENYDA</h1>
            </Card>
        </div>
    )
}
