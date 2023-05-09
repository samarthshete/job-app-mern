import { useAppContext } from "../context/appContext";
import { useEffect } from "react";
import Loading from "./Loading";
import Job from "./Job";
import Alert from "./Alert";
import Wrapper from "../assets/wrappers/JobsContainer";
 

const JobsContainer = () => {
  const {
    getJobs,
    jobs,
    isLoading,
    page,
    totalJobs,
    search,
    searchStatus,
    searchType,
    sort,
    sortOptions,
    showAlert,
    handleChange,
  } = useAppContext();
  useEffect(() => {
    getJobs();
    // eslint-disable-next-line
  }, [page, search, searchStatus, searchType, sort]);
  if (isLoading) {
    return <Loading center />;
  }

  if (jobs.length === 0) {
    return (
      <Wrapper>
        <h2>No jobs to display...</h2>
      </Wrapper>
    );
  }
  const handleSort = (e) =>{
      handleChange( {name :e.target.name, value : e.target.value})
  }
  return (
    <Wrapper>
      {showAlert && <Alert />}
      <div className="heading">
        <h5>
          {totalJobs} job{jobs.length > 1 && "s"} found
        </h5>
        <div>
          <span className="sort" onChange={handleSort}> Sort by</span>
          <select name="sort" value={sort} className="sort-options">
            {sortOptions.map((item, index) => {
              return (
                <option key={index} value={item}>
                  {item}
                </option>
              );
            })}
          </select>
        </div>
      </div>
      <div className="jobs">
        {jobs.map((job) => {
          return <Job key={job._id} {...job} />;
        })}
      </div>
    </Wrapper>
  );
};

export default JobsContainer;
