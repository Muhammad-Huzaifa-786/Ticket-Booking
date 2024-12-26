import "./list.css";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import { format } from "date-fns";
import { DateRange } from "react-date-range";
import SearchItem from "../../components/searchItem/SearchItem";

const List = () => {
  const location = useLocation();
  const [destination, setDestination] = useState(location.state.destination);
  const [date, setDate] = useState(location.state.date);
  const [openDate, setOpenDate] = useState(false);
  const [options, setOptions] = useState(location.state.options);

  return (
    <div>
      <Navbar />
      <Header type="list" />
      <div className="listContainer">
        <div className="listWrapper">
          <div className="listSearch">
            <h1 className="lsTitle">Search</h1>
            <div className="lsItem">
              <label>Destination</label>
              <input placeholder={destination} type="text" />
            </div>
            <div className="lsItem">
              <label>Check-in Date</label>
              <span onClick={() => setOpenDate(!openDate)}>{`${format(
                date[0].startDate,
                "MM/dd/yyyy"
              )} to ${format(date[0].endDate, "MM/dd/yyyy")}`}</span>
              {openDate && (
                <DateRange
                  onChange={(item) => setDate([item.selection])}
                  minDate={new Date()}
                  ranges={date}
                />
              )}
            </div>
            <div className="lsItem">
              <label>Options</label>
              <div className="lsOptions">
                <div className="lsOptionItem">
                  <span className="lsOptionText">
                    Min price <small>per night</small>
                  </span>
                  <input type="number" className="lsOptionInput" />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">
                    Max price <small>per night</small>
                  </span>
                  <input type="number" className="lsOptionInput" />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">Adult</span>
                  <input
                    type="number"
                    min={1}
                    className="lsOptionInput"
                    placeholder={options.adult}
                  />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">Children</span>
                  <input
                    type="number"
                    min={0}
                    className="lsOptionInput"
                    placeholder={options.children}
                  />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">Room</span>
                  <input
                    type="number"
                    min={1}
                    className="lsOptionInput"
                    placeholder={options.room}
                  />
                </div>
              </div>
            </div>
            <button>Search</button>
          </div>
          <div className="listResult">
          <SearchItem price={'80$'} card={"https://cf.bstatic.com/xdata/images/hotel/square600/261707778.webp?k=fa6b6128468ec15e81f7d076b6f2473fa3a80c255582f155cae35f9edbffdd78&o=&s=1"}/>
          <SearchItem price={'200$'} card={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGlQM_drq4TaYEAmJPvuGeRQN1i1WrSxgXGQ&s"}/>
          <SearchItem price={'180$'} card={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQizTJn69TN_xle5ewMOoj9Tc9Li_iRTuGmQ&s"}/>
          <SearchItem price={'40$'} card={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXm7ucg2ozifKb4heSwPcZhq1Dyw5WdJVoxg&s"}/>
          <SearchItem price={'90$'} card={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNVeZDp5I2kxJGs1pLEQCX9DXuQ9JDFVIAEA&s"}/>
          <SearchItem price={'142$'} card={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNVeZDp5I2kxJGs1pLEQCX9DXuQ9JDFVIAEA&s"}/>
          <SearchItem price={'109$'} card={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3mctNzOUKpC_SsZ7RPWW-xoIsZtUfRb69yQ&s"}/>
          <SearchItem price={'100$'} card={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-qS-UVE5eQ-NYHbJCBLoPtvyUrD8lgd4FWg&s1"}/>


          </div>
        </div>
      </div>
    </div>
  );
};

export default List;
