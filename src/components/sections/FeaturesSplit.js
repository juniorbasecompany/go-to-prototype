import React from "react";
import classNames from "classnames";
import { SectionSplitProps } from "../../utils/SectionProps";
import SectionHeader from "./partials/SectionHeader";
import Image from "../elements/Image";

const propTypes = {
	...SectionSplitProps.types,
};

const defaultProps = {
	...SectionSplitProps.defaults,
};

const FeaturesSplit = ({
	className,
	topOuterDivider,
	bottomOuterDivider,
	topDivider,
	bottomDivider,
	hasBgColor,
	invertColor,
	invertMobile,
	invertDesktop,
	alignTop,
	imageFill,
	...props
}) => {
	const outerClasses = classNames(
		"features-split section",
		topOuterDivider && "has-top-divider",
		bottomOuterDivider && "has-bottom-divider",
		hasBgColor && "has-bg-color",
		invertColor && "invert-color",
		className
	);

	const innerClasses = classNames(
		"features-split-inner section-inner",
		topDivider && "has-top-divider",
		bottomDivider && "has-bottom-divider"
	);

	const splitClasses = classNames(
		"split-wrap",
		invertMobile && "invert-mobile",
		invertDesktop && "invert-desktop",
		alignTop && "align-top"
	);

	const sectionHeader = {
		title: "Project keys",
		paragraph:
			"There is a small group of concepts that are fundamental to the functioning of the environment.",
	};

	return (
		<section {...props} className={outerClasses}>
			<div className="container">
				<div className={innerClasses}>
					<SectionHeader
						data={sectionHeader}
						className="center-content"
					/>
					<div className={splitClasses}>
						<div className="split-item">
							<div
								className="split-item-content center-content-mobile reveal-from-left"
								data-reveal-container=".split-item"
							>
								<div className="text-xxs text-color-primary fw-600 tt-u mb-8">
									Product Identification
								</div>
								<h3 className="mt-0 mb-12">ID</h3>
								<p className="m-0">
									Os produtos são identificados na origem.
									Esta identificação dá origem a uma chave que
									armazenada de forma segura e imutável na
									blockchain e pode ser visualizada como um
									QRCode.
								</p>
							</div>
							<div
								className={classNames(
									"split-item-image center-content-mobile reveal-from-bottom",
									imageFill && "split-item-image-fill"
								)}
								data-reveal-container=".split-item"
							>
								<Image
									src={require("./../../assets/images/features-split-image-01.png")}
									alt="Features split 01"
									width={528}
									height={396}
								/>
							</div>
						</div>

						<div className="split-item">
							<div
								className="split-item-content center-content-mobile reveal-from-right"
								data-reveal-container=".split-item"
							>
								<div className="text-xxs text-color-primary fw-600 tt-u mb-8">
									Easy access
								</div>
								<h3 className="mt-0 mb-12">QRCode</h3>
								<p className="m-0">
									Just read the QRCode and you have the entire
									history of the product, from its origin to
									the moment it is in your hands.
								</p>
							</div>
							<div
								className={classNames(
									"split-item-image center-content-mobile reveal-from-bottom",
									imageFill && "split-item-image-fill"
								)}
								data-reveal-container=".split-item"
							>
								<Image
									src={require("./../../assets/images/features-split-image-02.png")}
									alt="Features split 02"
									width={528}
									height={396}
								/>
							</div>
						</div>

						<div className="split-item">
							<div
								className="split-item-content center-content-mobile reveal-from-left"
								data-reveal-container=".split-item"
							>
								<div className="text-xxs text-color-primary fw-600 tt-u mb-8">
									Easy integration
								</div>
								<h3 className="mt-0 mb-12">XML</h3>
								<p className="m-0">
									With the product ID, any person or company
									can look up the story of this product. This
									story is told through an XML file, along
									with its structure in an XSD file.
								</p>
							</div>
							<div
								className={classNames(
									"split-item-image center-content-mobile reveal-from-bottom",
									imageFill && "split-item-image-fill"
								)}
								data-reveal-container=".split-item"
							>
								<Image
									src={require("./../../assets/images/features-split-image-03.png")}
									alt="Features split 03"
									width={528}
									height={396}
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

FeaturesSplit.propTypes = propTypes;
FeaturesSplit.defaultProps = defaultProps;

export default FeaturesSplit;
