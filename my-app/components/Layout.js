import Link from 'next/link';

export default function Layout(props) {
  return (
    <>
      <h1>Navigation</h1>
      <Link href="/">Main</Link> | <Link href="/about">About</Link> | <Link href="/home">Home</Link> | <Link href="/products">All Products</Link>
      <hr />
      <br />
      {props.children}
      <br />
    </>
  );
}