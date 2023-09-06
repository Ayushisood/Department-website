import React, { useEffect } from "react";
import styles from "./news.module.css";
import getNews from "../../redux/actions/getNews";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

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
                  <img src="../hand.png" width="30px" alt="hand" />
                  <Link to={`/news/${newNews._id}`}>{newNews.title}</Link>
                </li>
              );
            })}
        </ul>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return { news: state.news };
};

export default connect(mapStateToProps, { getNews })(News);
