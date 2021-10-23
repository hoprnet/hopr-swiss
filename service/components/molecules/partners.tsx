import { NextPage } from 'next';
import { aPartners } from '../../constants/home';
import { ALink } from '../atoms/a';
import { Images } from '../atoms/images';

interface PartenersProps {}

export const Partners: NextPage<PartenersProps> = ({}) => {
  return (
    <div className="partners">
      <ul>
        {aPartners.map((x, i) => (
          <li key={i}>
            <ALink href={x.url} target="_blank">
              <Images src={x.image} width={140} height={200}/>
            </ALink>
          </li>
        ))}
      </ul>
    </div>
  );
};
