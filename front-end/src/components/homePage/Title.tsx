const Title = () => {
    return (
        <>
            <div className="fixed h-screen w-screen flex items-center justify-center">
                <div className="flex items-center justify-center bg-largeEclipse h-screen w-screen rounded-full blur-[176px] bg-opacity-20 z-0">
                    <div className="bg-smallEclipse h-3/5 w-1/2 rounded-full blur-[234px] bg-opacity-30 z-0"></div>
                </div>
            </div>
            <div className="flex-block relative justify-center">
                <div className="relative top-20 z-40">
                    <p className="blur-[20px] w-screen text-center text-purple-500 font-bold text-4xl lg:text-9xl lg:tracking-wider font-mono animate-signGlow">
                        JACOB JOHNSTONE
                    </p>
                    <div className="absolute top-0 z-20">
                        <p className="blur-[2px] w-screen text-center text-purple-400 text-4xl lg:text-9xl lg:tracking-wider font-bold font-mono animate-signGlow">
                            JACOB JOHNSTONE
                        </p>
                    </div>
                    <div className="absolute top-0 z-20">
                        <p className="text-titleFinal w-screen text-center font-light text-4xl lg:text-9xl lg:tracking-wider font-mono drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
                            JACOB JOHNSTONE
                        </p>
                    </div>
                </div>
                <div className="relative z-40 animate-BEScFloat">
                    <p className="blur-[20px] text-purple-500 w-screen text-center font-bold text-4xl lg:text-6xl lg:tracking-wider font-mono animate-signGlow">
                        B.E.Sc
                    </p>
                    <div className="absolute top-0 z-20">
                        <p className="blur-[2px] text-purple-400 w-screen text-center text-4xl lg:text-6xl lg:tracking-wider font-bold font-mono animate-signGlow">
                            B.E.Sc
                        </p>
                    </div>
                    <div className="absolute top-0 z-20">
                        <p className="text-titleFinal font-light w-screen text-center text-4xl lg:text-6xl lg:tracking-wider font-mono drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
                            B.E.Sc
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Title;
