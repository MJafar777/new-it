import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProductList from "../containers/ProductList/ProductList";
import ProductDetails from "../containers/ProductDetails/ProductDetails";
import NotFound from "../containers/NotFound/NotFound";
import ProductLocation from "../containers/ProductBuy/ProductLocation/ProductLocation";
import ProductOrder from "../containers/ProductBuy/ProductOrder/ProductOrder";
import ProductPay from "../containers/ProductBuy/ProductPay/ProductPay";

const Routess = () => {
  return (
    <div >
      <Router>
        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path="product/:productId" element={<ProductDetails />} />
          <Route
            path="product/:productId/productLoaction"
            element={<ProductLocation />}
          />
          <Route
            path="product/:productId/productLoaction/productOrder"
            element={<ProductOrder />}
          />
          <Route
            path="product/:productId/productLoaction/productOrder/productPay"
            element={<ProductPay />}
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  );
};

export default Routess;
