import "./App.css";
import About from "./components/About";

function App() {
  return (
    <>
      <section id="home" className="pt-36">
        <div className="container">
          <div className="flex flex-wrap">
            <div className="w-full self-center px-4 lg:w-1/2">
              <h1 className="text-base font-semibold text-blue-500 md:text-xl">
                Hello Everyone, my name is{" "}
                <span className="block font-bold text-slate-900 text-4xl mt-1 lg:text-5xl">
                  Siswanto Ismail
                </span>
              </h1>
              <h2 className="font-medium text-slate-500 text-lg mb-5 lg:text-2xl">
                Lecturer &{" "}
                <span className="text-slate-900">Content Creator</span>
              </h2>
              <p className="font-medium text-slate-400 mb-10 leading-relaxed">
                Belajar web programming itu mudah bukan.{" "}
                <span className="font-bold text-slate-900">Bukan!</span>
              </p>
              <a
                href=""
                className="text-base font-semibold text-white bg-blue-500 py-3 px-8 rounded-full hover:shadow-lg hover:opacity-80 transition duration-300 ease-in-out"
              >
                Hubungi Saya
              </a>
            </div>
            <div className="w-full self-end px-4 lg:w-1/2">
              <div className="relative mt-10 lg:mt-0 lg:right-0">
                <img
                  src="img/portfolio.png"
                  alt=""
                  className="max-w-full mx-auto"
                />
                <span className="absolute bottom-0 -z-10 left-1/2 -translate-x-1/2 md:scale-125">
                  <svg
                    width={400}
                    height={400}
                    viewBox="0 0 200 200"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill="blue"
                      d="M40.7,-38.9C49.9,-31.4,52.8,-15.7,52.4,-0.4C52,14.9,48.4,29.8,39.1,46.1C29.8,62.4,14.9,80,-1,81C-16.9,82,-33.8,66.4,-47.9,50.1C-62,33.8,-73.4,16.9,-69.4,4C-65.3,-8.9,-46,-17.8,-31.9,-25.3C-17.8,-32.8,-8.9,-38.9,3.4,-42.3C15.7,-45.7,31.4,-46.4,40.7,-38.9Z"
                      transform="translate(100 100) scale(1.5)"
                    />
                  </svg>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <About />
    </>
  );
}

export default App;
