import React from 'react';
import Nabvar from "./Nabvar.jsx";
import {Carousel} from "react-bootstrap";


const HomeComponent = () => {
    return (
        <div>
        <section className="top-container">
            <div className="topText">
                <p>Asssignment</p>
            </div>
            <div className="topBtn">
                <button>Buy now</button>
            </div>
        </section>
        <Nabvar/>

     <div className="carousel">
         <Carousel data-bs-theme="dark">
             <Carousel.Item>
                 <img
                     className="d-block w-100 caro-image"
                     src="https://www.gizchina.com/wp-content/uploads/images/2023/01/iphone-15-pro-max-2.jpg"
                     alt="First slide"
                 />
                 <Carousel.Caption>
                     <h5>First slide label</h5>
                     <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                 </Carousel.Caption>
             </Carousel.Item>
             <Carousel.Item>
                 <img
                     className="d-block w-100 caro-image"
                     src="https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/page/category/laptop/category-page-mod-xps-13-9320-sl-right-800x620.png?fmt=png-alpha&wid=800&hei=620"
                     alt="Second slide"
                 />
                 <Carousel.Caption>
                     <h5>Second slide label</h5>
                     <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                 </Carousel.Caption>
             </Carousel.Item>
             <Carousel.Item>
                 <img
                     className="d-block w-100 caro-image"
                     src="https://5.imimg.com/data5/IS/JP/MY-58678879/computer-mouse.jpg"
                     alt="Third slide"
                 />
                 <Carousel.Caption>
                     <h5>Third slide label</h5>
                     <p>
                         Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                     </p>
                 </Carousel.Caption>
             </Carousel.Item>
         </Carousel>
            </div>

            <div className='my-5 product'>
                <div className="productShow">
                    <img className="w-50" src="data:image/jpeg;base64,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P0WdEKmDV8RiFyVai5ES4LJTuGOYjQFiF04BRfU2HO/RbQLbVwxG5etY+HVOv1ZZ9FyAiIgIiICIiAiIgIiICIiB+TS+l3RpnvXw63be9Me1+JR73McfHfukStqxaNStW01ncOHivwOhG8fpPYrzp+2ei2HxJzMpR/fSwY/mFrN5i/fNXr+jyqD2K6MPxqyn5EzmtitHh11zVnzw1xMRY3BmHFJ2usp6H2l/W3GX56BYsbnoHxeoP+3A6DYwcaXk7f8A4ley3wn1KfKjo4xWFnGh/en7vP19nBtUYW7/APIlw3QbGXuOr7+3ofIiSsJ0LxV+11Sjnnc/ICW7LT7I9SseJa2uym4sB4XM2zo50UDAO4Koefrv3fhXv/8AM2HZfRinSsznrGHMWUfy638yZsE1piiOZY5M0zxDXumWDB2biqaKAFouUVRp2FzKoA71E+dQ8+qKtMMpU6hgQfAixnzVjujGLoOyNhq5CErnFKoUYKbBg6qVINr7+M2YKzNPLNPdbDOnroy/mUj6iRGqr7y/ESRkZp4Jn4gzer2vy6/STKOx8S/qYeu/5KNVvosDePQphc2Nq1eFOiR/NUdbfKm07lOdeiDo/UwtCrUrU2p1KrqArghurpg5SVOqks9TQ62tOiyAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAn5afsQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERA//9k="/>
                    <p>Smart Watch Four Hand</p>
                    <p>From $50</p>
                    <button className="btn btn-success"><img className="arrow"  src="https://images.rawpixel.com/image_png_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvdjEwMzAtMTI5LnBuZw.png"/> </button>
                </div>
                <div className="productShow">
                    <div className="productShow-child">

                        <div className="productSecondChild">
                            <img className="w-50" src="data:image/jpeg;base64,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"/>
                        </div>
                        <div className="productSecondChild">
                          <p>Smart Watch Four Hand</p>
                          <p>From $50</p>
                            <button className="btn btn-success"><img className="arrow"  src="https://images.rawpixel.com/image_png_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvdjEwMzAtMTI5LnBuZw.png"/> </button>
                        </div>

                    </div>
                    <div className="productShow-child">
                        <div className="productSecondChild">
                            <img className="w-50" src="https://media.e-valy.com/cms/products/images/16d1a6b6-4642-49ef-a1e2-7226595b3417"/>
                        </div>
                        <div className="productSecondChild">
                            <p>Smart Watch Four Hand</p>
                            <p>From $50</p>
                        <button className="btn btn-success"><img className="arrow" src="https://images.rawpixel.com/image_png_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvdjEwMzAtMTI5LnBuZw.png"/> </button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="contain">
                <div className="ratingChild">
                    <div className="mx-5"> <button className="btn btn-success">New Arrivals</button>
                    </div>
                    <div className="mx-5"> <button className="btn btn-primary">Top Rated</button>
                    </div>
                    <div className="mx-5"> <button className="btn btn-secondary">Featured</button>
                    </div>
                </div>
            </div>


            <section>
                        <div className="col-4">
                            <div className="productList">
                                <div className="card-body">
                                    <img className="h-25" src="https://rukminim2.flixcart.com/image/850/1000/l5ld8y80/smartwatch/f/k/q/-original-imagg8d9hbkhfffg.jpeg?q=90"/>

                                </div>
                                <div className="card-footer">
                                     <h4>Modern Smart Watch</h4>
                                </div>
                            </div>

                            <div className="productList">
                                <div className="card-body">
                                    <img  src="https://rukminim2.flixcart.com/image/850/1000/l5ld8y80/smartwatch/f/k/q/-original-imagg8d9hbkhfffg.jpeg?q=90"/>

                                </div>
                                <div className="card-footer">
                                    <h4>Modern Smart Watch</h4>
                                </div>
                            </div>


                            <div className="productList">
                                <div className="card-body">
                                    <img src="https://rukminim2.flixcart.com/image/850/1000/l5ld8y80/smartwatch/f/k/q/-original-imagg8d9hbkhfffg.jpeg?q=90"/>

                                </div>
                                <div className="card-footer">
                                    <h4>Modern Smart Watch</h4>
                                </div>
                            </div>
                        </div>

            </section>
        </div>
    );
};

export default HomeComponent;