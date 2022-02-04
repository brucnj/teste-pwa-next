import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState, useEffect } from 'react'

export default function PhotoModal({ imageBitmap }) {
    let [isOpen, setIsOpen] = useState(true);
    function closeModal() {
        setIsOpen(false);
    }
    function openModal() {
        setIsOpen(true)
    } 
    

    useEffect(() => {
        function drawCanvas(canvas, img) {
            // canvas.width = getComputedStyle(canvas).width.split('px')[0];
            // canvas.height = getComputedStyle(canvas).height.split('px')[0];
            // let ratio  = Math.min(canvas.width / img.width, canvas.height / img.height);
            // let x = (canvas.width - img.width * ratio) / 2;
            // let y = (canvas.height - img.height * ratio) / 2;
            canvas.getContext('2d').clearRect(0, 0, 640, 480);
            canvas.getContext('2d').drawImage(img, 0, 0, 640, 480,
                0, 0, 640 * 1, 480 * 1);
        }

        const canvas = document.getElementById('photoCanva');
        console.log(canvas);
        drawCanvas(canvas, imageBitmap);
    });

    return(
        <>
            <Transition appear show={isOpen} as={Fragment}>
                <Dialog
                    as="div"
                    className="fixed inset-0 z-10 overflow-y-auto"
                    onClose={closeModal}
                >
                    {/* Use the overlay to style a dim backdrop for your dialog */}
                    <Dialog.Overlay className="fixed inset-0 bg-black opacity-40" />
                    <div className="min-h-screen px-4 text-center">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                        >
                            <Dialog.Overlay className="fixed inset-0" />
                        </Transition.Child>

                        {/* This element is to trick the browser into centering the modal contents. */}
                        <span
                            className="inline-block h-screen align-middle"
                            aria-hidden="true"
                        >
                            &#8203;
                        </span>
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 scale-95"
                            enterTo="opacity-100 scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 scale-100"
                            leaveTo="opacity-0 scale-95"
                        >
                             <div className="z-30 w-full h-full p-10 bg-white">
                                <canvas id="photoCanva" width={640} height={480} />

                             </div>
                        </Transition.Child>
                    </div>
                </Dialog>
            </Transition>
        </>
    )
}