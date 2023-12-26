import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { CustomButton, Header } from "../components";
import { BiBriefcaseAlt2 } from "react-icons/bi";
import { BsStars } from "react-icons/bs";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { experience, jobTypes, jobs } from "../utils/data";
import { Listbox } from "@headlessui/react";

function FindJobs() {
  const [sort, setSort] = useState("Newest");
  const [page, setPage] = useState(1);
  const [numPage, setNumPage] = useState(1);
  const [recordCount, setRecordCount] = useState(0);
  const [data, setData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [jobLocation, setJobLocation] = useState("");
  const [filterJobTypes, setFilterJobTypes] = useState([]); //filter according to JobTypes
  const [filterExp, setFilterExp] = useState([]); //job filter according ko experience
  const [isFetching, setIsFetching] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  return (
    <div>
      <Header
        title="Discover Your Ideal Career Path"
        type="home"
        handleClick={() => {}}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        location={jobLocation}
        setLocation={setJobLocation}
      />
    </div>
  );
}

export default FindJobs;
