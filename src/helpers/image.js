function extractImage(url, dimensions) {
  const { width, height } = dimensions;
  return {
    src: url,
    width,
    height,
  };
}

export function gatsbyImgTransformer(image) {
  if (!image) return undefined;

  const {
    url, // main
    dimensions, // dimensions of main
    huge,
    large,
    mobile,
    square,
    square_large: squareLarge,
    square_small: squareSmall,
    x2,
    x3,
  } = image;
  const img = {};
  const srcSet = [];
  if (url && dimensions) {
    img.main = huge && huge.url !== null ? extractImage(huge.url, huge.dimensions) : extractImage(url, dimensions);
    img.main.aspectRatio = img.main.width / img.main.height;
    if (huge) {
      srcSet.unshift(`${extractImage(huge.url, huge.dimensions).src} 1024w`);
    } else {
      srcSet.unshift(`${img.main.src} 1400w`);
    }
    if (large) srcSet.unshift(`${extractImage(large.url, large.dimensions).src} 1024w`);
    if (mobile) srcSet.unshift(`${extractImage(mobile.url, mobile.dimensions).src} 600w`);
    if (x3) srcSet.unshift(`${extractImage(x3.url, x3.dimensions).src} 1400w`);
    if (x2) srcSet.unshift(`${extractImage(x2.url, x2.dimensions).src} 1024w`);
    if (x2 && x3) srcSet.unshift(`${url} 600w`);
    img.main.srcSet = srcSet.join(',');
    return img;
  }

  if (square) img.square = extractImage(square.url, square.dimensions);
  if (squareLarge) img.square_large = extractImage(squareLarge.url, squareLarge.dimensions);
  if (squareSmall) img.square_small = extractImage(squareSmall.url, squareSmall.dimensions);
  if (img.square && img.square_large && img.square_small) {
    img.square.srcSet = `${img.square_small.src} 600w, ${img.square_large.src} 1024w, ${img.square.src} 1400w,`;
    img.square.aspectRatio = 1;
  }
  return img;
}