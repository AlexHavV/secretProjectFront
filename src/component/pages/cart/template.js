import React, { useRef } from 'react'
import httpConfig from '../../../utils/http-config';
import { getServerImagesDirUrl } from '../../../utils/server-addr';
import '../../../../node_modules/bootstrap/dist/css/bootstrap.css';
import '../../../App.css';

function ProductCartBlock(cartProduct, onButtonClick) {
    console.log(cartProduct);
    let imgPath = getServerImagesDirUrl() + cartProduct.images[0].productImageName;

    return <div key={cartProduct.id} className="flex-center-column col-lg-6 col-md-8 col-sm-10">
                <div className="product-card mb-2 washed-up-blue scale">
                    <div className="flex-center-column px-3" style={{ width: 475 + "px", height: 300 + "px" }}>
                        <div className="flex-center-row m-2" style={{flexGrow: 1}}>
                            <div style={{width: 200 + "px", height: 200 + "px"}}>
                                <img src={imgPath} className="d-block border me-3" style={{ maxWidth: 200 + "px", maxHeight: 200 + "px" }} />
                            </div>   
                            <div className="flex-center-column green-text"  style={{width: 200 + "px", height: 200 + "px"}}>
                                <span className="App bold-text nobr">{cartProduct.productName}</span>
                                <span className="App nobr">{cartProduct.description}</span>
                                <span className="App nobr">Total Price:<br /> {cartProduct.price} $ x {cartProduct.amount} = {cartProduct.price * cartProduct.amount} $</span>
                            </div>
                        </div>

                        <button id={"product-" + cartProduct.id + "-add-button"} onClick={() => onButtonClick(cartProduct.id)} className="btn-add-to-cart mb-2" style={{alignSelf: "flex-end"}}>
                            <span className="font-20 font-bold">Remove from cart</span>
                        </button>
                    </div>
                </div>
            </div>;
};

export default ProductCartBlock;