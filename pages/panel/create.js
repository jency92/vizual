import Link from "next/link";
import { useState } from "react";
import Navbar from "../../components/navbar";
import Panel from "../../components/panel-container";

export default function CreatePanel() {
    const [progress, setProgress] = useState(0);
    const [isPanelVisible, setIsPanelVisible] = useState(false);

    const create = () => {
        progress = 0;
        setProgress(progress);
        setIsPanelVisible(false);

        const i = setInterval(() => {
            progress = progress + 10;
            setProgress(progress);

            if (progress === 100) {
                clearInterval(i);
                setIsPanelVisible(true);
            }
        }, 100);
    };

    return (
        <>
            <div className='min-h-screen bg-blueGray-100'>
                <Navbar></Navbar>

                <div className="mx-auto mb-5">
                    <div className="flex flex-wrap h-16">
                        <div className="w-full flex flex-1 justify-start items-center px-10">
                            <p className="font-semibold text-blueGray-600 text-3xl px-6 py-3">Add Panel</p>
                        </div>
                    </div>
                </div>

                <div className="px-10 pb-10 mx-auto">
                    <div className="flex flex-wrap">
                        <div className="w-5/12 bg-slate-50 shadow-lg mr-10">
                            <div className="bg-white mb-6 px-6 py-6">
                                <div className="text-center flex justify-between">
                                    <h6 className="font-semibold text-blueGray-600 uppercase text-md">Panel Information</h6>
                                </div>
                            </div>

                            <div className="px-10">
                                <div className="relative w-full mb-6">
                                    <label className="block text-blueGray-400 text-sm mb-2">Panel Title</label>
                                    <input type="text" className="border-0 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" placeholder="Enter panel name" />
                                </div>

                                <div className="relative w-full mb-6">
                                    <label className="block text-blueGray-400 text-sm mb-2">Panel Type</label>
                                    <input type="text" className="border-0 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" placeholder="Enter panel type" />
                                </div>

                                <div className="relative w-full mb-6">
                                    <label className="block text-blueGray-400 text-sm mb-2">Data Source</label>
                                    <input type="text" className="border-0 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" placeholder="Enter panel type" />
                                </div>

                                <div className="relative w-full mb-6">
                                    <label className="block text-blueGray-400 text-sm mb-2">Data Query</label>
                                    <textarea type="text" className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" rows="4" placeholder="Enter panel description"></textarea>
                                </div>

                                <button className="bg-blueGray-500 text-white active:bg-amber-600 font-bold uppercase text-sm px-6 py-2 mb-6 rounded-full shadow hover:shadow-lg hover:bg-amber-500 outline-none focus:outline-none ease-linear transition-all duration-150" type="button" onClick={create}>
                                    Execute & Visualize
                                </button>
                            </div>
                        </div>

                        <div className="w-5/12 flex min-h-full justify-center items-center">
                            {
                                isPanelVisible ?
                                    <div className="flex flex-col items-center">
                                        <Panel type="Table"></Panel>
                                        <Link href="/dashboard/view/verizon" passHref>
                                            <button className="bg-blueGray-500 text-white active:bg-amber-600 font-bold uppercase text-sm px-6 py-2 mb-6 rounded-full shadow hover:shadow-lg hover:bg-amber-500 outline-none focus:outline-none ease-linear transition-all duration-150" type="button">
                                                Confirm & Add Panel
                                            </button>
                                        </Link>
                                    </div>
                                    :
                                    <div className="w-4/12 overflow-hidden h-2 mb-4 text-xs flex rounded bg-blueGray-200" >
                                        <div style={{ width: progress + '%' }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blueGray-500"></div>
                                    </div>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}