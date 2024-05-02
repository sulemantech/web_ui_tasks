import react from "react";
const Login = () => {
  return (
    <>
      <div
        className="container h-[95vh] mx-auto my-3 flex justify-center items-center bg-cover overflow-hidden"
        style={{
          backgroundImage: `url(${process.env.PUBLIC_URL}/assets/Vector.svg)`,
        }}
      >
        <div className="flex justify-between w-[80vw]">
          <div className="container w-56 mt-64">
            <span className=" text-[#903FFE] font-extrabold text-5xl font-saira">
              LOGIN
            </span>
            <br></br>
            {/* <span>

              <svg
                width="40"
                height="50"
                viewBox="0 0 66 67"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                >
                <path
                  d="M33.0003 66.635C14.775 66.635 0 51.8602 0 33.6351C0 15.4098 14.775 0.63501 33.0003 0.63501C51.2254 0.63501 66 15.4098 66 33.6351C66 51.8602 51.2254 66.635 33.0003 66.635Z"
                  fill="#4C4C4C"
                  />
              </svg>
                  </span> */}
            <span className="font-extrabold font-sairaSemiCondensed text=[#4C4C4C] mt-10 text-2xl">
              ZUR STARTSEITE
            </span>
          </div>
          <div className="bg-white  p-5 rounded-3xl w-auto mt-16 ">
            <div className="">
              <h1 className="text-[#903FFE] font-extrabold text-3xl font-saira ">
                HALLO!
              </h1>
              <p className="text-[#4D4D4D] font-bold text-3xl ">
                Schön, dass <br></br> du Da bist!
              </p>
              <p className="mt-5 font-saira text-xl">
                Bitte gib deine E-Mail Adresse ein mit der Du dich registriert
                hast.<br></br>
                Du erhältst dann eine E-Mail, in der sich der Anmelde-Link
                befindet.
              </p>
            </div>
            <div className="mt-5 ">
              <input
                className="bg-[#E7EBF4] text-[#4C4C4C] h-10 p-4 w-full rounded-xl focus:outline-none"
                type="text"
                placeholder="E-Mail"
              />
              <div className="m-auto w-36 my-10">
                <button className=" border w-full  text-center bg-[#FFFF65] p-2 font-extrabold rounded-2xl font-saira text=[#4C4C4C]">
                  LOGIN
                </button>
              </div>
              <p className="font-sairaSemiCondensed">
                <span className=" text-[#903FFE]">
                  {" "}
                  Noch nicht registriert?
                </span>{" "}
                Lade Dir jetzt die GIGA FIBER App herunter, um <br></br>
                Deinen Antrag einzureichen. Alternativ kannst du auch direkt das
                <br></br>
                Antragsformular über den bereitgestellten Link ausfüllen und
                absenden.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Login;
