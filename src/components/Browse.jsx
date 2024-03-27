// import React from "react";

// const Browse = () => {
//   return <div>Browse</div>;
// };

// export default Browse;
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

const SubHeaderDetails = [
  {
    id: 1,
    title: "Setup",
  },
  {
    id: 2,
    title: "Ideate",
  },
  {
    id: 3,
    title: "Quantify",
  },
  {
    id: 4,
    title: "Analyse",
  },
];
function Browse() {
  const [characters, updateCharacters] = useState(SubHeaderDetails);

  return (
    // <div>SubHeader</div>
    <div className="subheader-area d-flex">
      <div className="subheader-menu">
        <ul className="d-flex inner-search-areaa">
          <li>
            <div className="icon-spacing">
              {/* <img src={SearchIcon} alt="" height={20} /> */}
            </div>
          </li>
          <li>
            <div className="icon-spacing">
              {/* <img src={FilterIcon} alt="" height={15} /> */}
            </div>
          </li>
        </ul>
      </div>
      <div className="inside-tab-area d-flex">
        <ul className="d-flex inner-tab-areaa ">
          <DndProvider backend={HTML5Backend}>
            {characters.map((item, index) => (
              <li className="inner-tab-li m-4 border-l border-black rounded-lg">
                <div className="tab-name-area">
                  <NavLink
                    to={`/durationreview/${item.title}`}
                    activeClassName="is-active"
                    className="tab-namemod"
                  >
                    {item.title}
                  </NavLink>
                </div>
              </li>
            ))}
          </DndProvider>
        </ul>

        {/* // <li className='tab-dotimg'>
          //   <img src={Threedot} alt="" height={10} />
          // </li> */}

        <ul className="d-flex inner-plustab-areaa">
          <li>
            <div>{/* <img src={PlusIcon} alt="" height={22} /> */}</div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Browse;
