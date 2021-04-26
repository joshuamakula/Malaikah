import React from 'react';
import { Arrow90degUp } from 'react-bootstrap-icons';
import ScrollToTop from 'react-scroll-up';

function Top() {
    return (
        <ScrollToTop showUnder={0} duration={1000} >
          <button>
              <Arrow90degUp />
          </button>
      </ScrollToTop>
    )
}

export default Top;