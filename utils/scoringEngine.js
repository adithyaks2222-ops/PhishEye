export function applyPenalty(score, points) {
  return Math.max(score - points, 0);
}