export function docToMovie(doc) {
  return {
    ...doc.data(),
    id: doc.id
  };
}
