import Slider from "./Components/Slider";

const pictures = [
  "https://t3.ftcdn.net/jpg/06/29/79/34/360_F_629793470_KZMbjEK1r18Esu5dm9E54i9o4BzSs6gv.jpg",
  "https://media.istockphoto.com/id/485371557/photo/twilight-at-spirit-island.jpg?s=612x612&w=0&k=20&c=FSGliJ4EKFP70Yjpzso0HfRR4WwflC6GKfl4F3Hj7fk=",
  "https://t3.ftcdn.net/jpg/06/34/75/10/360_F_634751035_hrK5GMVhfgjs3BQwLyLvofYpAr8wBopZ.jpg",
  "https://static1.thetravelimages.com/wordpress/wp-content/uploads/2023/05/resized-image-promo-97.jpeg",
  "https://previews.123rf.com/images/sirfujiyama/sirfujiyama2001/sirfujiyama200100214/137107138-oshino-hakkai-japan-lake-village-fuji-mt-blue-scenery-water-japanese-travel-yamanakako-kawaguchiko.jpg",
];

function App() {
  return <Slider pictures={pictures} isLoop={true} />;
}

export default App;
