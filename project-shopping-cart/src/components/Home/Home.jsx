/* eslint-disable react/no-unescaped-entities */

export default function Home() {
  return (
    <div className="home">
      <div className="images">
        <img
          className="img1"
          width="60"
          height="60"
          opacity="0.3"
          src="https://img.icons8.com/ios-glyphs/30/shop.png"
          alt="Shop Logo"
        />

        <img
          width="100"
          height="100"
          src="https://www.theodinproject.com/mstile-310x310.png"
          alt="The Odin Project Logo"
        />
      </div>

      <h1>TOP Shop </h1>
      <span>by Alex N.</span>
      <p>
        This mock shop project was made during{" "}
        <a href="https://www.theodinproject.com">
          The Odin Project's React Course.
        </a>
        Try using the nav bar at the top of your screen to navigate to The Shop
        page, fill your cart with some items, and then navigate to checkout by
        clicking on the cart!
      </p>
      <p>
        Icons by <a href="https://www.icons8.com">Icons8</a> <br />
        Shop items retrieved from{" "}
        <a href="https://fakestoreapi.com">FakeStoreAPI</a>
      </p>
    </div>
  );
}
