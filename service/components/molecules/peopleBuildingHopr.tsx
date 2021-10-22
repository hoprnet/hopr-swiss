import { NextPage } from 'next';
import { ALink } from '../atoms/a';
import { Images } from '../atoms/images';

interface PeopleBuildingHoprProps {
  data: Array<any>;
}

export const PeopleBuildingHopr: NextPage<PeopleBuildingHoprProps> = ({
  data,
}) => {
  return (
    <div className="people-building-hopr ">
      <ul>
        {data.map((x, i) => (
          <li key={i}>
            <ALink href={x.link} target="_blank">
              <Images src={x.image} />
            </ALink>
            <h4>{x.name}</h4>
            <p>{x.label}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};
