import React from "react";
import Wrapper from "../assets/wrappers/SearchContainer";
import { useAppContext } from "../context/appContext";
import { FiSearch } from "react-icons/fi";
export default function SearchContainer() {
  const { jobTypeOptions, statusOptions, jobType, status } = useAppContext();
  return (
    <Wrapper>
      <form className="form">
        <div className="search">
          <span className="search-icon">
            <FiSearch></FiSearch>
          </span>
          <input type="text" name="search"  placeholder="Software Developer"></input>
        </div>
        <div className="job-status-search">
          <select value={status} className="select-job-status">
            {statusOptions.map((item, index) => {
              return (
                <option key={index} value={item}>
                  {item}
                </option>
              );
            })}
          </select>
        </div>
        <div className="job-type-search">
          <select value={jobType} className="select-job-type">
            {jobTypeOptions.map((item, index) => {
              return (
                <option key={index} value={item}>
                  {item}
                </option>
              );
            })}
          </select>
        </div>
        <div className="clear-filter">
          <button className="btn btn-block clear-btn"> Clear Filter</button>
        </div>
      </form>
    </Wrapper>
  );
}
