import model3Img from '../src/assets/images/asset 17.jpeg'
import modelYImg from '../src/assets/images/asset 18.jpeg'
import modelXImg from '../src/assets/images/asset 19.jpeg'
import modelSImg from '../src/assets/images/asset 20.jpeg'
import solarPanelImg from '../src/assets/images/asset 22.jpeg'
import solarRoofImg from '../src/assets/images/asset 23.jpeg'
import powerwallImg from '../src/assets/images/asset 24.jpeg'
import Product from './components/Product'
import Accessories from './components/Accessories'
import Appbar from './components/Appbar'
import Footer from './components/Footer'

function App() {
  const productDetails = [
    {
      model : "Model 3",
      desc : "1.99% APR Financing Ending August 31",
      price :  34990,
      img : model3Img
    },
    {
      model : "Model Y",
      desc : "1.99% APR Financing Ending August 31",
      price :  31490,
      img : modelYImg
    },
    {
      model : "Model X",
      desc : "After Federal Tax Credit $7,500 and Est. Gas Savings $6,500",
      price :  65990,
      img : modelXImg
    },
    {
      model : "Model S",
      desc : "After Est. Gas Savings $6,500",
      price :  68490,
      img : modelSImg
    },
    {
      model : "Solar Panels",
      desc : "Schedule a Virtual Consultation",
      img : solarPanelImg
    },
    {
      model : "Solar Roof",
      desc : "Produce Clean Energy From Your Roof",
      img : solarRoofImg
    },
    {
      model : "Powerwall",
      img : powerwallImg
    }
  ]
  return (
    <>
      <div>
        <Appbar />
        {productDetails.map((product) => <Product key={product.id} product={product} />)}
        <Accessories />
        <Footer />
      </div>
    </>
  )
}

export default App
