/**
 * remove reset.d.ts then you will get TS error here
 */
const withOutTS_reset = ['matt', 'sofia', 'waqas'] as const

// Argument of type '"bryan"' is not assignable to
// parameter of type '"matt" | "sofia" | "waqas"'.
withOutTS_reset.includes('bryan')


/**
 * After adding reset.d.ts file at the root
 */

const withTS_reset = ['matt', 'sofia', 'waqas'] as const

// .includes now takes a string as the first parameter
withTS_reset.includes('bryan')
