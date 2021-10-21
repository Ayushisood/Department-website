import React from "react";
import styles from "./news.module.css";

function News() {
  return (
    <div className={`${styles["news-container"]}`}>
      <div className={`${styles["news-wrap"]}`}>
        <ul>
          <li>
            <img src="../hand.png" width="30px" />
            <a>first link</a>
          </li>
          <li>
            <img src="../hand.png" width="30px" />
            <a>second link</a>
          </li>
          <li>
            <img src="../hand.png" width="30px" />
            <a>third link</a>
          </li>
          <li>
            <img src="../hand.png" width="30px" />
            <a>fourth link</a>
          </li>
          <li>
            <img src="../hand.png" width="30px" />
            <a>fifth link</a>
          </li>
          <li>
            <img src="../hand.png" width="30px" />
            <a>sixth link</a>
          </li>
          <li>
            <img src="../hand.png" width="30px" />
            <a>seventh link</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default News;

/*<div id=slideset1>
<div>
<h1>This is slide 1</h1>
<p>Slide 1
<p>It has a <a href="./">link.</a>
</div>
<div>
<h1>This is the second slide</h1>
<p>Second slide
</div>
<div>
<h1>This is slide number 3</h1>
<p>Slide number 3
</div>
</div>*/
