const ImageSection = () => {
    return (
        <>
            <div className="relative">
                <div className="">
                    <img src="/assets/images/Maskgroup.png"></img>
                </div>
                <div className="absolute top-14 left-28 fixed">
                    <div className="grid-cols-6">
                        <div className="openSansExtraBold text-2xl w-[300px]">
                            Get future fit with the mostin-demand skills!
                        </div>
                        <div className="openSansMedium text-md mt-2">
                            Experience immersive learning with PRISM
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default ImageSection;