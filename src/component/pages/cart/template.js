import React, { useRef } from 'react'
import httpConfig from '../../../utils/http-config';
import { getServerImagesDirUrl } from '../../../utils/server-addr';
import '../../../../node_modules/bootstrap/dist/css/bootstrap.css'
import '../../../App.css'

function ProductCartBlock(cartProduct, productInfo) {
    console.log(cartProduct, productInfo);
    let imgPath = getServerImagesDirUrl() + productInfo.images[0].productImageName;

    return <div key={productInfo.id} className="flex-center-column col-lg-3 col-md-4 col-sm-6">
                <div className="product-card mb-2 washed-up-blue scale">
                    <div className="flex-center-column px-3" style={{ width: 275 + "px", height: 200 + "px" }}>
                        <div className="flex-center-row m-2" style={{flexGrow: 1}}>
                            <img src={imgPath} className="d-block border me-3" style={{ width: 75 + "px" }} />

                            <div className="flex-center-column green-text">
                                <span className="App bold-text nobr">{productInfo.productName}</span>
                                <span className="App nobr">{productInfo.description}</span>
                                <span className="App nobr">Price: {productInfo.price} $</span>
                            </div>
                        </div>

                        <button id={"product-" + productInfo.id + "-add-button"} onClick="" className="btn-add-to-cart mb-2" style={{alignSelf: "flex-end"}}>
                            <span className="font-20 font-bold">Add to cart</span>
                        </button>
                    </div>
                </div>
            </div>;
};

export default ProductCartBlock;