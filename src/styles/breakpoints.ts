import facepaint from 'facepaint';

const breakPoints = [1344, 1200, 944, 704, 544];

export const media = facepaint(breakPoints.map(breakPoint => `@media(max-width: ${breakPoint}px)`));

