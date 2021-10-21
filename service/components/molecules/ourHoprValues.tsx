import { NextPage } from "next";
import { OurHoprValue } from "../../constants";
import { Images } from "../atoms/images";

interface OurHoprValuesProps {}

export const OurHoprValues: NextPage<OurHoprValuesProps> = ({}) => {
  return (
    <div className="element-hopr-values">
      {OurHoprValue.map((x, i) => (
        <div
          key={i}
          className="element-hopr-item"
        >
          <Images src={x.img} alt={x.title} />
          <div>
            <h4>{x.title}</h4>
            <p>{x.text}</p>
          </div>
        </div>
      ))}
    </div>
  );
};
