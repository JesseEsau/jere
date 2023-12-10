import JereBow from "../assets/jere-bow.png";
import Lion from "../assets/lion.png";
import { PhotoCard } from "./PhotoCard";
import no01 from "../assets/no01.png";
import no03 from "../assets/no03.png";
import a1 from "../assets/a1.png";
import a2 from "../assets/a2.png";
import a3 from "../assets/a3.png";
import a4 from "../assets/a4.png";
import barn from "../assets/barn.png";
import { Card } from "./Card";

export const Home = () => {
  document.title = "Home";

  return (
    <div className="text-center">
      <div className="text-yellow-300 jere-bg flex p-4">
        <div>
          <img src={Lion} alt="" />
        </div>

        <div>
          <h1 className="text-4xl lg:text-7xl">JERE (AZELLE)</h1>
        </div>

        <div>
          <img src={JereBow} />
        </div>
      </div>

      <main className="dark:text-white bg-gray-200 dark:bg-gray-800 ">
        <div>
          <p className="font-bold text-2xl md:text-4xl lg:text-6xl text-green-600 dark:text-yellow-300 p-4 lg:p-8 rounded-lg">
            A PEOPLE WITH INVICIBLE MILITARY POWER
          </p>
        </div>

        <div className=" grid gap-4 grid-cols-1 p-4">
          <PhotoCard className="">
            <img src={no01} alt="" />
            <img className="mb-0" src={no03} alt="" />
          </PhotoCard>

          <Card classes="p-4">
            <h1 className="text-green-600 font-bold md:text-4xl lg:text-6xl">
              Ugurutupana nan uwushaji
            </h1>
          </Card>

          <PhotoCard>
            <img src={a1} alt="" />
            <img src={a2} alt="" />
          </PhotoCard>

          <div className=" sm:text-2xl md:text-4xl lg:text-6xl text-green-600 dark:text-yellow-300 p-4 lg:p-8 rounded-lg">
            <p className="mb-4 font-bold">Jere, a word with two meanings:</p>
            <p className="sm:grid grid-cols-2 gap-4">
              <p>1. A tribe, also called Azelle.</p>
              <p>2. A physical land where the Jere People are located.</p>
            </p>
          </div>

          <div className="sm:grid grid-cols-2  gap-4">
            <Card>
              <img src={a3} alt="" />
            </Card>

            <Card>
              <img src={a4} alt="" />
            </Card>
          </div>

          <Card>
            <img src={barn} alt="" />
            <p className="m-auto mb-5 text-green-600 font-bold">
              Jere barn in Jos museum
            </p>
          </Card>
        </div>
      </main>
    </div>
  );
};
