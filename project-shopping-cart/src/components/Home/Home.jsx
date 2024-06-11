/* eslint-disable react/no-unescaped-entities */
import styles from "./Home.module.css";

export default function Home() {
  return (
    <div className={styles.home}>
      <div className={styles.images}>
        <img
          width="40"
          height="40"
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
      </p>
      <p>
        Icons by <a href="https://www.icons8.com">Icons8</a>
      </p>
    </div>
  );
}
