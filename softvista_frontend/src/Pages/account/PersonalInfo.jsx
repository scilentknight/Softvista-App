import React from "react";

const PersonalInfo = () => {
  return (
    <>
      <div className="shadow-lg rounded-md mb-10">
        <h2 className="bg-gray-100 px-5 py-3 rounded-t-md text-lg font-semibold">Personal Information</h2>

        <form action="" className="space-y-4 py-3 px-5">
          <div className="flex flex-col">
            <label htmlFor="" className="mb-1 ms-1">
              Name
            </label>
            <input type="text" placeholder="Enter Name" className="px-3 py-2 border border-gray-200 shadow rounded-md" />
          </div>
          <div className="flex flex-col">
            <label htmlFor="" className="mb-1 ms-1">
              Email
            </label>
            <input type="email" placeholder="Enter Email" className="px-3 py-2 border border-gray-200 shadow rounded-md" />
          </div>
          <div className="flex flex-col">
            <label htmlFor="" className="mb-1 ms-1">
              Phone
            </label>
            <input type="text" placeholder="Enter Phone Number" className="px-3 py-2 border border-gray-200 shadow rounded-md" />
          </div>

          <div className="py-3">
            <button className="bg-green-400 px-5 py-3 text-md rounded-md text-gray-800 text-center hover:bg-gray-900 hover:text-white">Update</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default PersonalInfo;
