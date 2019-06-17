// Getting the data from a Content Relationship document in Prismic is a bit tedious.
// It involves a lot of nesting, and is a pattern we repeat a lot.
// This helper should enable us to more easily get the data we actually want, from a Content Relationship field.

/**
* Content Relationship Resolver
* Asserts the users device
* @param {object} result
* @param {string} schema
* @param {string} alias
*/

export default function relResolver(result, schema, alias) {
  // Prismic Content Relationships usually follow this pattern, when queried with graphql
  // data (the query result) -> schema (generated from the Prismic Type, e.g. PrismicGlobal)
  // -> data (the data of the schema) -> fieldname (the field alias that refers to a Content Relationship input in Prismic)
  // -> document (the referenced document - is an array :S) -> data (the actual data we want).
  // That's 6 levels of nesting, before we get to the stuff we actually want. This helper makes that easy.
  // First, let's get the schema from our result

  if(!result[schema]) { // If no schema with that name is present
    throw new Error(`The object property '${schema}' is not available on result.`)
  }

  // If no alias is defined, we assume that we are inside a loop of an array of content relationship references.
  // As such, we fall back to using 'document' as the alias.
  if (!alias) {
    return result[schema].document[0].data
  }

  const scheme = result[schema].data;

  if (!scheme[alias]) { // If no schema with that name is present
    throw new Error(`The object property '${alias}' is not available on schema '${schema}'.`)
  }

  // Array deconstructuring enables us to retrieve the first item of the array
  const [document] = scheme[alias].document;

  return document.data;
};
