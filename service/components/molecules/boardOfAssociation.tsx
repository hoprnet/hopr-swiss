import { NextPage } from 'next';
import { ALink } from '../atoms/a';
import { Images } from '../atoms/images';

interface BoardOfAssociationProps {
  data: Array<any>;
}

export const BoardOfAssociation: NextPage<BoardOfAssociationProps> = ({
  data,
}) => {
  return (
    <div className="board-of-association">
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
