// Placeholder control protocol type module.
//
// The leaked tree references committed SDK control types here, but only
// type-only imports depend on them in the current runtime path. We keep a
// minimal module so runtime re-exports can resolve without rewriting core code.
export {}
