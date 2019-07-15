/**
 * Viewport tester
 * @param {String} viewport
 * @param {Array} match
 */

export function isViewport(viewport, match) {
  return match.find(x => x === viewport);
}
