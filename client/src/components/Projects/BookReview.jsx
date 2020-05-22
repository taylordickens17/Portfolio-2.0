import React, { useState } from 'react';
import {
    Container, Row, Col, Carousel,
    CarouselItem,
    CarouselControl,
    CarouselIndicators,
    CarouselCaption
} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLongArrowAltRight } from '@fortawesome/free-solid-svg-icons';

const items = [
    {
        src: require('../../css/assets/book1.png'),
        altText: 'The Book Review Login Page'
    },
    {
        src: require('../../css/assets/book2.png'),
        altText: 'Slide 2'
    },
    {
        src: require('../../css/assets/book3.png'),
        altText: 'Slide 3'
    }
];

const BookReview = () => {

    const [activeIndex, setActiveIndex] = useState(0);
    const [animating, setAnimating] = useState(false);

    const next = () => {
        if (animating) return;
        const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
        setActiveIndex(nextIndex);
    }

    const previous = () => {
        if (animating) return;
        const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
        setActiveIndex(nextIndex);
    }

    const goToIndex = (newIndex) => {
        if (animating) return;
        setActiveIndex(newIndex);
    }


    const slides = items.map((item) => {
        return (
            <CarouselItem
                onExiting={() => setAnimating(true)}
                onExited={() => setAnimating(false)}
                key={item.src}
            >
                <img src={item.src} alt={item.altText} height={'250px'} />
                <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
            </CarouselItem>
        );
    });

    return (
        <Container className="bookreview-page">
            <Row className="project-row">
                <Col md="10">
                    <h1 className="book-title">The Book Review App</h1>
                    <p>Oat cake powder candy canes sweet roll gingerbread toffee soufflé. Jelly beans donut muffin sweet roll tiramisu. Chocolate bar gummi bears tootsie roll jelly gingerbread. Gummies powder marshmallow oat cake. Gingerbread chocolate cake sweet marzipan lollipop tart danish. Liquorice danish cupcake jelly beans cotton candy wafer jujubes. Biscuit pie chocolate sweet roll apple pie. Chocolate bar cheesecake candy icing. Candy lollipop bonbon cupcake gummi bears apple pie dessert. Pastry gingerbread jujubes croissant wafer. Donut carrot cake marzipan oat cake carrot cake donut oat cake. Chocolate gummi bears croissant marzipan lemon drops chocolate. Sugar plum gummies sweet tiramisu carrot cake pastry cotton candy.</p>
                    <a href="https://td-client-zebookreviewapp2020.herokuapp.com/" className="see-live-bttn">See Live<FontAwesomeIcon className="arrow" icon={faLongArrowAltRight} size='1x' /></a>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Carousel
                        activeIndex={activeIndex}
                        next={next}
                        previous={previous}
                        className="carousel"
                    >
                        <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
                        {slides}
                        <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
                        <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
                    </Carousel>
                </Col>
            </Row>
        </Container>
    )
}

export default BookReview;