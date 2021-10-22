import { NextPage } from 'next';
import { OurHoprValue } from '../../constants/home';
import { Images } from '../atoms/images';
import { PElement } from '../atoms/p';

interface OurHoprValuesProps {}

export const OurHoprValues: NextPage<OurHoprValuesProps> = ({}) => {
  return (
    <div className="hopr-values">
      <ul>
        {OurHoprValue.map((x, i) => (
          <li key={i}>
            <Images src={x.img} alt={x.title} width={100} heigh={250}/>
            <h4>{x.title}</h4>
            <PElement>{x.text}</PElement>
          </li>
        ))}
      </ul>
    </div>
  );
};
