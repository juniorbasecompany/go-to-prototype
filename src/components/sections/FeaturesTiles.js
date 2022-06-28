import React from "react";
import classNames from "classnames";
import { SectionTilesProps } from "../../utils/SectionProps";
import SectionHeader from "./partials/SectionHeader";
import Image from "../elements/Image";

const propTypes = {
	...SectionTilesProps.types,
};

const defaultProps = {
	...SectionTilesProps.defaults,
};
const FeaturesTiles = ({
	className,
	topOuterDivider,
	bottomOuterDivider,
	topDivider,
	bottomDivider,
	hasBgColor,
	invertColor,
	pushLeft,
	...props
}) => {
	const outerClasses = classNames(
		"features-tiles section",
		topOuterDivider && "has-top-divider",
		bottomOuterDivider && "has-bottom-divider",
		hasBgColor && "has-bg-color",
		invertColor && "invert-color",
		className
	);

	const innerClasses = classNames(
		"features-tiles-inner section-inner pt-0",
		topDivider && "has-top-divider",
		bottomDivider && "has-bottom-divider"
	);

	const tilesClasses = classNames(
		"tiles-wrap center-content",
		pushLeft && "push-left"
	);

	const sectionHeader = {
		title: "Traceability and Trackability",
		paragraph:
			"Imagine that when you take a product in your hands, you can know its origin, amount of water and other by-products used in the process, paths it has traveled, temperatures it has been subjected to, carbon footprints, in short, a wide variety of information at your fingertips. reach.",
	};

	return (
		<section {...props} className={outerClasses}>
			<div className="container">
				<div className={innerClasses}>
					<SectionHeader
						data={sectionHeader}
						className="center-content"
					/>
					<div className={tilesClasses}>
						<div className="tiles-item reveal-from-bottom">
							<div className="tiles-item-inner">
								<div className="features-tiles-item-header">
									<div className="features-tiles-item-image mb-16">
										<Image
											src={require("./../../assets/images/feature-tile-icon-01.svg")}
											alt="Features tile icon 01"
											width={64}
											height={64}
										/>
									</div>
								</div>
								<div className="features-tiles-item-content">
									<h4 className="mt-0 mb-8">
										Blockchain safety
									</h4>
									<p className="m-0 text-sm">
										Every step along the path taken by the
										product is carefully recorded on
										blockchain. This gives the necessary
										guarantee to the members of the process.
									</p>
								</div>
							</div>
						</div>

						<div
							className="tiles-item reveal-from-bottom"
							data-reveal-delay="200"
						>
							<div className="tiles-item-inner">
								<div className="features-tiles-item-header">
									<div className="features-tiles-item-image mb-16">
										<Image
											src={require("./../../assets/images/feature-tile-icon-02.svg")}
											alt="Features tile icon 02"
											width={64}
											height={64}
										/>
									</div>
								</div>
								<div className="features-tiles-item-content">
									<h4 className="mt-0 mb-8">Security</h4>
									<p className="m-0 text-sm">
										Using the private key and public key
										protocols, all players are guaranteed
										access to the environment.
									</p>
								</div>
							</div>
						</div>

						<div
							className="tiles-item reveal-from-bottom"
							data-reveal-delay="400"
						>
							<div className="tiles-item-inner">
								<div className="features-tiles-item-header">
									<div className="features-tiles-item-image mb-16">
										<Image
											src={require("./../../assets/images/feature-tile-icon-03.svg")}
											alt="Features tile icon 03"
											width={64}
											height={64}
										/>
									</div>
								</div>
								<div className="features-tiles-item-content">
									<h4 className="mt-0 mb-8">API</h4>
									<p className="m-0 text-sm">
										The environment can be easily updated
										using links to other systems.
									</p>
								</div>
							</div>
						</div>

						<div className="tiles-item reveal-from-bottom">
							<div className="tiles-item-inner">
								<div className="features-tiles-item-header">
									<div className="features-tiles-item-image mb-16">
										<Image
											src={require("./../../assets/images/feature-tile-icon-04.svg")}
											alt="Features tile icon 04"
											width={64}
											height={64}
										/>
									</div>
								</div>
								<div className="features-tiles-item-content">
									<h4 className="mt-0 mb-8">IoT </h4>
									<p className="m-0 text-sm">
										The use of this technology allows the
										integration of the environment with
										machines, equipment, scales and other
										objects that make up the process that
										involves the product.
									</p>
								</div>
							</div>
						</div>

						<div
							className="tiles-item reveal-from-bottom"
							data-reveal-delay="200"
						>
							<div className="tiles-item-inner">
								<div className="features-tiles-item-header">
									<div className="features-tiles-item-image mb-16">
										<Image
											src={require("./../../assets/images/feature-tile-icon-05.svg")}
											alt="Features tile icon 05"
											width={64}
											height={64}
										/>
									</div>
								</div>
								<div className="features-tiles-item-content">
									<h4 className="mt-0 mb-8">Trackability</h4>
									<p className="m-0 text-sm">
										Whoever gives rise to the processes, can
										follow the cumin that the product is
										doing. This allows, for example, the
										producer to know where his product is
										being sold.
									</p>
								</div>
							</div>
						</div>

						<div
							className="tiles-item reveal-from-bottom"
							data-reveal-delay="400"
						>
							<div className="tiles-item-inner">
								<div className="features-tiles-item-header">
									<div className="features-tiles-item-image mb-16">
										<Image
											src={require("./../../assets/images/feature-tile-icon-06.svg")}
											alt="Features tile icon 06"
											width={64}
											height={64}
										/>
									</div>
								</div>
								<div className="features-tiles-item-content">
									<h4 className="mt-0 mb-8">Traceability</h4>
									<p className="m-0 text-sm">
										All players, but mainly the final
										consumer, can know the entire path taken
										by the product, from its origin until it
										arrives in their hands.                                        
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

FeaturesTiles.propTypes = propTypes;
FeaturesTiles.defaultProps = defaultProps;

export default FeaturesTiles;
