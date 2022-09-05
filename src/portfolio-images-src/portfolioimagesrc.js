function importAll(r) {
    let images = [];
    r.keys().map((item, index) => { images.push(r(item)); });
    return images;
}
  
const images = importAll(require.context('../images/portfolio-images/portrait', false, /\.(png|jpe?g|svg)$/));

const portfolioImages = [
    {
        portrait:{
            img1:`${images[1]}`
        }
    }
]


export default portfolioImages