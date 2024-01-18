import Card from "../../Base/Card/Card";
import cardItem1 from "../../../assets/Card/Rectangle 314.svg";
import cardItem2 from "../../../assets/Card/Rectangle 315.svg";
import cardItem3 from "../../../assets/Card/Rectangle 316.svg";
import cardItem4 from "../../../assets/Card/Rectangle 317.svg";
import cardItem5 from "../../../assets/Card/Rectangle 318.svg";
import cardItem6 from "../../../assets/Card/Rectangle 319.svg";
const Cardlist = () => {
  const PopulerCard = [
    {
      src: "../../../assets/Card/Rectangle 314.svg",
      title: "Chikken Kare",
      alt: "Chikken Kare",
    },
    {
      src: "../../../assets/Card/Rectangle 315.svg",
      title: "Bomb Chicken",
      alt: "Bomb Chicken",
    },
    {
      src: "../../../assets/Card/Rectangle 316.svg",
      title: "Banana Smothie Pop",
      alt: "Banana Smothie Pop",
    },
    {
      src: "../../../assets/Card/Rectangle 317.svg",
      title: "Coffe Lava Cake",
      alt: "Coffe Lava Cake",
    },
    {
      src: "../../../assets/Card/Rectangle 318.svg",
      title: "Sugar Salmon",
      alt: "Sugar Salmon",
    },
    {
      src: "../../../assets/Card/Rectangle 319.svg",
      title: "Indian Salmon",
      alt: "Indian Salmon",
    },
  ];
  //   const src = PopulerCard.map((obj) => {
  //     return obj.src;
  //   });
  const titles = PopulerCard.map((obj) => {
    return obj.title;
  });
  const alt = PopulerCard.map((obj) => {
    return obj.alt;
  });

  console.log(titles);
  return (
    <div className="row row-cols-xs-1 row-cols-sm-1 row-cols-md-2 row-cols-lg-3 row-col-xxl-3 ">
      <div className="col">
        <Card className="card-img" center="text-start" overlay="card-img-overlay" title={`${titles[0]}`} src={cardItem1} alt={`${alt[0]}`}></Card>
      </div>
      <div className="col">
        <Card className="card-img" center="text-start" overlay="card-img-overlay" title={`${titles[1]}`} src={cardItem2} alt={`${alt[1]}`}></Card>
      </div>
      <div className="col">
        <Card className="card-img" center="text-start" overlay="card-img-overlay" title={`${titles[2]}`} src={cardItem3} alt={`${alt[2]}`}></Card>
      </div>
      <div className="col">
        <Card className="card-img" center="text-start" overlay="card-img-overlay" title={`${titles[3]}`} src={cardItem4} alt={`${alt[3]}`}></Card>
      </div>
      <div className="col">
        <Card className="card-img" center="text-start" overlay="card-img-overlay" title={`${titles[4]}`} src={cardItem5} alt={`${alt[4]}`}></Card>
      </div>
      <div className="col">
        <Card className="card-img" center="text-start" overlay="card-img-overlay" title={`${titles[5]}`} src={cardItem6} alt={`${alt[5]}`}></Card>
      </div>
    </div>
  );
};

export default Cardlist;
