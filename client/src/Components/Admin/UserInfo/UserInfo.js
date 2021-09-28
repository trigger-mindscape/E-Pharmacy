import React from 'react';
import { PaperClipIcon } from "@heroicons/react/solid";

const UserInfo = () => {
    return (
      <main className="p-5 overflow-hidden md:container md:mx-auto">
        <div>
          <h3 className="text-lg font-medium leading-6 text-gray-900">
            User Information
          </h3>
          <p className="max-w-2xl mt-1 text-sm text-gray-500">
            Personal details and application.
          </p>
        </div>
        <div className="mt-5 border-t border-gray-200">
          <dl className="divide-y divide-gray-200">
            <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4">
              <dt className="text-sm font-medium text-gray-500">Full name</dt>
              <dd className="flex mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                <span className="flex-grow">Margot Foster</span>
                <span className="flex-shrink-0 ml-4">
                  <button
                    type="button"
                    className="font-medium text-indigo-600 bg-white rounded-md hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Update
                  </button>
                </span>
              </dd>
            </div>
            <div className="py-4 sm:grid sm:py-5 sm:grid-cols-3 sm:gap-4">
              <dt className="text-sm font-medium text-gray-500">Status</dt>
              <dd className="flex mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                <span className="flex-grow">Vendor</span>
                <span className="flex-shrink-0 ml-4">
                  <button
                    type="button"
                    className="font-medium text-indigo-600 bg-white rounded-md hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Update
                  </button>
                </span>
              </dd>
            </div>
            <div className="py-4 sm:grid sm:py-5 sm:grid-cols-3 sm:gap-4">
              <dt className="text-sm font-medium text-gray-500">
                Email address
              </dt>
              <dd className="flex mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                <span className="flex-grow">margotfoster@example.com</span>
                <span className="flex-shrink-0 ml-4">
                  <button
                    type="button"
                    className="font-medium text-indigo-600 bg-white rounded-md hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Update
                  </button>
                </span>
              </dd>
            </div>
            <div className="py-4 sm:grid sm:py-5 sm:grid-cols-3 sm:gap-4">
              <dt className="text-sm font-medium text-gray-500">
                Phone Number
              </dt>
              <dd className="flex mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                <span className="flex-grow">018xxxxxxxxx</span>
                <span className="flex-shrink-0 ml-4">
                  <button
                    type="button"
                    className="font-medium text-indigo-600 bg-white rounded-md hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Update
                  </button>
                </span>
              </dd>
            </div>
            <div className="py-4 sm:grid sm:py-5 sm:grid-cols-3 sm:gap-4">
              <dt className="text-sm font-medium text-gray-500">
                Balance
              </dt>
              <dd className="flex mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                <span className="flex-grow"> $120,000</span>
                <span className="flex-shrink-0 ml-4">
                  <button
                    type="button"
                    className="font-medium text-indigo-600 bg-white rounded-md hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Update
                  </button>
                </span>
              </dd>
            </div>
            <div className="py-4 sm:grid sm:py-5 sm:grid-cols-3 sm:gap-4">
              <dt className="text-sm font-medium text-gray-500">About</dt>
              <dd className="flex mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                <span className="flex-grow">
                  Fugiat ipsum ipsum deserunt culpa aute sint do nostrud anim
                  incididunt cillum culpa consequat. Excepteur qui ipsum aliquip
                  consequat sint. Sit id mollit nulla mollit nostrud in ea
                  officia proident. Irure nostrud pariatur mollit ad adipisicing
                  reprehenderit deserunt qui eu.
                </span>
                <span className="flex-shrink-0 ml-4">
                  <button
                    type="button"
                    className="font-medium text-indigo-600 bg-white rounded-md hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Update
                  </button>
                </span>
              </dd>
            </div>
          </dl>
        </div>
      </main>
    );
};

export default UserInfo;