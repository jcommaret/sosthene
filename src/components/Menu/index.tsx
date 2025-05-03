import { Link as RouterLink } from 'react-router-dom';

import { ContentDataType, Link } from "../../types";

import contentData from '../../assets/data/content.json';


function Menu() {
  const content: ContentDataType = contentData;
  
  return (
    <nav>
      <ul>
        {content?.links?.map((link: Link, index: number) => (
          <li key={index}>
            {link?.url?.startsWith('#') ? (
              <RouterLink to={link.url}>{link.name}</RouterLink>
            ) : (
              <a href={link.url} target="_blank" rel="noopener noreferrer">{link.name}</a>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Menu;
