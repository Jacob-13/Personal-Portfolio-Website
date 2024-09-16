import ProjectFeature from "./ProjectFeature";
import loading from "../../images/loading.gif";
import defaultDatabase from "../../images/DatabaseIcon.png";
import { useEffect, useRef, useState } from "react";
import express from "../../images/express.png";
import arrow from "../../images/arrow.png";
import leftArrow from "../../images/leftArrow.png";
import heartIcon from "../../images/heartIcon.png";
import pokeball from "../../images/pokeball-icon.png";

type ProjectProps = {
    title: string;
    description: string;
    features: string[];
    featureImages: string[];
    technologyIcons: string[];
};

const Project = ({
    title,
    features,
    description,
    featureImages,
    technologyIcons,
}: ProjectProps) => {
    const [image, setImage] = useState(loading);
    const [alt, setAlt] = useState("Loading...");
    const [icon, setIcon] = useState(loading);
    const iconDivRef = useRef<HTMLDivElement>(null);
    const scrollBtnRef = useRef<HTMLImageElement>(null);
    const [isOverflowing, setIsOverflowing] = useState<boolean>(true);
    const [isScrolledRight, setIsScrolledRight] = useState<boolean>(false);
    const [isScrolledLeft, setIsScrolledLeft] = useState<boolean>(true);

    useEffect(() => {
        if (title == "Image Translation for Medical Students") {
            setImage(heartIcon); // title image
        } else if (title == "Simple Pokedex") {
            setImage(pokeball);
        } else {
            setImage(defaultDatabase);
        }
        showScrollArrow();
        window.addEventListener("resize", showScrollArrow);
    }, [title]);

    function showScrollArrow() {
        if (iconDivRef.current) {
            const { scrollWidth, clientWidth, scrollLeft } = iconDivRef.current;
            setIsOverflowing(scrollWidth > clientWidth);
        }
    }

    function handleScrollLeft() {
        if (iconDivRef.current) {
            iconDivRef.current.scrollTo({
                left: iconDivRef.current.scrollLeft - 100,
                behavior: "smooth",
            });
            const { clientWidth, scrollWidth, scrollLeft } = iconDivRef.current;
            //const scrolledToRight = scrollLeft + clientWidth >= scrollWidth;
            setIsScrolledRight(false);
            const scrolledToLeft = scrollLeft - 100 <= 0;
            setIsScrolledLeft(scrolledToLeft);
        }
    }

    function handleFeatureClick(index: number) {
        setImage(featureImages[index]);
        setAlt(features[index]);
    }

    function handleScrollRight() {
        //useRef, scroll div
        if (iconDivRef.current) {
            iconDivRef.current.scrollTo({
                left: iconDivRef.current.scrollLeft + 100, // Adjust the value as needed
                behavior: "smooth",
            });
            const { scrollWidth, clientWidth, scrollLeft } = iconDivRef.current;
            const scrolledToRight =
                scrollLeft + 100 + clientWidth >= scrollWidth;
            setIsScrolledRight(scrolledToRight);
            setIsScrolledLeft(false);
        }
    }

    return (
        <div className="my-10 bg-gradient-to-b from-gray-800 via-gray-600 to-gray-800 p-5 rounded-3xl w-full border-4 border-gray-400">
            <div className="text-titleFinal text-center text-2xl md:text-3xl lg:text-4xl mb-3 font-mono">
                {title}
            </div>
            <div className="text-gray-300 text-center text-md md:text-lg lg:text-xl">
                {description}
            </div>
            <div className="flex-block md:flex mt-4 items-center h-fit text-gray-500">
                <div className="flex justify-start items-center md:w-1/2 lg:min-h-[25rem]">
                    <div className="flex-block relative">
                        <div className="text-lg sm:text-xl md:text-2xl text-titleFinal font-mono pl-3">
                            Features
                        </div>
                        <ul className="relative mr-2 h-full p-3 overflow-y-scroll no-scrollbar bg-gray-800 rounded-3xl flex-block justify-center w-full">
                            {features.map((feature, i) => (
                                <li
                                    key={i}
                                    onClick={(e) => handleFeatureClick(i)}
                                    className="bg-blue-700 bg-opacity-80 text-titleFinal text-sm lg:text-base h-fit w-fit px-3 my-2 rounded-3xl cursor-pointer py-2 hover:bg-sky-600 transition duration-500 linear"
                                >
                                    <ProjectFeature name={features[i]} />
                                </li>
                            ))}
                        </ul>
                        <div className="absolute bottom-0 w-full h-10 bg-gradient-to-t from-gray-800 to-transparent z-40 rounded-3xl"></div>
                    </div>
                </div>
                <div className="flex justify-center items-center md:w-1/2 sm:mt-5 md:mt-0 md:h-[20rem] lg:h-[25rem] md:ml-5">
                    <img
                        src={image}
                        className="md:h-fit mt-4 md:mt-0 max-h-full rounded-3xl"
                        alt={alt}
                    />
                </div>
            </div>
            <div className="flex justify-center items-center">
                {isOverflowing && !isScrolledLeft ? (
                    <img
                        alt="left arrow"
                        src={leftArrow}
                        onClick={handleScrollLeft}
                        className="relative left-0 p-5 mt-4 circle-gradient-bg rounded-3xl h-14 cursor-pointer animate-fadeIn"
                    />
                ) : (
                    <img
                        src={leftArrow}
                        className="opacity-0 h-16 p-5 rounded 3xl relative left-0"
                    />
                )}
                <div
                    ref={iconDivRef}
                    className="relative flex-block h-fit xs:flex xs:h-16 mt-4 xs:w-fit max-w-full justify-start bg-gradient-to-l from-gray-400 via-gray-100 to-gray-400 rounded-3xl items-center object-contain overflow-x-scroll no-scrollbar"
                >
                    {technologyIcons.map((technology, i) =>
                        technology == express ? (
                            <img
                                key={i}
                                src={technology}
                                className="max-h-full w-fit my-8 px-2 xs:my-0 xs:py-5 xs:px-5"
                            />
                        ) : (
                            <img
                                key={i}
                                src={technology}
                                className="max-h-full w-fit my-8 px-2 xs:my-0 xs:py-2 xs:px-5"
                            />
                        )
                    )}
                </div>
                {isOverflowing && !isScrolledRight ? (
                    <img
                        alt="arrow"
                        ref={scrollBtnRef}
                        src={arrow}
                        className="relative right-0 p-5 mt-4 circle-gradient-bg rounded-3xl h-14 cursor-pointer animate-fadeIn"
                        onClick={handleScrollRight}
                    />
                ) : (
                    <img
                        src={arrow}
                        className="h-16 p-5 rounded-3xl opacity-0 relative right-0"
                    />
                )}
            </div>
        </div>
    );
};

export default Project;
