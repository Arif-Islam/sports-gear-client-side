import React from 'react';

const TabularItem = (props) => {
    const {_id, name, image, price, quantity, supplier} = props.item;
    return (
        <div className=''>
            <div class="bg-gray-100">
                <div class="overflow-auto rounded-lg shadow hidden md:block">
                    <table class="w-3/5 mx-auto">
                        
                        <tbody class="divide-y divide-gray-100">
                            <tr class="bg-white border-b-2 border-t-1">
                                <td class="w-1/12">
                                    <img className='w-20 mx-auto' src={image} alt="" />
                                </td>
                                <td class="w-1/12 text-center text-sm text-gray-700 whitespace-nowrap">
                                    {name}
                                </td>
                                <td class="w-1/12 text-center text-sm text-gray-700 whitespace-nowrap">{price} </td>
                                <td class="w-1/12 text-center text-sm text-gray-700 whitespace-nowrap">{quantity} </td>
                                <td class="w-1/12 text-center text-sm text-gray-700 whitespace-nowrap">{supplier} </td>
                                <td class="w-1/12 text-center text-sm text-gray-700 whitespace-nowrap">
                                    <button
                                        class="p-1.5 text-xs font-medium uppercase tracking-wider text-red-800 bg-red-200 rounded-lg bg-opacity-50 hover:bg-red-300">Remove</button>
                                </td>
                            </tr>
                            {/* <tr class="bg-gray-50">
                                <td class="p-3 text-sm text-gray-700 whitespace-nowrap">
                                    <a href="#" class="font-bold text-blue-500 hover:underline">10002</a>
                                </td>
                                <td class="p-3 text-sm text-gray-700 whitespace-nowrap">Kring New Fit office chair, mesh + PU, black</td>
                                <td class="p-3 text-sm text-gray-700 whitespace-nowrap">
                                    <span
                                        class="p-1.5 text-xs font-medium uppercase tracking-wider text-yellow-800 bg-yellow-200 rounded-lg bg-opacity-50">Shipped</span>
                                </td>
                                <td class="p-3 text-sm text-gray-700 whitespace-nowrap">16/10/2021</td>
                                <td class="p-3 text-sm text-gray-700 whitespace-nowrap">$200.00</td>
                            </tr> */}

                        </tbody>
                    </table>
                </div>

                {/* <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 md:hidden">
                    <div class="bg-white space-y-3 p-4 rounded-lg shadow">
                        <div class="flex items-center space-x-2 text-sm">
                            <div>
                                <a href="#" class="text-blue-500 font-bold hover:underline">#1000</a>
                            </div>
                            <div class="text-gray-500">10/10/2021</div>
                            <div>
                                <span
                                    class="p-1.5 text-xs font-medium uppercase tracking-wider text-green-800 bg-green-200 rounded-lg bg-opacity-50">Delivered</span>
                            </div>
                        </div>
                        <div class="text-sm text-gray-700">
                            Kring New Fit office chair, mesh + PU, black
                        </div>
                        <div class="text-sm font-medium text-black">
                            $200.00
                        </div>
                    </div>
                    <div class="bg-white space-y-3 p-4 rounded-lg shadow">
                        <div class="flex items-center space-x-2 text-sm">
                            <div>
                                <a href="#" class="text-blue-500 font-bold hover:underline">#1001</a>
                            </div>
                            <div class="text-gray-500">10/10/2021</div>
                            <div>
                                <span
                                    class="p-1.5 text-xs font-medium uppercase tracking-wider text-yellow-800 bg-yellow-200 rounded-lg bg-opacity-50">Shipped</span>
                            </div>
                        </div>
                        <div class="text-sm text-gray-700">
                            Kring New Fit office chair, mesh + PU, black
                        </div>
                        <div class="text-sm font-medium text-black">
                            $200.00
                        </div>
                    </div>
                    <div class="bg-white space-y-3 p-4 rounded-lg shadow">
                        <div class="flex items-center space-x-2 text-sm">
                            <div>
                                <a href="#" class="text-blue-500 font-bold hover:underline">#1002</a>
                            </div>
                            <div class="text-gray-500">10/10/2021</div>
                            <div>
                                <span
                                    class="p-1.5 text-xs font-medium uppercase tracking-wider text-gray-800 bg-gray-200 rounded-lg bg-opacity-50">Canceled</span>
                            </div>
                        </div>
                        <div class="text-sm text-gray-700">
                            Kring New Fit office chair, mesh + PU, black
                        </div>
                        <div class="text-sm font-medium text-black">
                            $200.00
                        </div>
                    </div>
                </div> */}
            </div>
        </div>
    );
};

export default TabularItem;