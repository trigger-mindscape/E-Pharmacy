import React, { useState } from 'react';
import NavBar from '../../Components/Home/NavBar/NavBar';
import Footer from '../../Components/Home/Footer/Footer';
import { RadioGroup } from '@headlessui/react';

const settings = [
  { name: 'Yes' },
  { name: 'No' }
]
function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}
const CreateShop = () => {

    const [isDeliveryHas, setIsDeliveryHas] = useState(settings[0])
    return (
        <div>
            <NavBar/>
            
            {/* Create Shop */}
            <div className="mx-auto container px-4 sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 py-6">
                <form className="space-y-8 divide-y divide-gray-200">
                    <div className="space-y-8 divide-y divide-gray-200 sm:space-y-5">
                        <div>
                        <div>
                            <h2 className="text-xl leading-6 font-medium text-gray-800">Create Your Shop</h2>
                            <p className="mt-1 max-w-2xl text-sm text-gray-500">
                            This information will be displayed publicly so be careful what you share.
                            </p>
                        </div>

                        <div className="mt-6 sm:mt-5 space-y-6 sm:space-y-5">
                           

                            <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                            <label htmlFor="first-name" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                                Shop Name
                            </label>
                            <div className="mt-1 sm:mt-0 sm:col-span-2">
                                <input
                                type="text"
                                name="shop-name"
                                id="shop-name"
                                placeholder="John's Shop"
                                autoComplete="given-name"
                                className="max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
                                />
                            </div>
                            </div>

                            <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                            <label htmlFor="last-name" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                                Shop Owner name
                            </label>
                            <div className="mt-1 sm:mt-0 sm:col-span-2">
                                <input
                                type="text"
                                name="owner-name"
                                id="owner-name"
                                placeholder="John Doe"
                                autoComplete="owner-name"
                                className="max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
                                />
                            </div>
                            </div>


                            <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                                Email address
                            </label>
                            <div className="mt-1 sm:mt-0 sm:col-span-2">
                                <input
                                id="email"
                                name="email"
                                type="email"
                                placeholder="johndoe@email.com"
                                autoComplete="email"
                                className="max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
                                />
                            </div>
                            </div>

                            

                            <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-center sm:border-t sm:border-gray-200 sm:pt-5">
                            <label htmlFor="photo" className="block text-sm font-medium text-gray-700">
                                Shop Logo
                            </label>
                            <div className="mt-1 sm:mt-0 sm:col-span-2">
                                <div className="flex items-center">
                                <span className="h-12 w-12 rounded-full overflow-hidden bg-gray-100">
                                    <svg className="h-full w-full text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                                    </svg>
                                </span>
                                <input
                                    type="file"
                                    className="ml-5 bg-white py-2 px-3 border border-gray-300 rounded-md shadow-sm text-sm leading-4 font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                
                                    Upload
                                />
                                </div>
                            </div>
                            </div>

                            <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                            <label htmlFor="cover-photo" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                                Cover photo
                            </label>
                            <div className="mt-1 sm:mt-0 sm:col-span-2">
                                <div className="max-w-lg flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                                <div className="space-y-1 text-center">
                                    <svg
                                    className="mx-auto h-12 w-12 text-gray-400"
                                    stroke="currentColor"
                                    fill="none"
                                    viewBox="0 0 48 48"
                                    aria-hidden="true"
                                    >
                                    <path
                                        d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                                        strokeWidth={2}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    </svg>
                                    <div className="flex text-sm text-gray-600">
                                    <label
                                        htmlFor="file-upload"
                                        className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                                    >
                                        <span>Upload a file</span>
                                        <input id="file-upload" name="file-upload" type="file" className="sr-only" />
                                    </label>
                                    <p className="pl-1">or drag and drop</p>
                                    </div>
                                    <p className="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
                                </div>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>

                        <div className="pt-8 space-y-6 sm:pt-10 sm:space-y-5">
                        
                        <div className="space-y-6 sm:space-y-5">
                            




                            

                            

                            <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                            <label htmlFor="street-address" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                                Street address
                            </label>
                            <div className="mt-1 sm:mt-0 sm:col-span-2">
                                <input
                                type="text"
                                name="street-address"
                                id="street-address"
                                autoComplete="street-address"
                                className="block max-w-lg w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border-gray-300 rounded-md"
                                />
                            </div>
                            </div>

                            <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                            <label htmlFor="city" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                                City
                            </label>
                            <div className="mt-1 sm:mt-0 sm:col-span-2">
                                <input
                                type="text"
                                name="city"
                                id="city"
                                className="max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
                                />
                            </div>
                            </div>

                            

                            <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                            <label htmlFor="zip" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                                ZIP / Postal
                            </label>
                            <div className="mt-1 sm:mt-0 sm:col-span-2">
                                <input
                                type="text"
                                name="zip"
                                id="zip"
                                autoComplete="postal-code"
                                className="max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
                                />
                            </div>
                            </div>


                            <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                            <label htmlFor="state" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                                Password
                            </label>
                            <div className="mt-1 sm:mt-0 sm:col-span-2">
                                <input
                                type="password"
                                name="password"
                                id="password"
                                className="max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
                                />
                            </div>
                            </div>


                            <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                            <label htmlFor="state" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                               Confirm Password
                            </label>
                            <div className="mt-1 sm:mt-0 sm:col-span-2">
                                <input
                                type="password"
                                name="confirmPassword"
                                id="confirmPassword"
                                className="max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
                                />
                            </div>
                            </div>


                            <div className="pt-6 sm:pt-5">
                                <div role="group" aria-labelledby="label-email">
                                    <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-baseline">
                                    <div>
                                        <div className="text-base font-medium text-gray-900 sm:text-sm sm:text-gray-700" id="label-email">
                                        Has Own Delivery System?
                                        </div>
                                    </div>
                                    <div className="mt-4 sm:mt-0 sm:col-span-2">
                                        <div className="max-w-lg space-y-4">
                                            
                                            
                                            <RadioGroup value={isDeliveryHas} onChange={setIsDeliveryHas}>
                                                <RadioGroup.Label className="sr-only">Privacy setting</RadioGroup.Label>
                                                <div className="bg-white rounded-md -space-y-px">
                                                    {settings.map((setting, settingIdx) => (
                                                    <RadioGroup.Option
                                                        key={setting.name}
                                                        value={setting}
                                                        className={({ checked }) =>
                                                        classNames(
                                                            settingIdx === 0 ? 'rounded-tl-md rounded-tr-md' : '',
                                                            settingIdx === settings.length - 1 ? 'rounded-bl-md rounded-br-md' : '',
                                                            checked ? 'bg-indigo-50 border-indigo-200 z-10' : 'border-gray-200',
                                                            'relative border p-4 flex cursor-pointer focus:outline-none'
                                                        )
                                                        }
                                                    >
                                                        {({ active, checked }) => (
                                                        <>
                                                            <span
                                                            className={classNames(
                                                                checked ? 'bg-indigo-600 border-transparent' : 'bg-white border-gray-300',
                                                                active ? 'ring-2 ring-offset-2 ring-indigo-500' : '',
                                                                'h-4 w-4 mt-0.5 cursor-pointer rounded-full border flex items-center justify-center'
                                                            )}
                                                            aria-hidden="true"
                                                            >
                                                            <span className="rounded-full bg-white w-1.5 h-1.5" />
                                                            </span>
                                                            <div className="ml-3 flex flex-col">
                                                            <RadioGroup.Label
                                                                as="span"
                                                                className={classNames(checked ? 'text-indigo-900' : 'text-gray-900', 'block text-sm font-medium')}
                                                            >
                                                                {setting.name}
                                                            </RadioGroup.Label>
                                                            <RadioGroup.Description
                                                                as="span"
                                                                className={classNames(checked ? 'text-indigo-700' : 'text-gray-500', 'block text-sm')}
                                                            >
                                                                {setting.description}
                                                            </RadioGroup.Description>
                                                            </div>
                                                        </>
                                                        )}
                                                    </RadioGroup.Option>
                                                    ))}
                                                </div>
                                                </RadioGroup>

                                        </div>
                                    </div>
                                    </div>
                                </div>
                                </div>


                        </div>
                        </div>

                        
                    </div>

                    <div className="pt-5">
                        <div className="flex justify-end">
                        <button
                            type="button"
                            className="bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-gray-600 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
                        >
                            Create Account
                        </button>
                        </div>
                    </div>
                    </form>
            </div>

            <Footer/>
        </div>
    );
};

export default CreateShop;