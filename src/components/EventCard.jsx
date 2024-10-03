import React from "react";
// import { TweenMax, Power3, Power4 } from "gsap";
import { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Box from "@mui/material/Box";
import { EventItem } from "../constants/eventItems";
gsap.registerPlugin(ScrollTrigger);

function EventCard() {
	useEffect(() => {
		let ctx = gsap.context(() => {
			gsap.set(".photo:not(:first-child)", { opacity: 0, scale: 0.5 })

			const animation = gsap.to(".photo:not(:first-child)", {
				opacity: 1, scale: 1, duration: 1, stagger: 1
			})

			ScrollTrigger.create({
				trigger: ".gallery",
				start: "top top",
				end: "bottom bottom",
				pin: ".rightblock",
				animation: animation,
				scrub: true,
				
			})
		})
		return () => ctx.revert();
	}, [])
	return (
		<React.Fragment>
			<Box className="gallery" sx={{ display: "flex" }}>
				<Box className="left" sx={{
					width: "50%",
					marginLeft: "50px",
          marginTop:"-350px",
					"& .details": {
						height: "100vh",
						display: "flex",
						flexDirection: "column",
						justifyContent: "center",
						width: "40vw",
						marginLeft: "auto",
						color: "#fff",
						fontSize: "3rem",
						fontWeight: 900,
					}
				}}>
					{EventItem.map((item) => (
        <div className="text-content mt-[500px]">
          <p className="title" id={item.id}>
            <h1>{item.name}</h1>
          </p>
          <div className="desc-event">
            <div className="desc-event-script">{item.description}</div>
            <div className="desc-event-coord">
              {item.coordinators.map((coord) => (
                <div className="coorddiv">
                  <span>
                    <p className="coordname">{coord.coordname}</p>
                    <p className="coordphone">{coord.coordphone}</p>
                  </span>
                </div>
              ))}
            </div>
          </div>
          <button className="btn">See More!</button>
        </div>
      ))}
				</Box>
				<Box className="rightblock" sx={{
					width: "50%",
					height: "100vh",
					display: "flex",
					flexDirection: "column",
					justifyContent: "center",
				}}>
					<Box sx={{
						width: "40vw",
						height: "40vw",
						position: "relative",
						"& .photo": {
							position: "absolute",
							width: "100%",
							height: "100%",
							"& img": {
								height: "100%",
								width: "100%",
							}
						}
					}}>
						<Box className="photo">
							<img
								src="http://static.showit.co/800/M0IzUCMvQCqlJn1YtNlikw/59514/pexels-yan-5793641-1.jpg"
								alt="img-1" />
						</Box>
						<Box className="photo">
							<img
								src="http://static.showit.co/800/137NFxuzSxeyjlons2WEzA/59514/pexels-yan-5793643.jpg"
								alt="img-2" />
						</Box>
						<Box className="photo">
							<img
								src="http://static.showit.co/800/3kOLYaOCS1SMieN6Y88Fqg/59514/mukuko-studio-mu88mlefcou-unsplash.jpg"
								alt="img-3" />
						</Box>
            <Box className="photo">
							<img
								src="http://static.showit.co/800/M0IzUCMvQCqlJn1YtNlikw/59514/pexels-yan-5793641-1.jpg"
								alt="img-1" />
						</Box>
            <Box className="photo">
							<img
								src="http://static.showit.co/800/137NFxuzSxeyjlons2WEzA/59514/pexels-yan-5793643.jpg"
								alt="img-2" />
						</Box>
            <Box className="photo">
							<img
								src="http://static.showit.co/800/3kOLYaOCS1SMieN6Y88Fqg/59514/mukuko-studio-mu88mlefcou-unsplash.jpg"
								alt="img-3" />
						</Box>
            <Box className="photo">
							<img
								src="http://static.showit.co/800/M0IzUCMvQCqlJn1YtNlikw/59514/pexels-yan-5793641-1.jpg"
								alt="img-1" />
						</Box>
            <Box className="photo">
							<img
								src="http://static.showit.co/800/137NFxuzSxeyjlons2WEzA/59514/pexels-yan-5793643.jpg"
								alt="img-2" />
						</Box>
            <Box className="photo">
							<img
								src="http://static.showit.co/800/3kOLYaOCS1SMieN6Y88Fqg/59514/mukuko-studio-mu88mlefcou-unsplash.jpg"
								alt="img-3" />
						</Box>
            <Box className="photo">
							<img
								src="http://static.showit.co/800/M0IzUCMvQCqlJn1YtNlikw/59514/pexels-yan-5793641-1.jpg"
								alt="img-1" />
						</Box>
            <Box className="photo">
							<img
								src="http://static.showit.co/800/137NFxuzSxeyjlons2WEzA/59514/pexels-yan-5793643.jpg"
								alt="img-2" />
						</Box>
            <Box className="photo">
							<img
								src="http://static.showit.co/800/3kOLYaOCS1SMieN6Y88Fqg/59514/mukuko-studio-mu88mlefcou-unsplash.jpg"
								alt="img-3" />
						</Box>
            <Box className="photo">
							<img
								src="http://static.showit.co/800/M0IzUCMvQCqlJn1YtNlikw/59514/pexels-yan-5793641-1.jpg"
								alt="img-1" />
						</Box>
            <Box className="photo">
							<img
								src="http://static.showit.co/800/137NFxuzSxeyjlons2WEzA/59514/pexels-yan-5793643.jpg"
								alt="img-2" />
						</Box>
            <Box className="photo">
							<img
								src="http://static.showit.co/800/3kOLYaOCS1SMieN6Y88Fqg/59514/mukuko-studio-mu88mlefcou-unsplash.jpg"
								alt="img-3" />
						</Box>
            <Box className="photo">
							<img
								src="http://static.showit.co/800/M0IzUCMvQCqlJn1YtNlikw/59514/pexels-yan-5793641-1.jpg"
								alt="img-1" />
						</Box>
            <Box className="photo">
							<img
								src="http://static.showit.co/800/137NFxuzSxeyjlons2WEzA/59514/pexels-yan-5793643.jpg"
								alt="img-2" />
						</Box>
            <Box className="photo">
							<img
								src="http://static.showit.co/800/3kOLYaOCS1SMieN6Y88Fqg/59514/mukuko-studio-mu88mlefcou-unsplash.jpg"
								alt="img-3" />
						</Box>
            <Box className="photo">
							<img
								src="http://static.showit.co/800/M0IzUCMvQCqlJn1YtNlikw/59514/pexels-yan-5793641-1.jpg"
								alt="img-1" />
						</Box>
            <Box className="photo">
							<img
								src="http://static.showit.co/800/137NFxuzSxeyjlons2WEzA/59514/pexels-yan-5793643.jpg"
								alt="img-2" />
						</Box>
            <Box className="photo">
							<img
								src="http://static.showit.co/800/3kOLYaOCS1SMieN6Y88Fqg/59514/mukuko-studio-mu88mlefcou-unsplash.jpg"
								alt="img-3" />
						</Box>
            <Box className="photo">
							<img
								src="http://static.showit.co/800/M0IzUCMvQCqlJn1YtNlikw/59514/pexels-yan-5793641-1.jpg"
								alt="img-1" />
						</Box>
            <Box className="photo">
							<img
								src="http://static.showit.co/800/137NFxuzSxeyjlons2WEzA/59514/pexels-yan-5793643.jpg"
								alt="img-2" />
						</Box>
            <Box className="photo">
							<img
								src="http://static.showit.co/800/3kOLYaOCS1SMieN6Y88Fqg/59514/mukuko-studio-mu88mlefcou-unsplash.jpg"
								alt="img-3" />
						</Box>
            <Box className="photo">
							<img
								src="http://static.showit.co/800/M0IzUCMvQCqlJn1YtNlikw/59514/pexels-yan-5793641-1.jpg"
								alt="img-1" />
						</Box>
					</Box>
				</Box>
			</Box>
		</React.Fragment >
	);
}

export default EventCard;