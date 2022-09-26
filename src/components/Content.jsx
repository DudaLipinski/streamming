import { useState, useEffect } from "react";
import * as Styled from "./Content.styles";
import Carousel from "./Carousel";
import { getMostPopularMovies, getMostPopularTvSeries } from "../services";

import emptyStar from "../assets/emptyStar.png";
import starImage from "../assets/star.png";
import heart from "../assets/heart.png";
import { useParams } from "react-router-dom";

const Content = () => {
  const { type = "movies" } = useParams();

  const [items, setItems] = useState();
  const [highlightedItemIndex, setHighlightedItemIndex] = useState();

  const loadMostPopularItems = async () => {
    const getMostPopularItems =
      type === "movies" ? getMostPopularMovies : getMostPopularTvSeries;
    const res = await getMostPopularItems();

    setItems(res);
    setHighlightedItemIndex(0);
  };

  useEffect(() => {
    loadMostPopularItems();
  }, [type]);

  if (highlightedItemIndex === undefined) {
    return <Styled.Title>Loading...</Styled.Title>;
  }

  const highlightedItem = items[highlightedItemIndex];
  const { title, year } = highlightedItem.title;
  const img = highlightedItem.title.image.url;
  const description = highlightedItem.plotOutline.text;
  const rating = highlightedItem.ratings.rating;

  const highlightItem = (index) => {
    setHighlightedItemIndex(index);
  };

  const handleWatchNow = () => {
    const params = new URLSearchParams({ q: `watch ${title} ${type} ${year}` });
    const googleUrl = `https://www.google.com/search?${params.toString()}`;
    window.open(googleUrl, "__blank");
  };

  const handleTrailer = () => {
    const params = new URLSearchParams({
      search_query: `trailer ${title} ${type} ${year}`,
    });
    const youtubeUrl = `https://www.youtube.com/results?${params.toString()}`;
    window.open(youtubeUrl, "__blank");
  };

  return (
    <Styled.Container img={img}>
      <Styled.Blur>
        <Styled.Centralizer>
          <Styled.Wrapper>
            <Styled.Title>{title}</Styled.Title>
            <Styled.SubTitle></Styled.SubTitle>
            <Styled.Description>{description}</Styled.Description>
            <Styled.Rating>
              {rating ? (
                <>
                  <Styled.Star src={starImage}></Styled.Star>
                  <Styled.Star
                    src={rating > 2 ? starImage : emptyStar}
                  ></Styled.Star>
                  <Styled.Star
                    src={rating > 4 ? starImage : emptyStar}
                  ></Styled.Star>
                  <Styled.Star
                    src={rating > 6 ? starImage : emptyStar}
                  ></Styled.Star>
                  <Styled.Star
                    src={rating > 8 ? starImage : emptyStar}
                  ></Styled.Star>
                </>
              ) : null}
            </Styled.Rating>
            <Styled.WrapperButtons>
              <Styled.Watch onClick={handleWatchNow}>Watch Now</Styled.Watch>
              <Styled.Trailer onClick={handleTrailer}>Trailler</Styled.Trailer>
              {/* <Styled.Heart src={heart} alt="" /> */}
            </Styled.WrapperButtons>
          </Styled.Wrapper>
        </Styled.Centralizer>
        <Carousel
          items={items}
          highlightedItemIndex={highlightedItemIndex}
          onItemClick={highlightItem}
        />
      </Styled.Blur>
    </Styled.Container>
  );
};

export default Content;
