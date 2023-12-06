
import ImageSection from "./imageSection";
import LoginSection from "./loginSection"
const Learning = () => {
  return (
    <>
      <div className="md:block">
        <div className="relative">
          <div className="bg-indigo-950 h-screen">
            <div className="absolute top-0 left-0">
              <img src="/assets/images/Ellipse 12.png" />
            </div>
            <div className="absolute top-0 right-0">
              <img src="/assets/images/Rectangle 99.png" />
            </div>
            <div className="absolute container mt-[10vh] mx-20">
              <div className="bg-white rounded-t-3xl">
                <div className="grid grid-cols-12">
                  <div className="col-span-6">
                    <LoginSection />
                  </div>
                  <div className="col-span-6">
                    <ImageSection />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>

  )

}


export default Learning;