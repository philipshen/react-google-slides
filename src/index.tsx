/**
 * @class ReactGoogleSlides
 */

import * as React from "react";

export type Props = {
  start: 'boolean',
  slidesLink: string;
  showControls: boolean;
  height: string | number;
  width: string | number;
  containerStyle: object | null;
};

/**
 * Generates iframe compatible url to display the presentation
 * @param presentationKey The Google Slides presentation key
 * @param showControls Boolean for whether to display the Google Slides controls
 */
const constructUrl = (
  presentationKey: string | null,
  start: boolean,
  showControls: boolean
): string => {
  if (!presentationKey) {
    return ``;
  }

  let baseUrl = "https://docs.google.com/presentation/d/";
  baseUrl += `${presentationKey}/embed?`;
  baseUrl += `start=${start}`;

  if (!showControls) {
    baseUrl += `&rm=minimal`;
  }

  return baseUrl;
};

// Regex for extracting presentation id
const regex: RegExp = new RegExp(
  `(((https|http):\/\/|)docs\.google\.com\/presentation\/d\/)(.+?(?=(\/.+|\/|$)))`
);

// Extracts the slide id from the share-able url
const extractSlidesKey = (slidesUrl: string): string | null => {
  const match = regex.exec(slidesUrl);
  return match ? match[4] : null;
};

// Calculates dimension for string/numbers
const calcDimension = (dim: string | null | number): string =>
  dim ? (typeof dim === "number" ? `${dim}px` : dim) : `480px`;

export default class ReactGoogleSlides extends React.Component<Props> {
  public static defaultProps = {
    width: `640px`,
    height: `480px`,
    start: false,
    slidesLink: `https://docs.google.com/presentation/d/1OHEMQ0W-3iXvbxS0g86oMHlhVgKaYP7d3-CUhSHdCjs/edit?usp=sharing`,
    loop: false,
    showControls: false
  };

  render() {
    const {
      start,
      slidesLink,
      showControls,
      width,
      height,
      containerStyle
    } = this.props;
    const presentationKey = extractSlidesKey(slidesLink);
    const url = constructUrl(
      presentationKey,
      start,
      showControls
    );

    return (
      <iframe
        src={url}
        width={calcDimension(width)}
        height={calcDimension(height)}
        style={containerStyle ? containerStyle : { border: 0 }}
        allowFullScreen={true}
      />
    );
  }
}
