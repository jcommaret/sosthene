
import Videos from "../Videos";
import '../../styles/App.scss';

import { ContentDataType } from '../../types';
import contentData from '../../assets/data/content.json';

function Home() {
  const content: ContentDataType = contentData || {
  };

  return (
    <main>
      <Videos />
      <div className="bio">
          <p>{content.description}</p>
      </div>
    </main>
  );
}

export default Home;
