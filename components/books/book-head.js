import Head from "../head";

/**
 * Just a simple wrapper around <Head /> to massage some params for books
 *
 * @param {object} props - shape of { slug, book }
 */
const BookHead = props => (
  <Head
    slug={`books/${props.slug}`}
    title={`${props.book.title} - Review`}
    img={props.book.metaImg || props.book.img}
    description={props.book.description}
  />
);

export default BookHead;
