import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { jobs } from "../utils/data";
import moment from "moment";
import { AiOutlineSafetyCertificate } from "react-icons/ai";
import { CustomButton, JobCard } from "../components";

function JobDetail() {
  const params = useParams();
  const id = parseInt(params.id) - 1;
  const [job, setJob] = useState(jobs[0]);
  const [selected, setSelected] = useState("0");
  useEffect(() => {
    setJob(jobs[id ?? 0]);
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, [id]);
  return (
    <div className="container mx-auto">
      <div className="w-full flex flex-col md:flex-row gap-10 ">
        <div className="w-full h-fit md:w-2/3 2xl:2/4 bg-white px-5 py-10 md:px-10 shadow-md ">
          <div className="w-full flex items-center justify-between hover:">
            <div className="w-3/4 flex gap-2">
              <img
                src={job?.company?.profileUrl}
                alt={job?.company?.name}
                className="w-20 h-20 md:w-24 md:h-20 rounded-lg p-3 hover:scale-105 "
              />
              <div className="flex flex-col">
                <p className="text-xl font-semibold text-gray-600">
                  {job?.jobTitle}
                </p>

                <span className="text-base">{job?.location}</span>

                <span className="text-base text-blue-600">
                  {job?.company?.name}
                </span>

                <span className="text-gray-500 text-sm">
                  {moment(job?.createdAt).fromNow()}
                </span>
              </div>  
            </div>
            <div className=' flex flex-col flex-wrap items-center cursor-pointer hover:font-semibold hover:scale-105 hover:shadow-md bg-slate-100 rounded-lg'>
              <AiOutlineSafetyCertificate className='text-3xl text-green-500' />
              <span className=" text-sm opacity-80">verified</span>
            </div>
          </div>
          <div className='w-full flex flex-wrap md:flex-row gap-2 items-center justify-between my-10'>
            <div className='bg-[#bdf4c8] w-40 h-16 rounded-lg flex flex-col items-center justify-center'>
              <span className='text-sm'> {job?.jobType === "Internship" ? "Stipend" : "Salary"}</span>
              <p className='text-lg font-semibold text-gray-700'>
                {job?.salary} INR
              </p>
            </div>

            <div className='bg-[#bae5f4] w-40 h-16 rounded-lg flex flex-col items-center justify-center'>
              <span className='text-sm'>Job Type</span>
              <p className='text-lg font-semibold text-gray-700'>
                {job?.jobType}
              </p>
            </div>

            <div className='bg-[#fed0ab] w-40 h-16 px-6 rounded-lg flex flex-col items-center justify-center'>
              <span className='text-sm '>Applicantions</span>
              <p className='text-lg font-semibold text-gray-700'>
                {job?.applicants?.length}K
              </p>
            </div>

            <div className='bg-[#cecdff] w-40 h-16 px-6 rounded-lg flex flex-col items-center justify-center'>
              <span className='text-sm'>No. of Vacancies</span>
              <p className='text-lg font-semibold text-gray-700'>
                {job?.vacancies}
              </p>
            </div>
          </div>
          <div className='w-full flex gap-4 py-5'>
            <CustomButton
              onClick={() => setSelected("0")}
              title='Job Description'
              containerStyles={`w-full flex items-center justify-center py-3 px-5 outline-none rounded-full text-sm ${
                selected === "0"
                  ? "bg-black text-white"
                  : "bg-white text-black border border-gray-300 hover:bg-gray-200"
              }`}
            />

            <CustomButton
              onClick={() => setSelected("1")}
              title='Company'
              containerStyles={`w-full flex items-center justify-center  py-3 px-5 outline-none rounded-full text-sm ${
                selected === "1"
                  ? "bg-black text-white"
                  : "bg-white text-black border border-gray-300 hover:bg-gray-200"
              }`}
            />
          </div>
          <div className='my-6'>
            {selected === "0" ? (
              <>
                <p className='text-xl font-semibold'>Job Decsription</p>

                <span className='text-base'>{job?.detail[0]?.desc}</span>

                {job?.detail[0]?.requirement && (
                  <>
                    <p className='text-xl font-semibold mt-8'>Requirement</p>
                    <span className='text-base'>
                      {job?.detail[0]?.requirement}
                    </span>
                  </>
                )}
              </>
            ) : (
              <>
                <div className='mb-6 flex flex-col'>
                  <p className='text-xl text-blue-600 font-semibold'>
                    {job?.company?.name}
                  </p>
                  <span className='text-base'>{job?.company?.location}</span>
                  <span className='text-sm'>{job?.company?.email}</span>
                </div>

                <p className='text-xl font-semibold'>About Company</p>
                <span>{job?.company?.about}</span>
              </>
            )}
          </div>
          <div className='w-full'>
            <CustomButton
              title='Apply Now'
              containerStyles={`w-full flex items-center justify-center text-white bg-black py-3 px-5 outline-none rounded-full text-base hover:bg-opacity-90`}
            />
          </div>
        </div>
        {/* RIGHT SIDE */}
        <div className='w-full md:w-1/3 2xl:w-2/4 p-5 mt-20 md:mt-0'>
          <p className='text-black hover:text-gray-700 font-semibold'>Similar Job Post</p>

          <div className='w-full flex flex-wrap gap-3'>
            {jobs?.slice(0, 6).map((job, index) => (
              <div className=" hover:scale-105">
              <JobCard job={job} key={index}/>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default JobDetail;
