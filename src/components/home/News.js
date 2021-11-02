import React, { useEffect } from "react";
import styles from "./news.module.css";
import getNews from "../../redux/actions/getNews";
import { connect } from "react-redux";

function News(props) {
  useEffect(() => {
    props.getNews();
  }, []);

  return (
    <div className={`${styles["news-container"]}`}>
      <div className={`${styles["news-wrap"]}`}>
        <ul>
          {props.news &&
            props.news.map((newNews) => {
              return (
                <li>
                  <img src="../hand.png" width="30px" />
                  <a>{newNews.title}</a>
                </li>
              );
            })}

          {/* <li>
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
          </li> */}
        </ul>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return { news: state.news };
};

export default connect(mapStateToProps, { getNews })(News);
