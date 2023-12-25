import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Header } from "../components";

function FindJobs() {
  const[sort, setSort] = useState("Newest");
  const [page, setPage] = useState(1);
  const [numPage, setNumPage] = useState(1);
  const [recordCount, setRecordCount] = useState(0);
  const [data, setData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [jobLocation, setJobLocation] = useState("");
  const [filterJobTypes, setFilterJobTypes] = useState([]); //filter according to JobTypes
  const [filterExp, setFilterExp] = useState([]); //job filter according ko experience
  const [isfFtching, setIsFetching] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  return <div><Header/></div>;
}

export default FindJobs;
