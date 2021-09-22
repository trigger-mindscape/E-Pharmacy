import React, { Fragment } from 'react';
// import NavBar from '../../Components/Home/NavBar/NavBar';

const Career = () => {
    return (
      <Fragment>
        <section className="px-6 py-6 bg-white main md:px-16">
          <div className="w-full max-w-xl mx-auto">
            <form action="" method="post">
              <h1 className="mb-2 text-2xl">Post new job</h1>
              <div className="py-2 mb-5 border-b-2 job-info">
                <div className="mb-4">
                  <label
                    className="block mb-2 text-sm text-gray-700"
                    for="job-title"
                  >
                    Title
                  </label>
                  <input
                    className="block w-full px-4 py-3 mb-3 leading-tight text-gray-700 bg-white border border-gray-400 rounded appearance-none focus:outline-none focus:border-gray-500"
                    type="email"
                    id="job-title"
                    name="job-title"
                    placeholder="Frontend Developer"
                    autofocus
                  />
                </div>
                <div className="mb-4">
                  <label
                    className="block mb-2 text-sm text-gray-700"
                    for="apply-link"
                  >
                    Link to apply
                  </label>
                  <input
                    className="block w-full px-4 py-3 mb-3 leading-tight text-gray-700 bg-white border border-gray-400 rounded appearance-none focus:outline-none focus:border-gray-500"
                    type="email"
                    id="apply-link"
                    name="apply-link"
                    placeholder="https://www.djangoproject.com/apply"
                  />
                </div>
                <div className="md:flex md:justify-between">
                  <div className="w-full mb-4 md:w-3/12 md:mb-0">
                    <label
                      className="block mb-2 text-sm text-gray-700"
                      for="job-type"
                    >
                      Job Type
                    </label>
                    <div className="relative">
                      <select
                        className="block w-full px-4 py-3 pr-8 leading-tight text-gray-700 bg-white border border-gray-400 rounded appearance-none focus:outline-none focus:border-gray-500"
                        id="job-type"
                        name="job-type"
                      >
                        <option>Full-time</option>
                        <option>Part-time</option>
                        <option>Freelance</option>
                        <option>Contract</option>
                      </select>

                      <div className="absolute inset-y-0 right-0 flex items-center px-2 text-gray-700 pointer-events-none">
                        <svg
                          className="w-4 h-4 fill-current"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                        </svg>
                      </div>
                    </div>
                  </div>

                  <div className="w-full mb-4 md:w-8/12 md:mb-0">
                    <label
                      for="location"
                      className="block mb-2 text-sm text-gray-700"
                    >
                      Location
                    </label>
                    <input
                      type="text"
                      className="block w-full px-4 py-3 mb-3 leading-tight text-gray-700 bg-white border border-gray-400 rounded appearance-none focus:outline-none focus:border-gray-500"
                      id="location"
                      name="location"
                      placeholder="Schwerin"
                    />

                    <div>
                      <label
                        className="flex items-center text-gray-600"
                        for="remote"
                      >
                        <input
                          className="mr-2 leading-tight"
                          type="checkbox"
                          id="remote"
                        />
                        <span className="text-sm">
                          Work can be done remotely
                        </span>
                      </label>
                    </div>
                  </div>
                </div>
                <div>
                  <label
                    for="description"
                    className="block mb-2 text-sm text-gray-700"
                  >
                    Description
                  </label>
                  <textarea
                    name="description"
                    id="description"
                    cols=""
                    rows=""
                  ></textarea>
                </div>
                <div className="flex flex-wrap -mx-3">
                  <div className="w-full px-3 mb-4 md:w-1/2 md:mb-0">
                    <label
                      for="company"
                      className="block mb-2 text-sm text-gray-700"
                    >
                      Company
                    </label>
                    <input
                      type="text"
                      className="block w-full px-4 py-3 mb-3 leading-tight text-gray-700 bg-white border border-gray-400 rounded appearance-none focus:outline-none focus:border-gray-500"
                      id="company"
                      name="company"
                      placeholder="Company"
                    />
                  </div>
                  <div className="w-full px-3 mb-4 md:w-1/2 md:mb-0">
                    <label
                      for="company"
                      className="block mb-2 text-sm text-gray-700"
                    >
                      Company Website
                    </label>
                    <input
                      type="text"
                      className="block w-full px-4 py-3 mb-3 leading-tight text-gray-700 bg-white border border-gray-400 rounded appearance-none focus:outline-none focus:border-gray-500"
                      id="company"
                      name="company"
                      placeholder="https://www.djangoproject.com/"
                    />
                  </div>
                </div>
                <div className="mb-4 md:mb-0">
                  <label
                    for="company-logo"
                    className="block mb-2 text-sm text-gray-700"
                  >
                    Logo Image
                  </label>
                  <input
                    type="file"
                    className="block w-full px-3 py-3 mb-3 leading-tight text-gray-700 bg-gray-200 border border-gray-200 rounded appearance-none focus:outline-none focus:bg-white focus:border-gray-500"
                    id="company-logo"
                    name="company-logo"
                  />
                </div>
              </div>
              <div>
                <button
                  className="px-3 py-2 text-white bg-teal-500 rounded hover:bg-teal-600"
                  type="submit"
                >
                  Create job
                </button>
              </div>
            </form>
          </div>
        </section>
      </Fragment>
    );
};

export default Career;